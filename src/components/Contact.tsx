import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, MapPin,} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! Message sent successfully.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-4xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-12">Open to new opportunities and collaborations</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none transition-all text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none transition-all text-white placeholder-gray-400"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none transition-all text-white placeholder-gray-400 resize-none"
              />
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-[1.02] transition-all shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-6">
             <div className="space-y-4">
                <a href="mailto:yashrajkmr01@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 bg-white/5 rounded-lg border border-white/10">
                  <Mail className="text-purple-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">yashrajkmr01@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/yashraj-kumar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 bg-white/5 rounded-lg border border-white/10">
                  <Linkedin className="text-purple-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="font-medium">in/yashraj-kumar</p>
                  </div>
                </a>

                <a href="https://github.com/yashrajkmr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 bg-white/5 rounded-lg border border-white/10">
                  <Github className="text-purple-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="font-medium">github.com/yashrajkmr</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300 p-4 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="text-purple-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">Patna, Bihar | Open to relocation</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;