// outsource dependencies
import classNames from 'classnames';
import { ChangeEvent, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

// local dependencies
import { EyeIcon } from '@/components/icons/eye';
import { EyeSlashIcon } from '@/components/icons/eye-slash';

const validatePassword = (password: string = '') => {
  return {
    hasNumber: /\d/g.test(password),
    hasNoSpaces: !/\s/.test(password),
    hasValidLength: password.length >= 8 && password.length <= 64,
    hasUpperAndLowerCase: /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password),
  };
};

type Props = {
  hasError: boolean,
  isSubmitted: boolean,
}

export function PasswordField ({ isSubmitted, hasError }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const { trigger, control } = useFormContext();
  const { field, fieldState } = useController({
    control,
    name: 'password',
    rules: {
      required: 'Invalid password format',
      minLength: { value: 8, message: 'Invalid password format' },
      maxLength: { value: 64, message: 'Invalid password format' },
      pattern: {
        message: 'Invalid password format',
        value: /^(?=.*[A-Z])(?=.*[0-9])(?!.*\s)/,
      }
    }
  });

  const { isTouched, isDirty } = fieldState;
  const showValidation = isSubmitted || isTouched || isDirty;
  const validation = validatePassword(field.value);
  const allValidationsPassed = !Object.values(validation).some(item => !item);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (isTouched) {
      trigger(field.name);
    }
    field.onChange(value);
  };

  const PasswordButtonIcon = showPassword ? EyeIcon : EyeSlashIcon;

  return <>
    <div className="relative flex items-center mt-5">
      <input
        {...field}
        onChange={handleChange}
        placeholder="Create your password"
        type={showPassword ? 'text' : 'password'}
        className={classNames(
          'w-full bg-white px-4 py-2 h-[48px] border rounded-[10px] focus:outline-none focus:ring-0 focus:border-[#6F91BC]',
          {
            '!border-error bg-error-light text-error': hasError,
            '!border-success text-success': !hasError && allValidationsPassed
          }
        )}
      />
      <button
        type="button"
        onClick={() => setShowPassword(prev => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
      >
        <PasswordButtonIcon className={classNames('fill-blue-muted', { '!fill-error': hasError, '!fill-success': !hasError && allValidationsPassed })} />
      </button>
    </div>

    <div className="space-y-1 ml-5 mt-5">
      <ValidationMessage
        showValidation={showValidation}
        isTouched={isSubmitted || isTouched}
        message="8 characters or more (no spaces)"
        isValid={validation.hasValidLength && validation.hasNoSpaces}
      />
      <ValidationMessage
        showValidation={showValidation}
        isTouched={isSubmitted || isTouched}
        message="Uppercase and lowercase letters"
        isValid={validation.hasUpperAndLowerCase}
      />
      <ValidationMessage
        message="At least one digit"
        isValid={validation.hasNumber}
        showValidation={showValidation}
        isTouched={isSubmitted || isTouched}
      />
    </div>
  </>;
}

const ValidationMessage = (
  { isValid, message, showValidation, isTouched }:
  { isValid: boolean; message: string; showValidation: boolean; isTouched: boolean; }
) => {
  const textColor = showValidation && (isValid ? '!text-success' : isTouched && '!text-error');

  return <div className={classNames('text-sm text-gray-400', textColor)}>{ message }</div>;
};
