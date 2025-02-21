'use client';

// outsource dependencies
import React from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm, useFormState } from 'react-hook-form';

// local dependencies
import { isError } from '@/type-guards';
import { EmailField } from './email-field';
import { ROUTE } from '@/constants/routes';
import { PasswordField } from './password-field';

type FormFields = {
  email: string;
  password: string;
}

const defaultValues = { email: '', password: '' };

export const SignUpForm = () => {
  const router = useRouter();
  const methods = useForm({ defaultValues, mode: 'onBlur' });
  const { handleSubmit, control, formState: { errors, isSubmitting } } = methods;
  const { isSubmitted } = useFormState({ control });

  const onSubmit = async (formData: FormFields) => {
    try {
      const response = await fetch('/api/sign-up', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json', },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }
      router.push(ROUTE.SUCCESS_SIGN_UP);
    } catch (error) {
      if (isError(error)) {
        toast.error(`Submission error: ${error.message}`);
      }
    }
  };

  return <>
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <EmailField errorMessage={errors.email?.message || ''} />

        <PasswordField isSubmitted={isSubmitted} hasError={Boolean(errors.password?.message)} />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-10 text-white min-w-[240px] block mx-auto bg-[linear-gradient(45deg,#70C3FF_0%,#4B65FF_100%)] py-3 px-4 rounded-full font-bold rounded-full transition-opacity duration-200 ease-in-out hover:opacity-90"
        >
          { isSubmitting ? 'Signing up...' : 'Sign up' }
        </button>
      </form>
    </FormProvider>
  </>;
};
