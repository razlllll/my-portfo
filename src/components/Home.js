'use client';
import { motion } from "framer-motion";
import react from "react";
export default function Home() {
  return (
    <motion.section
      id="home"
      className="h-screen flex items-center justify-center text-center px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-teal-500/20 via-purple-600/20 to-pink-500/20 blur-3xl opacity-30"
      />

      <motion.div
        className="z-10 space-y-6 max-w-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Hi, I'm Razal
        </motion.h1>
        <motion.h1
          className="text-5xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Full Stack Developer & Visual Creator
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          I craft responsive, animated web experiences that feel smooth and intuitive. Alongside coding, I design impactful visuals in Canva and explore video editing to bring ideas to life.

        
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 mt-6 flex-wrap"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-black rounded-full font-semibold transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="CV.pdf"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-full font-semibold transition-all duration-300"
          >
             CV Here
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
