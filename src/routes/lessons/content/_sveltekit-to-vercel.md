---
title: Deploying SvelteKit to Vercel
date: 2022-01-01T12:00:00.000Z
videoUrl: https://www.youtube.com/watch?v=C0QYbIxQns4
---

So you've got a [SvelteKit](https://kit.svelte.dev) app, and you want to put it in production... No worries! Nowadays, we can deploy to [Vercel](https://vercel.com/) without writing any extra code 🚀 Here's how...

## Prerequisites

The two "one-time setup" things you need for any deployment are an account with [GitHub](https://github.com/) and an account with [Vercel](https://vercel.com/). They're both free for our purposes, and what I consider best in class at what they do!

You may sign-up for Vercel **with** GitHub SSO, which would automatically make your repos discoverable in the Vercel dashboard.

## GitHub Setup

We first need to setup version control for our SvelteKit app; this is **not** done for us using the SvelteKit wizard with `npm init svelte@next [APP-NAME-HERE]`, so we need to `cd` into our app directory in a terminal, and run:

```sh
git init
git add -A
git commit -m "🎉 Initial commit"
```

Then, we go to [GitHub](https://github.com/) and hit **+** -> **New Repository** on the top right.

In the next screen, we fill in a name and description to taste, then hit the **New Repository** button.

The next screen will be of our new, empty, repo, and will have a block of instructions in the end, of what to paste and execute back in the terminal, in our app directory!

```sh
git remote add origin git@github.com:[YOUR-REPO-HERE]
git branch -M main
git push -u origin main
```

Doing that means our GitHub setup is complete 🙌

## Vercel Setup

Deploy time! Let's go to our [Vercel Dashboard](https://vercel.com/dashboard) and hit the "New Project" button.

The next screen will have a dedicated section titled **Import Git Repository**. If we are in the correct organisation, the repo we just pushed to should be the first result, if not feel free to hunt it down using the search. **Hit the "Import" button** next to it!

Vercel will automatically recognise we're deploying a SvelteKit app, so we don't need to do anything more other than hit the **Deploy** button!

## Extra Setup

The above is all we need for a sample app, but there are a couple things we may want to edit, according to our app's needs; these can be modified later too, so no worries if we got too excited and pressed **Deploy** already.

Vercel will automatically figure out if we're using [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) as our package managers. However, if we're using something more hipster like [pnpm](https://pnpm.io/), we'd need to override the `install` command to use that: hit the override toggle and fill in `pnpm install`!

Finally, there is a section on Environment Variables: If our backend code needs API keys to integrate with something like [Stripe](https://stripe.com/), [Sendgrid](https://sendgrid.com/) or [Notion](https://www.notion.so/), or a `POSTGRES_URL` to connect to a DB directly, this is where we'd set them up.

Do note that since SvelteKit uses Vite, only environment variables prefixed with `VITE_` will be available to our source code by default!

## Hit DEPLOY and visit our production app!

Deployment will take a bit of time, but we won't need to touch our setup again: Every time we push to our `main` branch, our app will automatically be deployed to production!

As a sweet bonus, whenever we open a Pull Request, Vercel will deploy it for us to a dedicated preview environment, so we can review it with our own eyeballs before merging, or even get our e2e tests to visit it and validate everything works!

That's something companies would literally pay millions for in yearly staff salaries, and we're now getting it for free, both in money, and in time. That's nuts.

And by **we**, I mean individual developers and small teams; Vercel does charge a pretty penny to the large companies that use it, and I personally think it's still well worth it, but that's a deeper discussion to be had!

## [😄 Subscribe for more and to show support 😄](https://www.youtube.com/channel/UCm1ALyg61uhPoTnZBm7mY2g)
