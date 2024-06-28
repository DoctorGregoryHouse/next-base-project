This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

## Folderstructure

src/app contains projectcode (no configs)

### App

Routing is done with usual next.js folderstructure.

The following files have to be added here before deploying:

- sitemap.ts
- robots.ts
- favicon.ico

### Components

Put every react component in a folder with its corresponding scss module file

### Data

Strings and other static data

### Utils

Put react hooks and functions here
