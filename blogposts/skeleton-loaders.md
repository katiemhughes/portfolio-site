---
title: 'How to modernise your loading UI with skeleton loaders'
date: '2023-07-26'
---

In the User Experience world, loading screens are becoming increasingly more important. Let's face it - users' attention spans are shortening because of über-short TikTok videos, Facebook and Instagram reels. So, say we have a scenario where your web app needs some time to load - say, for example, when we are fetching some blog posts from an API. How do we keep the user's attention for long enough before they click off the page? Meet the humble **Skeleton Loader**.

## So what even is a skeleton loader?

A skeleton loader is a placeholder for content, which is shown while a piece of content is loading. It quite literally looks like a "skeleton", or a blank version of your page or component, with blank outlines where content should be. There may be a plain box in place of an image for example, a circle for a profile image, or multiple lines which represent paragraphs of text.

![skeleton-card](/images/skeleton-card.png)
*A custom-built skeleton card loader for a card component, built by me*

## Why exactly should we use them?

- They give the illusion to the user that they are waiting a shorter time for the page to load, compared to when they just have a simple loading spinner on the screen.
- They keep the UI looking consistent. Rather than jumping between two vastly different-looking screens, the skeleton loader mimics the look of the real page, which is more aesthetically pleasing.

## When to use?

- When you are fetching data from an API, since this usually takes a good amount of time.
- When the component contains a large amount of content, such as a card or a large paragraph of text. This is because it will be easier to mimic the UI when there is more content to play with.

## When not to use?

- When you are just loading an image, because the skeleton will just be a blank square.
- To load navbars or footers - this will just look a bit odd!
- When a user is downloading/uploading/converting files. A progress bar/indicator is much better suited in this scenario, because then the user can physically see how long they have left to wait.

## How I built and implemented my skeleton loaders in Next.js

For this website, I implemented three different skeleton loaders:

1. One for my card components
2. One for the content on my About page
3. One for my blog posts on my main `/blog` page.

![about-loader](/images/about-loader.png)
*My custom-built About content skeleton loader*

## The card loader

In Next.js, you can create routes via a file-based system. You can name a directory what you would like your route segment to be named (for example, you could name your About directory `about`, which would then translate to `/about` in your router).

As long as all of your route directories are placed inside your `app` directory, and **not** inside your `components` directory, then you can create as many as you like (I will explain the `components` directory in another blog post).

To create UI for each route, inside each individually-named directory you must add a `page.tsx` or `page.jsx/js` file. This naming convention must always stay the same. In here, you can create your entire UI just as you would in React.

You should call the function the same name as your directory, just starting with a capital letter. This is done like so:

```
export default function About() {

  return (
    <main className="about"></main>
  );
}
```

Once you have created all of your `tsx` or `jsx` in here, you can then move onto adding your loading UI. In Next.js, this is done in a similar way to adding the `page.tsx` - you can add a file called `loading.tsx`. In here, you can add a custom loading UI.

## The issue with `loading.tsx` file

The issue with using the `loading.tsx` file is that the UI inside here is applied to the entire web page. This means that you're very restrained when using this, and you're unable to apply this loading page to only certain components. It also means that you're also unable to use state to control when to show your loading component.

Because of these restrictions, I ended up opting for the traditional React method with the `useEffect()` hook and a `loading` state, when 