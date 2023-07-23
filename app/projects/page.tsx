'use client';

import Image from 'next/image';
// import { Suspense } from 'react';
import Tilt from 'react-parallax-tilt';
import './projects.scss';

export default function Projects() {
  return (
    <main className="projects">
      <h1 className="projects__title">
        Projects
        <span className="projects__title--lilac">.</span>
      </h1>
      <section className="projects__cards">
        <Tilt>
          <article className="projects__card">
            <Image
              className="card__image"
              alt="Not Bad for a Girl website"
              src="/images/nbfg.png"
              width={250}
              height={250}
            />
            <div className="card__text-container">
              <h3 className="card__title">Not Bad for a Girl website</h3>
              <p className="card__content">A website built for my DJ collective, hooked up to a headless CMS to allow other members of the collective to make changes to the site.</p>
              <div className="card__code">
                <a className="code__link" href="https://github.com/katiemhughes/nbfg-site">Source code</a>
                <a className="code__link" href="https://www.notbadforagirldj.com/">Live site</a>
              </div>
              <div className="card__links">
                <a className="card__link" href="https://react.dev/">ReactJS</a>
                <a className="card__link" href="https://www.contentful.com/">Contentful</a>
                <a className="card__link" href="https://jestjs.io/">Jest</a>
              </div>
            </div>
          </article>
        </Tilt>
        <Tilt>
          <article className="projects__card">
            <Image
              className="card__image"
              alt="Rainy City Radio website"
              src="/images/rainy-city.png"
              width={250}
              height={250}
            />
            <div className="card__text-container">
              <h3 className="card__title">Rainy City Radio website</h3>
              <p className="card__content">Website I built for a radio station that I co-founded. I used ReactJS for the frontend and I built the radio player using a Linux Server, with AzuraCast broadcasting software.</p>
              <div className="card__code">
                <a className="code__link" href="https://github.com/katiemhughes/radio-website">Source code</a>
                <a className="code__link" href="https://www.rainycityradio.live/">Live site</a>
              </div>
              <div className="card__links">
                <a className="card__link" href="https://react.dev/">ReactJS</a>
                <a className="card__link" href="https://www.azuracast.com/">AzuraCast</a>
                <a className="card__link" href="https://docs.digitalocean.com/products/droplets/">Linux</a>
              </div>
            </div>
          </article>
        </Tilt>
        <Tilt>
          <article className="projects__card">
            <Image
              className="card__image"
              alt="Portfolio website"
              src="/images/portfolio-site.png"
              width={250}
              height={250}
            />
            <div className="card__text-container">
              <h3 className="card__title">This website</h3>
              <p className="card__content">A portfolio website built to showcase my all of my work, in the Projects section. It also showcases which skills I&apos;ve learnt through doing the Not Bad for a Girl project, in the Blog section.</p>
              <div className="card__code">
                <a className="code__link" href="https://github.com/katiemhughes/blog-site">Source code</a>
                {/* <a className='code__link' href='https://www.notbadforagirldj.com/'>Live site</a> */}
              </div>
              <div className="card__links">
                <a className="card__link" href="https://react.dev/">ReactJS</a>
                <a className="card__link" href="https://www.typescriptlang.org/">Typescript</a>
                <a className="card__link" href="https://eslint.org/">ESLint</a>
              </div>
            </div>
          </article>
        </Tilt>
        <Tilt>
          <article className="projects__card">
            <Image
              className="card__image"
              alt="To do list app"
              src="/images/to-do.png"
              width={250}
              height={250}
            />
            <div className="card__text-container">
              <h3 className="card__title">To do list app</h3>
              <p className="card__content">A simple to do list app made using React. I made this during my bootcamp at Code Nation and it was one of my first ever projects, using state to add and remove the to do items.</p>
              <div className="card__code">
                <a className="code__link" href="https://github.com/katiemhughes/to-do-list">Source code</a>
                <a className="code__link" href="https://64bd88ea5797ba55e276c276--relaxed-starship-aa7c54.netlify.app/">Live site</a>
              </div>
              <div className="card__links">
                <a className="card__link" href="https://react.dev/">ReactJS</a>
                <a className="card__link" href="https://git-scm.com/">Git</a>
              </div>
            </div>
          </article>
        </Tilt>
      </section>
    </main>
  );
}
