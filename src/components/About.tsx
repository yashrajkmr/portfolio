import React from 'react';
import { MapPin, GraduationCap, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 relative">
      <div className="max-w-4xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            
            {/* Quick Info Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-gray-300">
                <GraduationCap className="text-purple-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">BCA Graduate</p>
                  <p className="text-sm">8.38 CGPA</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-purple-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Patna, Bihar</p>
                  <p className="text-sm">Open to relocation</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Code className="text-purple-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Problem Solving</p>
                  <p className="text-sm">200+ (LeetCode & GFG)</p>
                </div>
              </div>
            </div>

            {/* Bio Column */}
            <div className="space-y-4 text-gray-300 leading-relaxed border-l border-white/10 pl-0 md:pl-8">
              <p>
                Recent BCA Graduate with a strong foundation in Computer Science.
              </p>
              <p>
                I am a <strong>Frontend Developer</strong> building responsive user interfaces with <span className="text-purple-300">React</span> and <span className="text-purple-300">TypeScript</span>. 
                While my focus is on the frontend, I have built full-stack applications to understand the complete lifecycle of web development.
              </p>
              <p>
                I have solved <strong>200+ Data Structure & Algorithm problems</strong> across LeetCode and GeeksforGeeks, ensuring that my code is not just pretty, but efficient.
              </p>
              <p>
                Currently seeking <strong>Junior Frontend Developer</strong> roles where I can apply my skills in building clean, efficient, and user-friendly web applications.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;