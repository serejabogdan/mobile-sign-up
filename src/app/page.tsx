// outsource dependencies
import Link from 'next/link';

// local dependencies
import { ROUTE } from '@/constants/routes';

export default function Page() {
  return <Link
    href={ROUTE.SIGN_UP}
    className="text-center mt-10 px-16 text-white block mx-auto bg-[linear-gradient(45deg,#70C3FF_0%,#4B65FF_100%)] py-3 rounded-full font-bold rounded-full transition-opacity duration-200 ease-in-out hover:opacity-90"
  >Sign up</Link>;
}
