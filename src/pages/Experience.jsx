import React from "react";

export default function Experience(){
  return (
    <section className="max-w-5xl mx-auto px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Experience & Education</h1>

      <article className="p-4 rounded-lg border bg-white dark:bg-gray-800 shadow">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">Frontend Intern — Younity</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Built responsive UI components, improved rendering, and helped deploy features.</p>
            <ul className="list-disc ml-5 mt-2 text-sm text-gray-500">
              <li>Implemented modular components and reduced re-renders</li>
              <li>Worked with designers to match design system</li>
            </ul>
          </div>
          <time className="text-sm text-gray-500">Jun 2024 — Aug 2024</time>
        </div>
      </article>

      <article className="p-4 rounded-lg border bg-white dark:bg-gray-800 shadow">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">Web Developer Intern — InternPe</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Contributed to landing pages, fixed performance issues and worked on animations.</p>
          </div>
          <time className="text-sm text-gray-500">Sep 2024 — Nov 2024</time>
        </div>
      </article>

      <article className="p-4 rounded-lg border bg-white dark:bg-gray-800 shadow">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">B.Tech — ABES Engineering College</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">3rd-year student focusing on software development and data science topics.</p>
          </div>
          <time className="text-sm text-gray-500">2022 — Present</time>
        </div>
      </article>
    </section>
  );
}
