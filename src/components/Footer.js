import React from 'react';
import Layout from '@/components/Layout'
import Link from 'next/link';
import { motion } from "framer-motion";
import {WhatsAppIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg
    '>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <Link href="https://wa.me/2347067908943" target={"_blank"} className='flex
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