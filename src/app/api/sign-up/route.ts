// outsource dependencies
import { NextResponse } from 'next/server';

// local dependencies
import { prepareSignUpEmailConfig, sendEmail } from '@/services/sendgrid';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(new Error('Email and password are required'), { status: 400 });
  }

  try {
    const emailConfig = prepareSignUpEmailConfig(email);
    await sendEmail(emailConfig);
    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(new Error('Failed to register user'), { status: 500 });
  }
}
