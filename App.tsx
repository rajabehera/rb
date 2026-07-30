import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import ProjectDetail from './components/ProjectDetail';
import Cursor from './components/Cursor';
import NotFound from './components/NotFound';
import Certifications from './components/Certifications';
import { ThemeProvider } from './components/ThemeContext';
import Testimonials from './components/Testimonials';

const Footer = ({ onTrigger404 }: { onTrigger404: () => void }) => (
  <div className="w-full py-8 text-center bg-white dark:bg-black border-t border-black/5 dark:border-white/5 z-40 relative transition-colors">
     <p className="text-[10px] md:text-xs font-mono text-gray-500 tracking-[0.2em] uppercase">
       © {new Date().getFullYear()} Raja Behera <span className="mx-2">|</span> Sr. Product Designer <span className="mx-2">|</span> 
       <button onClick={onTrigger404} className="hover:text-neon-green transition-colors cursor-pointer">GhostLink</button>
     </p>
  </div>
);

const AppContent: React.FC = () => {
  // Check URL on mount to determine if we should show 404 immediately
  // This allows urls like domain.com/random to show the 404 page
  const isInvalidPath = window.location.pathname !== '/' && window.location.pathname !== '/index.html';

  const [loading, setLoading] = useState(!isInvalidPath); // Skip loading if it's already a 404
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [show404, setShow404] = useState(isInvalidPath);

  // Scroll Spy to update active navbar state
  useEffect(() => {
    if (loading || selectedProjectId || show404) return;

    const sections = ['home', 'work', 'process', 'about', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 } 
    );

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [loading, selectedProjectId, show404]);

  const handleProjectSelect = (id: number) => {
    setSelectedProjectId(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToMain = () => {
    setSelectedProjectId(null);
    setShow404(false);
    setTimeout(() => {
      const workSection = document.getElementById('work');
      if (workSection) workSection.scrollIntoView({ behavior: 'auto' });
      else window.scrollTo({ top: 0, behavior: 'auto' });
    }, 50);
  };
  
  const handleHome = () => {
      setSelectedProjectId(null);
      setShow404(false);
      // Reset URL to root if we were on a 404 route
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  if (show404) {
      return (
          <>
            <Cursor />
            <NotFound onReturn={handleHome} />
          </>
      )
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-white relative overflow-x-hidden selection:bg-neon-green selection:text-black font-sans animate-in fade-in duration-1000 transition-colors">
      
      <Cursor />

      {/* Ambient Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-neon-purple/5 dark:bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(45,45,45,0.05)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(45,45,45,0.3)_0%,rgba(0,0,0,0)_70%)] opacity-50" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar 
          currentPage={selectedProjectId ? 'work' : activeSection} 
          onNavigate={(page) => {
            if (selectedProjectId || show404) {
              setSelectedProjectId(null);
              setShow404(false);
              setTimeout(() => {
                document.getElementById(page)?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            } else {
               document.getElementById(page)?.scrollIntoView({ behavior: 'smooth' });
            }
          }} 
        />
        
        {/* Main Content Area */}
        <main className="flex-grow flex flex-col relative"> 
          {selectedProjectId ? (
             <ProjectDetail 
               projectId={selectedProjectId} 
               onBack={handleBackToMain} 
               onNavigate={handleProjectSelect}
             />
          ) : (
            <>
              <Hero id="home" />
              <Work id="work" onProjectSelect={handleProjectSelect} />
              <Process id="process" />
              <About id="about" />
              <Testimonials id="testimonials" />

              <Certifications />
              <Contact id="contact" />
            </>
          )}
        </main>

        {!selectedProjectId && <Footer onTrigger404={() => setShow404(true)} />}
      </div>
    </div>
  );
};

const App: React.FC = () => (
    <ThemeProvider>
        <AppContent />
    </ThemeProvider>
);

export default App;