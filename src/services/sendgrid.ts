import sgMail, { MailDataRequired } from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function sendEmail (msg: MailDataRequired | MailDataRequired[]) {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export function prepareSignUpEmailConfig (to: string) {
  return {
    to,
    from: process.env.SENDGRID_FROM || '',
    subject: 'Sign up email from Serhii',
    text: `Hi ${to}. We created an account for you. Have a good one!`,
    html: `<div style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      ">
        <h2 style="color: #333;">Welcome!</h2>
        <p style="color: #666; line-height: 1.5;">
          Hi ${to},
        </p>
        <p style="color: #666; line-height: 1.5;">
          We created an account for you. Have a good one!
        </p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #999; font-size: 12px;">
            This is an automated message, please do not reply directly to this email.
          </p>
        </div>
      </div>`,
  };
}
