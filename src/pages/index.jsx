import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-12.png";
import AnimatedText from '@/components/AnimatedText';
import Link from "next/link";
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex gap-10 item-center justify-between w-full lg:flex-col">
            <div className='w-1/2 lg:w-full'>
              <Image src={profilePic} alt="devChukz" className='w-full h-auto lg:inline-block lg:w-full'
                priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Hi, i'm Anigara Maduabuchukwu" className='!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm'>
                I am committed to transforming concepts into cutting-edge web applications as an accomplished front-end developer. View my most recent works demonstrating my React.js and web development expertise.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/dummy.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                
                <Link href="mailto:anigaramadu@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
};
