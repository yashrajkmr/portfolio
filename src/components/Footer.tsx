import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10 backdrop-blur-md bg-slate-900/50">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p className="text-sm md:text-base font-medium text-gray-300">© 2025 Yashraj Kumar</p>
        <p className="mt-2 text-xs md:text-sm text-gray-500">
          Built with React + TypeScript + Tailwind CSS <br />
          Last Updated: Dec 2025 | <span className="text-emerald-400">Open to opportunities</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;