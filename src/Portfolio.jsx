import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-tight"
          >
            Hi, I’m <span className="text-indigo-600 dark:text-indigo-400">Khwahish</span> 👋  
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-3 text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            A Web Developer & Data Enthusiast building modern, responsive,  
            performance-focused web applications — ready for MNC roles.
          </motion.h2>

          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Experienced in React, Tailwind, JavaScript, Python, Power BI,  
            and ML-based data analysis. I’ve completed internships at  
            <strong>Younity</strong>, <strong>InternPe</strong>, <strong>CodeClause</strong>, and <strong>CodeAlpha</strong>, working on real projects,  
            dashboards, frontends, and problem-solving.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex gap-4">
            <a
              href="/resume.pdf"
              download
              className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition"
            >
              Download Resume
            </a>

            <a
              href="/contact"
              className="px-5 py-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>

          {/* QUICK DETAILS */}
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <strong>Location:</strong> India •{" "}
            <strong>Email:</strong>{" "}
            <a href="mailto:your.email@example.com" className="underline">
              your.email@example.com
            </a>
          </div>

          {/* CERTIFICATION BADGES */}
          <div className="mt-6 flex gap-3 items-center">
            <img src="/images/badge1.png" className="w-16 h-16 rounded-lg shadow" />
            <img src="/images/badge2.png" className="w-16 h-16 rounded-lg shadow" />

            <p className="text-xs text-gray-500 dark:text-gray-400 w-40">
              Certificates: Problem Solving • Unstop • Financial Analyst •  
              Internship Excellence
            </p>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 dark:border-gray-800">
            {/* Replace with your image */}
            <img
              src="/images/profile.jpg"
              className="w-full h-full object-cover"
              alt="Khwahish"
            />
          </div>
        </motion.div>
      </section>

      {/* QUICK NAVIGATION BOXES */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-6">

        {/* About */}
        <a
          href="/about"
          className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:-translate-y-1 transition transform border"
        >
          <h3 className="text-xl font-semibold">About Me</h3>
          <p className="text-sm text-gray-500 mt-2">
            Know more about my journey, skills, values, and tech stack.
          </p>
        </a>

        {/* Projects */}
        <a
          href="/projects"
          className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:-translate-y-1 transition transform border"
        >
          <h3 className="text-xl font-semibold">Projects</h3>
          <p className="text-sm text-gray-500 mt-2">
            Explore 5+ real projects with case studies and live demos.
          </p>
        </a>

        {/* Experience */}
        <a
          href="/experience"
          className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:-translate-y-1 transition transform border"
        >
          <h3 className="text-xl font-semibold">Experience</h3>
          <p className="text-sm text-gray-500 mt-2">
            Internships, responsibilities, achievements, and impact.
          </p>
        </a>
      </section>
    </div>
  );
}
