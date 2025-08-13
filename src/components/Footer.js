'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import React from 'react';
export default function Footer() {
  return (
    <motion.footer
      className="text-gray-400 text-sm py-10 px-6 border-t border-white/10 mt-10 bg-black/10 backdrop-blur-md"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Razal. All rights reserved.
        </p>

        <div className="flex gap-5 justify-center text-lg">
          <a
            href="https://github.com/razlllll"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/share/1AmdgwnaV5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/razlll.___/?hl=en"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
