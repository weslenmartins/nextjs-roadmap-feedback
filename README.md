# Roadmap-Feedback

Study project aborted the Next.js framework based on React. Also using Mongodb to store the data recorded on the platform. An API is generated and released with each new insertion in the platform, enabling inclusion in other tools.

✅ Next.js
✅ TypeScript
✅ Mongodb
✅ API JSON

## O que o sistema faz?

Creates a roadmap of functionality suggestions in phases such as backlog, in development and complete. The user can suggest a feature and it will be absorbed in the current flow. New visitors can comment independently on each suggestion.

A tanning module for each feature and for each comment all independently.

A JSON API is generated to provide this information for new tools.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variable

To configure the connection with the Mongodb, you need to rename the file `example_env` to `.env`

It is necessary to create an account at Mongodb and generate a cluster with a collection.

```
MONGODB_URI=CODE_HERE
MONGODB_DB=CODE_HERE
```

### API
Disponivel no endereço
URL/api/task

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
