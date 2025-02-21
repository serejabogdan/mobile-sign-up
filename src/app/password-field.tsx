// outsource dependencies
import { useState } from 'react';
import classNames from 'classnames';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useFormContext } from 'react-hook-form';

export function PasswordField ({ errorMessage }: {errorMessage: string}) {
  const [showPassword, setShowPassword] = useState(false);
  const { register, trigger } = useFormContext();

  return <>
    <div className="relative flex items-center mt-5">
      <input
        placeholder="Create your password"
        type={showPassword ? 'text' : 'password'}
        className={classNames(Boolean(errorMessage) ? 'border-red-500' : '', 'w-full bg-white px-4 py-2 h-[48px] border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500')}
        {...register('password', { onChange: (e) => {
          trigger('password');
          return e.target.value;
        },
        onBlur: (e) => {
          trigger('password');
          return e.target.value;
        } })}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
      >
        { showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" /> }
      </button>
    </div>

    <div className="space-y-1 ml-5 mt-5">
      <div className={classNames('text-sm', ['required', 'min', 'spaces'].includes(errorMessage) ? 'text-red-500' : 'text-gray-500')}>8 characters or more (no spaces)</div>
      <div className={classNames('text-sm', ['uppercase', 'lowercase'].includes(errorMessage) ? 'text-red-500' : 'text-gray-500')}>Uppercase and lowercase letters</div>
      <div className={classNames('text-sm', errorMessage === 'number' ? 'text-red-500' : 'text-gray-500')}>At least one digit </div>
    </div>
  </>;
}
