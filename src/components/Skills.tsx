import React from 'react';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative bg-slate-900/50">
      <div className="max-w-5xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Skills & Technologies</h2>
        <p className="text-gray-400 text-center mb-12">My technical toolkit</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup, idx) => {
            const Icon = skillGroup.icon;
            return (
              <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-purple-400" size={24} />
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;