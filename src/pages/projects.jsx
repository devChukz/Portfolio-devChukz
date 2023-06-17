import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import feature1 from "../../public/images/projects/devChukz.png";
import project1 from "../../public/images/projects/cyril-rose-collections.png";
import project2 from "../../public/images/projects/beat-box.png";
import feature2 from "../../public/images/projects/crypto-currency-landing-page.png";
import project3 from "../../public/images/projects/payme.jpg";
import project4 from "../../public/images/projects/smart-calculator.png";

const FeaturedProject = ({title, img, summary, link, github, type}) => {
  return(
    <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
    <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
      <Image src={img} alt={title} className="w-full h-auto" />
    </Link>

    <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
      <span className='text-primary font-medium text-xl'>{type}</span>
        <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
      <p className='my-2 font-medium text-dark'>{summary}</p>
      <div className='mt-2 flex items-center'>
        <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
        <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
      </div>
    </div>

  </article>
  )


};

const Project = ({title, type, img, link, summary, github}) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>
      <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
      <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl'>{type}</span>
          <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
        <p className='my-2 font-medium text-dark'>{summary}</p>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target="_blank" className='underline text-lg font-semibold'>Visit</Link>
          <Link href={github} target="_blank" className='w-8'><GithubIcon /></Link>
        </div>
      </div>
    </article>
  )
};

const projects = () => {
  return (
    <>
      <Head>
        <title>devChukz | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
              <FeaturedProject 
              title="Portfolio-devChukz"
              img={feature1}
              summary="A feature-rich portfolio website using Next.js, Tailwind CSS and Framer-Motion. It shows details of my skills and recent projects."
              link="/"
              github="/"
              type="Portfolio Website"
              />
            </div>

            <div className='col-span-6'> {/* Project 1 */}
              <Project 
                title="Cyril-rose Collection"
                img={project1}
                summary="This is landing page for a fashion brand built using TailwindCSS"
                link="/"
                github="/"
                type="E-Commerce Website"
              />
            </div>
            <div className='col-span-6'> {/* Project 2 */}
              <Project 
                title="Beat-Box"
                img={project2}
                summary="This is a landing page for a music playing website built using HTML, CSS and JavaScript"
                link="/"
                github="/"
                type="Music sharing website"
              />
            </div>

            <div className='col-span-12'> {/* Feature 2 */}
              <FeaturedProject 
                title="Crypto-Currency Landing Page"
                img={feature2}
                summary="A Crypto-Currency Landing page built using HTML, CSS and JavaScript"
                link="/"
                github="/"
                type="Crypto Website"
                />
            </div>

            <div className='col-span-6'> {/* Project 3 */}
              <Project 
                title="PayMe"
                img={project3}
                summary="This is the official landing page for PayMe Financial technology built using TailwindCSS and Javascript."
                link="/"
                github="/"
                type="Fin-tech Website"
              />
            </div>
            <div className='col-span-6'> {/* Project 4 */}
              <Project 
                title="Smart Calculator"
                img={project4}
                summary="Smart calculator built in with dark and light mode features using HTML, CSS and JavaScript."
                link="/"
                github="/"
                type="Web Calculator"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
};

export default projects