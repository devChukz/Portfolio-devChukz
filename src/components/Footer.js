import React from 'react';
import Layout from '@/components/Layout'
import Link from 'next/link';
import { motion } from "framer-motion";
import {WhatsAppIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base
    '>
      <Layout className='flex items-center justify-between md:flex-col md:py-6 xl:py-8 2xl:py-10'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <Link href="https://wa.me/2347067908943" target={"_blank"} className='flex md:pt-3
          '>Chat Me
          <motion.span
          className="w-6 ml-3"
          whileHover={{y:-2 }}
          whileTap={{y:-2}}
         >
          <WhatsAppIcon />
          </motion.span>
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer