# Roadmap-Feedback

Study project aborted the Next.js framework based on React. Also using Mongodb to store the data recorded on the platform. An API is generated and released with each new insertion in the platform, enabling inclusion in other tools.

✅ Next.js
✅ TypeScript
✅ Mongodb
✅ API JSON

## What does the system do?

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

### Email Trigger

The e-mail notification is performed with the integration with [SengGrid] (https://sendgrid.com/).
You must include the SendGrid API key in the `.env` file as in the example:

```
SENDGRID_API_KEY=CODE_HERE
```

To configure the email to be notified, you need to update the `src/utils/setup.js` file in the email key. Remembering that if an e-mail is not defined in the setup, the system will not send any notification.

### API

Available at
http://localhost:3000/api/task

### Other configuration

In the file `src/utils/setup.js` it is possible to deny data specific to the system as the final recognized URL to access the online API.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
