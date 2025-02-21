// outsource dependencies
import { Metadata } from 'next';

// local dependencies
import { SignUpForm } from './sign-up-form';

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'Sign up page',
};

export default function Page() {
  return <div className="w-full max-w-[380px] p-[30px]">
    <h2 className="text-2xl font-semibold text-center mb-10">Sign up</h2>
    <SignUpForm />
  </div>;
}
