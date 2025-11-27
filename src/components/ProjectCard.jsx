import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }){
  return (
    <motion.article whileHover={{ y:-6 }} className="p-5 rounded-xl border bg-white dark:bg-gray-800 shadow">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{project.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map(t => <span key={t} className="text-xs px-2 py-1 border rounded-full">{t}</span>)}
      </div>
      <div className="mt-4 flex gap-2">
        {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded">View</a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 bg-indigo-600 text-white rounded">Live</a>}
      </div>
    </motion.article>
  );
}
