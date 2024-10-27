/* eslint-disable max-len */

'use client';

import './about.scss';
import { useState, useEffect } from 'react';
import SkeletonAbout from './skeleton-about/SkeletonAbout';
import ProfilePic from '../components/profile-pic/ProfilePic';

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <main className="about">
      <ProfilePic />
      <h1 className="about__title">
        About Me
        <span className="about__title--lilac">.</span>
      </h1>
      {loading ? <SkeletonAbout /> : (
        <section className="about__section">
          <p>I&apos;m Katie, a junior developer who is currently working in Optimisation and A/B testing.</p>
          <p>At the beginning of the COVID-19 lockdown, I lost my job. I&apos;d been doing temporary office work for a few years because I didnt know what I wanted to do after uni (I had studied Spanish and French, so I wasn&apos;t left with a very clear career path). So, instead of letting this get me down, I decided that this was the perfect opportunity for a career change.</p>
          <p>
            I had recently taken up music production as a hobby, live coding music on a program called
            {' '}
            <a className="about__link" href="https://sonic-pi.net/" target="_blank" rel="noreferrer">Sonic Pi</a>
            . So, I decided to put this skill to good use. I did some FreeCodeCamp courses and followed some YouTube tutorials on how to make websites using HTML, Javascript and CSS, and then landed a scholarship for a bootcamp. The scholarship was awarded by an organisation called
            {' '}
            <a className="about__link" href="https://digitalher.co.uk/" target="_blank" rel="noreferrer">Digital Her</a>
            , and the bootcamp was the 3-month Develop course at
            {' '}
            <a className="about__link" href="https://wearecodenation.com/" target="_blank" rel="noreferrer">Code Nation</a>
            .
          </p>
          <p>
            After completing the bootcamp, I then obtained an apprenticeship following a year long placement. I then finally landed my job at
            {' '}
            <a className="about__link" href="https://www.eclipsegroup.co.uk/" target="_blank" rel="noreferrer">Eclipse Group Solutions</a>
            , where I currently work as a Junior Optimisation Developer.
          </p>
          <p>I do find A/B testing interesting, particularly because it&apos;s interesting to monitor users behaviour while browsing a website. However, I&apos;m now ready for a change, and I&apos;m actively looking for a role where I can use React and Typescript, rather than solely working with vanilla Javascript, which is what I&apos;m currently doing.</p>
          <p>I am building this website using Next.js, React and Typescript, and I&apos;m also working on a larger scale project which is a website for my DJ collective. I&apos;m building that using React hooked up to a headless CMS called Contentful, so that the other members of my collective are able to update the website. If you&apos;d like to take a look at this site, you can take a peep on my Projects page.</p>
          <p>By building both of these websites in tandem, I&apos;m confident that I will be able to upskill and learn everything that I need to know in order to walk into a new, React-based role.</p>
        </section>
      )}
    </main>
  );
}
