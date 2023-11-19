---
title: 'How to create a combination scrollable and multi-page React website - using react-scroll and react-router-dom'
date: '2023-10-05'
---

I came across quite an interesting challenge whilst building my navbar for a website about my DJ collective. I started out with a simple, one-page website, using `react-scroll` on my navbar to scroll down to the three different sections of my site - `Home`, the `About` section and the `Contact` section. This site was all well and good, but when I wanted to create a subsection containing individual pages about each DJ in the collective, I became stuck. The single-page website wasn't going to work for this - specific subdirectories/slugs would work better.

I had already set up the `react-scroll` package, which I was using to scroll down to each main section of the site. I had a `<Link />` component for each section, and within these components, I had all of my configuration set up for the scroll - how long I wanted my scroll duration to be, the behaviour set to `smooth`, etc.

It was possible for me to set up the subdirectories, but my challenge came when I headed to the separate pages, and wanted to navigate straight back to the `About` or `Contact` sections. I couldn't just navigate back to them from another page - I needed to first head back to the `Home` page, and then scroll down to the relevant section - all in one click. 

Here's how I did it.

## Step One - changing my `<Link />`s to `<NavLink />`s

As I mentioned previously, I used the `<Link />` component from the `react-scroll` package to scroll to each section. However, I made the decision to change all of these components to `<NavLink />` components instead, which is a component from the `react-router-dom` package.

### Why the change?

- Firstly, using the components from `react-router-dom` makes more sense semantically, because I literally use them as links in my navigation bar. Under the hood, these `<NavLink />`s are anchor tags.
- Secondly, they are more flexible - it is possible to use them for links that scroll and also for links that lead the user to other subdirectories. Leading the user to other subdirectories is particularly easy with the `<NavLink />` - you just need to add the `to=""` attribute, inside which you add your desired slug. For example:


```
<NavLink 
    className="sublinks__link"
    to="/moll"
>
```


This will lead the user to `www.somewebsite.com/moll`, and this is what I did for all of my subdirectory links.

### How to combine the scrolling behaviour with `<NavLink />`

With the removal of the `<Link />` component that was native to `react-scroll`, the scrolling behaviour was also removed, so I needed to find a workaround.

For my solution, I opt to write two separate functions outside of my JSX, one which scrolls to each section. This is the easiest method, since I can just pass these functions to each `<NavLink />` component and call them on click.

## Step Two - creating separate functions for the scrolling behvaiour

First of all, instead of importing separate components from the package, I just import `react-scroll` as a namespace import, so that I can access everything through dot notation. 

I need access to `animateScroll` to access the `scrollToTop()` method for my `Home` section, and I also need access to the `scroller()` method to scroll to other specific areas of the page (for my `About` and `Contact`) sections. I create two variables:


```
const scroll = Scroll.animateScroll;
const scroller = Scroll.scroller;
```

### The `scrollToHome` function

Once I create these variables, I create my `ScrollToHome` function. I just call  `scrollToTop()` from my `scroll` variable, and pass in my desired config. I also pass in a function to close the mobile menu. This is because this function will be called on click of a mobile menu link. The mobile menu takes up the space of the entire screen, so and closing it on click of a nav link will allow the user to get back to the website easily.


```
const scrollToHome = () => {
    scroll.scrollToTop({
    duration: 200,
    delay: 0,
    smooth: true,
    offset: 0,
    });
    closeMobileMenu();
}
```

### The `scrollToAbout` and `scrollToContact` functions

The functions for `scrollToAbout` and `scrollToContact` are slightly different to the `Home` function. Firstly, because I use the `scrollTo()` method for both of these instead of `scrollToTop()`. `scrollTo()` is more flexible, allowing me to pass through a `name` attribute which I set in the top JSX container for both `About` and `Contact`:


```
<section className='about' id='about' name='about'></section>
```


However, I pass the same config through because I want the scroll to behave the same as the scroll to `Home`. I also close the mobile menu on click once again:

```
const scrollToAbout = () => {
    scroller.scrollTo('about', {
    duration: 200,
    delay: 0,
    smooth: true,
    offset: 0,
    });

    closeMobileMenu();
}
```


## Step Three - using a combo of `async/await` and the `useNavigate` hook to asynchronously go back to `Home` and then scroll down

I now face the final challenge of being able to click back to `Home` and then scroll down to my desired component when inside a subdirectory. I create new separate functions again for this behaviour, this time using `async/await` and the `useNavigate` hook from `react-router-dom`.

I use `async/await` here to ensure that my code is executed in the right order. I need to ensure that I am first back on the `Home` page, before scrolling down to my desired section. An `async` function is perfect for this.

To navigate back to my `Home` page, I use the `navigate()` method from the `useNavigate` hook. This was previously called the `useHistory` hook, and the method used to be called `history.push()`. Then, to scroll down, I call my `scrollTo()` method again:


```
const goToHomeAndScrollToAbout = async () => {
    await closeMobileMenu();
    await navigate('/');
    await scroller.scrollTo('about', {
    duration: 200,
    delay: 0,
    smooth: true,
    offset: 0,
    })
}
```

## Step Four - calling the `scrollTo...` and `goTo...AndScrollTo...` functions conditionally (for the `About` and `Contact` components)

The final step is calling the functions at the right time. The `scrollTo...` functions, aka the simple scroll functions, need to be called only when the user is on the home page. The `goTo...AndScrollTo...` functions need to be called only when the user is not on the home page.

To call each of these conditionally, I opt to use a combination of ternary operators and the `useLocation()` hook from `react-router-dom`.

To get the path name from the URL that the user is currently on, I use `useLocation().pathname`. I check whether the path name equals `'/'`, aka `Home`, and if it does, then I render a `<NavLink />` that calls `ScrollTo...` on click. This is because if the user is on the homepage already, then all the page needs to do is scroll to the desired section.

If the path name does not equal `'/'`, then I render a `<NavLink />` that calls `goTo...AndScrollTo...` on click. This is because in this use case, the user will be on a subdirectory and will need to both navigate back to `Home` and also scroll to the desired section.


```
{path === '/' ? (
<NavLink
    className="links__link"
    onClick={scrollToAbout}
    >
    {aboutLink}
</NavLink> ) : (
<NavLink
    className="links__link"
    onClick={goToHomeAndScrollToAbout}
    >
    {aboutLink}
</NavLink>
)}
```


And there you have it! It is possible to combine a scrollable webpage with subdirectories.