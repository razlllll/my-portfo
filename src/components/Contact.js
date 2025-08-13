'use client';
import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative text-center px-6 py-32 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative z-10 max-w-2xl mx-auto"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-bold text-cyan-300 mb-6">
          Let&apos;s Connect
        </h3>
        <p className="text-lg text-gray-300 mb-10">
          Whether it&apos;s a collaboration, freelance project, or just a friendly hello—here&apos;s how you can reach me.
        </p>
        <motion.div
          className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-cyan-600/10 hover:shadow-xl transform hover:scale-105 transition duration-300 max-w-md mx-auto"
        >
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-cyan-300">Email:</span> razalnaz03@gmail.com
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-cyan-300">Phone:</span> +91 85906 38686
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-cyan-300">Location:</span> Nilambur, Malappuram Dist, Kerala, India
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
