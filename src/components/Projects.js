'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import react from "react";
const projects = [
  {
    title: "BMW Showcase",
    description: "Landing site for M Series BMW.",
    link: "https://bmw-m5-smoky.vercel.app/",
  },
  {
    title: "Stone Paper Scissors",
    description: "Stone paper scissors game.",
    link: "https://stone-paper-xi.vercel.app/",
  },
  {
    title: "Posters Designed in Canva",
    description: "A collection of posters created using Canva.",
    link: "/Canva.pdf",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-3xl font-bold mb-6 text-center text-cyan-300"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h3>

     
<motion.p
  className="text-center text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-10"
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
>
  As a full-stack developer, I enjoy building complete solutions — from clean, 
  responsive frontends to powerful backends. Alongside coding, I create
  professional posters in Canva and dabble in video editing, giving my projects
  an extra creative edge. Here&apos;s a look at some of my featured work.
</motion.p>



      <motion.div
        className="grid md:grid-cols-3 sm:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {projects.map((proj, i) => {
          const isExternal = proj.link.startsWith("http");
          const CardContent = (
            <motion.div
              className="cursor-pointer bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-cyan-600/10 hover:shadow-xl transform hover:scale-105 transition duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                {proj.title}
              </h4>
              <p className="text-sm text-gray-300">{proj.description}</p>
            </motion.div>
          );

          return isExternal ? (
            <a
              href={proj.link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CardContent}
            </a>
          ) : (
            <Link href={proj.link} key={i} passHref>
              {CardContent}
            </Link>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
