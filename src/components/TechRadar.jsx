import React from "react";

export default function TechRadar({ skills }){
  return (
    <div className="space-y-4">
      {skills.map(s => (
        <div key={s.name}>
          <div className="flex justify-between text-sm"><span className="font-medium">{s.name}</span><span>{s.level}%</span></div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2 overflow-hidden">
            <div style={{width: `${s.level}%`}} className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
