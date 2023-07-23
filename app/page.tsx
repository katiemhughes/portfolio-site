// import Link from 'next/link';
'use client'
import Typical from 'react-typical';
import './page.scss';

export default function Home() {
  return (
    <main className='home'>
      <div className='home__intro'>
          <h1>Hello<span className='home__intro--lilac'>,</span> I&apos;m Katie<span className='home__intro--lilac'>.</span></h1>
              <p>
              I&apos;m {" "}
              <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                      "a frontend developer",
                      2000,
                      "an accessibility advocate",
                      2000,
                      "a feminist",
                      2000,
                      "a CSS enthusiast",
                      2000,
                      "a trilinguist",
                      2000,
                      "a music lover",
                      2000
                  ]}
              />
              <span className='home__intro--lilac'>.</span>
              </p>
      </div>
    </main>
  )
}
