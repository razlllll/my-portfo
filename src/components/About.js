'use client';
import { motion } from "framer-motion";
import React from "react";
export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      
      <motion.h3
        className="text-4xl font-bold text-cyan-300 mb-6"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h3>

  
      <motion.p
        className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-10"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
    I&apos;m passionate about creating clean, responsive websites that are both simple and enjoyable to use. I&apos;m currently learning and building with tools like React, Next.js, and Tailwind CSS.

 Alongside coding, I love designing posters and graphics using Canva, and I&apos;m also exploring the basics of video editing to expand my creative skills.

I&apos;m always curious, always learning, and excited to grow by building real-world projects that blend design and development.

Let&apos;s build something meaningful — where design meets function.
      </motion.p>

      
      <motion.h4
        className="text-2xl font-semibold text-cyan-300 mb-6"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h4>

     
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.7,
            },
          },
        }}
      >
        {[
          "HTML & CSS",
          "JavaScript (ES6+)",
          "React & Next.js",
          "Tailwind CSS",
          "Poster Design",
          "Video Editing",
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="p-5 bg-white/5 border border-white/10 rounded-xl text-gray-200 text-md font-medium hover:scale-105 hover:bg-cyan-600/10 hover:border-teal-500/30 hover:shadow-xl transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
