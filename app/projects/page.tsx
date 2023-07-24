'use client';

// import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import './projects.scss';
import ProjectCard, { Project } from '../components/project-card/ProjectCard';
import SkeletonCard from '../components/skeleton-card/SkeletonCard';

const projects: Project[] = [
  {
    imageSrc: '/images/nbfg.png',
    imageAlt: 'Not Bad for a Girl website',
    cardTitle: 'Not Bad for a Girl website',
    cardContent: 'A website built for my DJ collective, hooked up to a headless CMS to allow other members of the collective to make changes to the site.',
    sourceCodeHref: 'https://github.com/katiemhughes/nbfg-site',
    liveSiteHref: 'https://www.notbadforagirldj.com/',
    tech: [
      {
        text: 'ReactJS',
        link: 'https://react.dev/',
      },
      {
        text: 'Contentful',
        link: 'https://www.contentful.com/',
      },
      {
        text: 'Jest',
        link: 'https://jestjs.io/',
      },
    ],
  },
  {
    imageSrc: '/images/rainy-city.png',
    imageAlt: 'Rainy City Radio website',
    cardTitle: 'Rainy City Radio website',
    cardContent: 'Website I built for a radio station that I co-founded. I used ReactJS for the frontend and I built the radio player using a Linux Server, with AzuraCast broadcasting software.',
    sourceCodeHref: 'https://github.com/katiemhughes/radio-website',
    liveSiteHref: 'https://www.rainycityradio.live/',
    tech: [
      {
        text: 'ReactJS',
        link: 'https://react.dev/',
      },
      {
        text: 'AzuraCast',
        link: 'https://www.azuracast.com/',
      },
      {
        text: 'Linux',
        link: 'https://docs.digitalocean.com/products/droplets/',
      },
    ],
  },
  {
    imageSrc: '/images/portfolio-site.png',
    imageAlt: 'Portfolio website',
    cardTitle: 'This website',
    cardContent: 'A portfolio website built to showcase my all of my work, in the Projects section. It also showcases which skills I\'ve learnt through doing the Not Bad for a Girl project, in the Blog section.',
    sourceCodeHref: 'https://github.com/katiemhughes/blog-site',
    liveSiteHref: '',
    tech: [
      {
        text: 'ReactJS',
        link: 'https://react.dev/',
      },
      {
        text: 'NextJS',
        link: 'https://nextjs.org/',
      },
      {
        text: 'Typescript',
        link: 'https://www.typescriptlang.org/',
      },
    ],
  },
  {
    imageSrc: '/images/to-do.png',
    imageAlt: 'To do list app',
    cardTitle: 'To do list app',
    cardContent: 'A simple to do list app made using React. I made this during my bootcamp at Code Nation and it was one of my first ever projects, using state to add and remove the to do items.',
    sourceCodeHref: 'https://github.com/katiemhughes/to-do-list',
    liveSiteHref: 'https://64bd88ea5797ba55e276c276--relaxed-starship-aa7c54.netlify.app/',
    tech: [
      {
        text: 'ReactJS',
        link: 'https://react.dev/',
      },
      {
        text: 'Git',
        link: 'https://git-scm.com/',
      },
    ],
  },
];

export default function Projects() {
  console.log('projects', projects);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <main className="projects">
      <h1 className="projects__title">
        Projects
        <span className="projects__title--lilac">.</span>
      </h1>
      <section className="projects__cards">
        {projects.map((project, index) => (
          loading
            ? <SkeletonCard loading={loading} />
            : <Tilt><ProjectCard key={index} project={project} /></Tilt>
        ))}
      </section>
    </main>
  );
}
