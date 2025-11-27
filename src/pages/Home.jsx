import React from "react";
import Portfolio from "../Portfolio"; // keep your hero in src/Portfolio.jsx

export default function Home(){
  return (
    <div>
      <Portfolio />
      {/* Featured case-study and quick highlights */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold">Featured case study</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-white dark:bg-gray-800 rounded-lg border shadow">
            <h3 className="font-semibold">E-commerce Frontend — Problem & Approach</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Built a scalable product listing page for 1000+ products, optimized for TTFB and first contentful paint using lazy-loading, code splitting and optimized images.</p>
            <ul className="list-disc ml-5 mt-3 text-sm text-gray-600 dark:text-gray-300">
              <li>Stack: React, Tailwind, Vite</li>
              <li>Impact: improved perceived load time by ~40%</li>
            </ul>
          </div>

          <div className="p-5 bg-white dark:bg-gray-800 rounded-lg border shadow">
            <h3 className="font-semibold">Testimonials</h3>
            <blockquote className="mt-3 italic text-gray-600 dark:text-gray-300">“Khwahish delivered robust UI components and improved performance — very reliable.” — Mentor, InternPe</blockquote>
            <blockquote className="mt-3 italic text-gray-600 dark:text-gray-300">“Strong during sprints and collaborative in code reviews.” — Team Lead, Younity</blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
