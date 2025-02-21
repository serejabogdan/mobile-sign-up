'use client';

// outsource dependencies
import React from 'react';
import * as yup from 'yup';
import classNames from 'classnames';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// local dependencies
import { PasswordField } from './password-field';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Invalid email address'),
  password: yup
    .string()
    .required('required')
    .min(8, 'min')
    .max(64, 'max')
    .matches(/[A-Z]/, 'uppercase')
    .matches(/[0-9]/, 'number')
    .matches(/^[^\s]*$/, 'spaces')
});

export const SignUpForm = () => {
  const methods = useForm({ resolver: yupResolver(schema) });
  const { register, trigger, handleSubmit, formState: { errors, isSubmitting } } = methods;
  const onSubmit = async (data) => {
    try {
      console.log('Form submitted:', data);
      // Here you would typically make an API call to register the user
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return <div className="min-h-screen flex flex-col items-center justify-center p-4">
    <div className="w-full max-w-[380px] p-[30px]">
      <h2 className="text-2xl font-semibold text-center mb-10">Sign up</h2>
      <FormProvider<{email: string, password: string}> {...methods} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="email"
              placeholder="email@example.com"
              className={classNames(errors.email ? 'border-[#FF8080] bg-[#FDEFEE] text-[#FF8080]' : '', 'w-full bg-white px-4 py-2 h-[48px] border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500')}
              {...register('email', { onBlur: (e) => {
                trigger('email');
                return e.target.value;
              } })}
            />
            { errors.email && <p className="ml-5 mt-2 text-[#FF8080] text-sm">{ errors.email.message }</p> }
          </div>

          <PasswordField errorMessage={errors.password?.message || ''} />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-10 text-white min-w-[240px] block mx-auto bg-[linear-gradient(45deg,#70C3FF_0%,#4B65FF_100%)] py-3 px-4 rounded-full font-bold rounded-full transition-opacity duration-200 ease-in-out hover:opacity-90"
          >
            { isSubmitting ? 'Signing up...' : 'Sign up' }
          </button>
        </form>
      </FormProvider>
    </div>
  </div>;
};
