import React from 'react';
import { Linkedin, Github, Send, Mail, MapPin } from 'lucide-react';

import Reveal from './Reveal';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 min-h-[82vh] flex items-center border-t border-black/5 dark:border-white/5 transition-colors">
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Contact Info */}
        <div className="space-y-10">
          <Reveal>
            <div>
              <h2 className="font-display font-bold text-5xl text-gray-900 dark:text-white mb-4 transition-colors">INITIALIZE <br /><span className="text-neon-green">UPLINK</span></h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed  mb-12  transition-colors max-w-xl mx-auto">
                Ready to collaborate on the future? Drop a signal. Whether it's a project inquiry or just a tech discussion, I'm listening.
              </p>
              <a 
          href="mailto:rajasbehera@gmail.com"
          className="inline-block px-8 py-4 border border-neon-green bg-transparent hover:bg-neon-green/10 text-neon-green font-mono rounded transition-all transform hover:-translate-y-1"
        >
          Say Hello
        </a>

        <div className="mt-16 flex justify-center gap-8">
           <a href="#" className="text-gray-400 hover:text-neon-green transition-colors"><Linkedin className="w-6 h-6" /></a>
        </div>
            </div>
          </Reveal>

          {/* <div className="space-y-6">
            <Reveal delay={200}>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-dark-accent group-hover:border-neon-green transition-colors">
                  <Mail className="text-gray-500 dark:text-gray-400 group-hover:text-neon-green" size={20} />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-widest">Email</span>
                  <span className="text-gray-900 dark:text-white font-mono">hello@rajabehera.dev</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-dark-accent group-hover:border-neon-purple transition-colors">
                  <MapPin className="text-gray-500 dark:text-gray-400 group-hover:text-neon-purple" size={20} />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-widest">Location</span>
                  <span className="text-gray-900 dark:text-white font-mono">Remote / Global</span>
                </div>
              </div>
            </Reveal>
          </div> */}
        </div>

        {/* Form */}
        {/* <Reveal delay={400} width="100%">
          <form className="bg-white dark:bg-white/5 border border-gray-200 dark:border-dark-accent p-8 rounded-sm backdrop-blur-sm relative transition-colors shadow-sm dark:shadow-none" onSubmit={(e) => e.preventDefault()}>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-20"></div>
            
            <div className="space-y-6">
              <div className="group">
                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-neon-green transition-colors">Identity</label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-accent p-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-neon-green focus:outline-none focus:shadow-[0_0_10px_rgba(44,255,5,0.1)] transition-all"
                />
              </div>
              
              <div className="group">
                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-neon-purple transition-colors">Frequency (Email)</label>
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-accent p-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-neon-purple focus:outline-none focus:shadow-[0_0_10px_rgba(191,0,255,0.1)] transition-all"
                />
              </div>

              <div className="group">
                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-blue-500 transition-colors">Transmission</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-accent p-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:shadow-[0_0_10px_rgba(59,130,246,0.1)] transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-neon-green text-black font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group">
                Send Signal
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </Reveal> */}
      </div>
    </section>
  );
};

export default Contact;