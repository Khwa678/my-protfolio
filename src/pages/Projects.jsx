import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const allProjects = [
  {
    id: 1,
    title: "E-commerce Frontend",
    desc: "Responsive store UI, product listing & checkout flow. Focus: modular components and performance.",
    tech: ["React","Tailwind","Vite"],
    category: "Web",
    link: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    desc: "Real-time weather app using OpenWeather API with caching & mobile-first UI.",
    tech: ["JavaScript","API","HTML/CSS"],
    category: "Web",
    link: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Diabetes Prediction (ML)",
    desc: "Data cleaning, feature engineering and model comparisons. Visualized using Power BI.",
    tech: ["Python","Power BI","ML"],
    category: "Data",
    link: "#"
  }
];

export default function Projects(){
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(allProjects.map(p => p.category)))];
  const filtered = filter === "All" ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Projects & Case Studies</h1>

      <div className="flex gap-3 items-center">
        <span className="text-sm text-gray-600">Filter:</span>
        {categories.map(c => (
          <button key={c} onClick={()=>setFilter(c)} className={`px-3 py-1 rounded ${filter===c ? "bg-indigo-600 text-white" : "border"}`}>{c}</button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>

      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border shadow">
        <h3 className="font-semibold">Case Study Template</h3>
        <ol className="list-decimal ml-5 mt-3 text-gray-600 dark:text-gray-300">
          <li>Problem statement</li>
          <li>Architecture & approach</li>
          <li>Implementation details</li>
          <li>Testing & optimization</li>
          <li>Impact & learnings</li>
        </ol>
      </div>
    </section>
  );
}
