This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# art-walk
Find art that speaks to you

## Todo
* Firebase auth [DONE]
* Handle user input error cases such as no input walks
    Handle this with an error popup common component to echo dynamic messages to different pages
* --> Styling <--
* Switch implementation <>
* [i] recommender model
* Save art into collections page with cards
* Non-existing display name & photo handling for profile page
* log statement clearing
* User Actions
   i.  Like, Save, Unsave, Dislike
   ii. Update Profile
        -> Users can't start name with the word 'new' for some reason [INVESTIGATE]
   iii. Friends & Chats
   iv. Community Tab, Discussions, etc.
   v. Upload
* Admin
* Review Art Institute API for info like techniques, themes, etc so users can add preference to themes/techniques
    e.g., contemporary, surrealism, etc.
* Shortcut implementations (using Enter instead of clicking,etc.)
* Profile deisgn tools (wraps, etc.)
* useEffect on database update components
    e.g., ratings modal so that it refreshes after a user like
        ratings modal

* ImageActionBundle component to simplify user activity modals
* Unique user indications. Allow infinite ^ and v, etc but maintain # of unique people who have done the action
* --> Unique collection saves <--

## Database Rework
    * Connect user auths to copy in database [DONE]
    * Add newly generated images to image db with a unique identifier
        used for liking, saving, disliking, etc.
        should be able to pull current likes, dislikes, and user state with regards to saving [DONE]
    * User action logging in db, used for time branch on profile
        Timestamping with Firebase
    * Ensure all dynamic handling is migrated
        i. Connect someone's profile updates to collection in db, not auth



## Instructions
* i. Open terminal and navigate to project directory and type the following commands,
* ii. yarn
* iii. yarn dev


## APIs
* Art Institute of Chicago API: https://api.artic.edu/docs/#introduction

## Technologies
* Typescript
* NextJS (React)
* Mantine

## Helpful Tutorials
* Firebase Login/Logout Auth Setup: https://www.youtube.com/watch?v=kuVUUo5GZag


<br>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
