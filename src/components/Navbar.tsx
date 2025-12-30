import React from 'react';

const Navbar = ({ activeSection, scrollToSection }: { activeSection: string, scrollToSection: (id: string) => void }) => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-900/50 z-40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
          {"<Yashraj />"}
        </h1>
        <div className="hidden md:flex gap-8">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`transition-all hover:text-purple-400 ${
                activeSection === item.toLowerCase() ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;