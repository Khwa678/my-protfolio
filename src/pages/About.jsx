import React from "react";
import TechRadar from "../components/TechRadar";

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript / React", level: 86 },
  { name: "Power BI", level: 80 },
  { name: "Python / Pandas", level: 78 },
  { name: "Algorithms & DS", level: 75 }
];

export default function About(){
  return (
    <section className="max-w-5xl mx-auto px-6 py-10 space-y-6">
      <h1 className="text-4xl font-bold">About Me</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I’m <strong>Khwahish Seth</strong>, a 3rd-year engineering student specializing in frontend development and data-driven applications.
            I build polished user experiences, dashboards and analytics flows. I prepare for MNC interviews by solving algorithm problems,
            building production-like projects and working in internships.
          </p>

          <div className="mt-6">
            <h3 className="font-semibold">Achievements</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-300">
              <li>Internships: Younity, InternPe, CodeAlpha</li>
              <li>Certs: Problem Solving, Financial Analyst, AICTE – Edunet</li>
              <li>Platforms: CodeChef, HackerRank (practice + contest experience)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow">
          <h3 className="font-semibold">Skills & Tech Radar</h3>
          <div className="mt-4"><TechRadar skills={skills} /></div>

          <div className="mt-6">
            <h3 className="font-semibold">Soft Skills</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-300">
              <li>Problem solving & debugging</li>
              <li>Collaborative communication</li>
              <li>Agile development & task planning</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a href="/projects" className="px-4 py-2 bg-indigo-600 text-white rounded">See Projects & Case Studies</a>
      </div>
    </section>
  );
}
