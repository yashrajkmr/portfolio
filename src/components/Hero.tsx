import React from 'react';
import { Linkedin, FileText, ArrowDown } from 'lucide-react';

const Hero = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center z-10">
        
        <div className="inline-block mb-6 px-4 py-1.5 bg-purple-500/10 rounded-full border border-purple-500/20">
          <span className="text-purple-300 font-medium text-sm">Frontend Developer</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-4">
          Hi, I'm <span className="text-white font-bold">Yashraj Kumar</span>
        </h2>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
          React • TypeScript • <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tailwind CSS
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Building responsive user interfaces for modern web applications.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:scale-105 transition-all shadow-lg shadow-white/10 flex items-center gap-2"
          >
            <ArrowDown size={20} />
            View Projects
          </button>
          
          <a 
            href="/Yashraj_Kumar_Frontend_Developer_Resume.pdf" 
            download="Yashraj_Kumar_Frontend_Developer_Resume.pdf"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
          >
            <FileText size={20} />
            Download Resume
          </a>

          <a 
            href="https://www.linkedin.com/in/yashraj-kumar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#0077b5]/20 backdrop-blur-sm rounded-lg font-semibold hover:bg-[#0077b5]/30 transition-all border border-[#0077b5]/30 flex items-center gap-2 text-blue-100"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;