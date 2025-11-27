import React from "react";

export default function Resume(){
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Resume — Khwahish Seth</h1>
        <a href="/resume.pdf" download className="px-4 py-2 bg-indigo-600 text-white rounded">Download PDF</a>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow">
        <h2 className="text-lg font-semibold">Profile</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Web Developer & Data Enthusiast with internship experience and production-like projects; ready for MNC roles.</p>

        <h3 className="mt-4 font-semibold">Skills</h3>
        <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-gray-600">
          <div>React • JavaScript • HTML/CSS</div>
          <div>Power BI • Python • Pandas</div>
          <div>Algorithms • Git • Agile</div>
          <div>Tailwind • Vite • Framer Motion</div>
        </div>

        <h3 className="mt-4 font-semibold">Experience (Short)</h3>
        <ul className="list-disc ml-5 text-sm text-gray-600">
          <li>Frontend Intern — Younity (Jun 2024 — Aug 2024)</li>
          <li>Web Developer Intern — InternPe (Sep 2024 — Nov 2024)</li>
        </ul>

        <h3 className="mt-4 font-semibold">Education</h3>
        <p className="text-sm text-gray-600">B.Tech — ABES Engineering College (2022 — Present)</p>
      </div>
    </section>
  );
}
