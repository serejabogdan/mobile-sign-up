import classNames from 'classnames';
import { ChangeEvent } from 'react';
import { useController, useFormContext } from 'react-hook-form';

type Props = {
  errorMessage: string,
}

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i;

export function EmailField ({ errorMessage }: Props) {
  const { control, trigger } = useFormContext();
  const { field, fieldState } = useController({
    name: 'email',
    control,
    rules: {
      required: 'Invalid email address',
      pattern: {
        value: emailPattern,
        message: 'Invalid email address'
      }
    }
  });

  const { isDirty, isTouched } = fieldState;

  const isValidEmail = emailPattern.test(field.value || '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (isTouched) {
      trigger(field.name);
    }
    field.onChange(value);
  };

  return <div>
    <input
      {...field}
      type="email"
      onChange={handleChange}
      placeholder="example@gmail.com"
      className={classNames(
        {
          '!border-success text-success': isValidEmail && isDirty,
          '!border-error bg-error-light text-error': errorMessage
        },
        'w-full bg-white px-4 py-2 h-[48px] border rounded-[10px] focus:outline-none focus:ring-0 focus:border-[#6F91BC]'
      )}
    />
    { errorMessage && <p className="ml-5 mt-2 text-[#FF8080] text-sm">{ errorMessage }</p> }
  </div>;
}
