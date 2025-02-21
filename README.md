## 🌐 Deployment

The project is deployed on Vercel. You can:
- Visit the live demo: [https://mobile-sign-up.vercel.app/](https://mobile-sign-up.vercel.app/)

## 🛠 Technologies Used

- Next.js 15
- TypeScript
- SendGrid for email functionality

## 💻 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/project-name.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM=your_verified_sender_email
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── pages/         # Next.js pages
  ├── styles/        # CSS styles
  ├── utils/         # Utility functions
  └── types/         # TypeScript types
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [SendGrid Documentation](https://docs.sendgrid.com/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
