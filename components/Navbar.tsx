import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface NavbarProps {
  currentPage: string;
  onNavigate?: (page: string) => void; 
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Work', id: 'work' },
    { name: 'Process', id: 'process' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 z-50 bg-white/80 dark:bg-black/50 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      {/* Logo Area */}
      <button 
        onClick={() => handleNavClick('home')}
        className="text-xl font-display font-bold tracking-wider text-gray-900 dark:text-white group cursor-pointer focus:outline-none transition-colors"
      >
        R<span className="text-neon-green group-hover:text-neon-purple transition-colors duration-300">B</span>
        <span className="text-gray-400 dark:text-dark-accent">.</span>
      </button>

      {/* Desktop Menu & Theme Toggle */}
      <div className="hidden md:flex items-center gap-12">
        <ul className="flex items-center space-x-12">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button 
                onClick={() => handleNavClick(link.id)}
                className={`text-sm uppercase tracking-widest transition-all duration-300 relative group py-2 ${
                  currentPage === link.id 
                    ? 'text-black dark:text-white' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-0 left-0 h-[2px] bg-neon-green transition-all duration-300 ease-out ${
                  currentPage === link.id ? 'w-full shadow-[0_0_10px_#2cff05]' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-neon-green hover:border-neon-green dark:hover:border-neon-green transition-all"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Mobile Menu Controls */}
      <div className="flex md:hidden items-center gap-4">
        <button 
            onClick={toggleTheme}
            className="p-2 text-gray-500 dark:text-gray-400"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button 
          className="text-gray-900 dark:text-white hover:text-neon-green transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-200 dark:border-dark-accent p-8 flex flex-col items-center space-y-8 md:hidden">
           {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-2xl uppercase font-display tracking-widest transition-colors ${
                currentPage === link.id ? 'text-neon-green' : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;