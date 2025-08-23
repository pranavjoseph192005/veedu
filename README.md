# Veedu - Real Estate Investment Platform

Veedu is a comprehensive real estate investment platform designed to help investors and property owners manage their real estate portfolios, track finances, and grow their investments. Whether you're a first-time investor or an experienced property manager, Veedu provides the tools you need to succeed in real estate.

## 🏠 What is Veedu?

Veedu is a Next.js-based web application that serves as a complete real estate investment management system. It helps users:

- **Track Properties**: Manage multiple real estate properties with detailed information
- **Monitor Finances**: Track income, expenses, and profitability across your portfolio
- **Handle Maintenance**: Create and manage maintenance tickets for properties
- **Plan Investments**: Set goals and track progress toward real estate investment objectives
- **Analyze Performance**: Get insights into your portfolio's performance and growth

## ✨ Key Features

- **Property Management**: Add, edit, and track multiple properties with detailed location data
- **Financial Tracking**: Monitor monthly income, expenses, and debt obligations
- **Maintenance Tickets**: Create and track maintenance requests for each property
- **User Profiles**: Personalized investment goals and experience tracking
- **Dashboard Analytics**: Comprehensive overview of your real estate portfolio
- **Onboarding Flow**: Guided setup process for new users

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS
- **Backend**: Python FastAPI with Prisma ORM
- **Database**: PostgreSQL with Prisma migrations
- **Authentication**: Supabase authentication system
- **Deployment**: Vercel-ready configuration

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📁 Project Structure

- `frontend/` - Next.js application with dashboard, properties, and user management
- `backend/` - Python FastAPI backend with calculation and CRUD operations
- `prisma/` - Database schema and migrations for PostgreSQL
- `components/` - Reusable UI components and layouts

## 🎯 Target Users

- **First-time Investors**: New to real estate investing with guided onboarding
- **Property Owners**: Existing property owners looking to manage their portfolio
- **Portfolio Managers**: Investors managing multiple properties and seeking growth

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
