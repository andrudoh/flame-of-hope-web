# Flame of Hope Web

A Next.js application built with TypeScript, following strict coding conventions for maintainability and team collaboration.

## 🛠 Technology Stack

- **React** 19+
- **Next.js** 16+ (Pages Router)
- **TypeScript** 5+
- **Tailwind CSS** 4+
- **SWR** for data fetching
- **React Hook Form** + **Zod** for forms
- **Radix UI** for primitives
- **Jotai** for state management (when needed)
- **ESLint** + **Prettier** for code quality

## 📁 Project Structure

```
src/
├── api/              # API calls, DTOs, schemas
├── components/       # Reusable UI components (flat structure)
├── pages/            # Next.js pages
├── hooks/            # Custom React hooks
├── contexts/         # React Context providers
├── utils/            # Utility functions
├── constants/        # App-wide constants
├── lib/              # Third-party library configs
├── styles/           # Global styles
└── types/            # Shared TypeScript types
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format

# Check formatting
npm run format:check
```

## 📚 Coding Rules

This project follows strict coding conventions. Please refer to:

- [`CODING_RULES.md`](./CODING_RULES.md) - Complete coding rules and conventions
- [`CODING_RULES_QUICK_REFERENCE.md`](./CODING_RULES_QUICK_REFERENCE.md) - Quick reference guide

### Key Rules

- ✅ Use `import * as React from 'react'`
- ✅ Named exports for components
- ✅ Flat component structure (max 1 level)
- ✅ SWR for data fetching
- ✅ React Hook Form + Zod for forms
- ✅ Tailwind CSS for styling
- ✅ TypeScript strict mode

## 📝 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [SWR](https://swr.vercel.app/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
