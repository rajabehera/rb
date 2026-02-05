import React, { useState } from 'react';
import { 
  Layout, 
  Code, 
  Cpu, 
  Search, 
  PenTool, 
  Smartphone, 
  Zap, 
  Layers, 
  Terminal, 
  Globe, 
  GitBranch, 
  FileCode, 
  Users, 
  Accessibility, 
  Share2,
  LucideIcon
} from 'lucide-react';
import Reveal from './Reveal';

interface ProcessProps {
  id?: string;
}

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface ProcessCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string; // Text color class
  borderColor: string; // Border color class
  shadowColor: string; // Shadow color hex for inline styles
  description: string;
  steps: Step[];
}

const processData: ProcessCategory[] = [
  {
    id: 'ui-ux',
    label: 'UI/UX Design',
    icon: Layout,
    color: 'text-neon-purple',
    borderColor: 'border-neon-purple',
    shadowColor: '#bf00ff',
    description: "Crafting intuitive digital experiences rooted in empathy and data-driven decisions.",
    steps: [
      { num: '01', title: 'Discover', desc: 'User interviews, competitive auditing, and persona building.', icon: Search },
      { num: '02', title: 'Define', desc: 'Problem statements, empathy mapping, and user journey flows.', icon: Users },
      { num: '03', title: 'Ideate', desc: 'Sketching, wireframing, and information architecture.', icon: PenTool },
      { num: '04', title: 'Prototype', desc: 'High-fidelity interactive mockups and micro-interactions.', icon: Smartphone },
      { num: '05', title: 'Test', desc: 'Usability testing, heuristic evaluation, and iteration.', icon: Zap }
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend Dev',
    icon: Code,
    color: 'text-blue-500',
    borderColor: 'border-blue-500',
    shadowColor: '#3b82f6',
    description: "Building scalable, performant, and pixel-perfect applications using modern tech stacks.",
    steps: [
      { num: '01', title: 'Architect', desc: 'Tech stack selection, component structure, and state strategy.', icon: Layers },
      { num: '02', title: 'Develop', desc: 'Clean, modular coding with React, TypeScript, and Tailwind.', icon: Terminal },
      { num: '03', title: 'Integrate', desc: 'API connections, headless CMS binding, and database logic.', icon: Globe },
      { num: '04', title: 'Optimize', desc: 'Performance tuning (Lighthouse), SEO, and asset compression.', icon: Zap },
      { num: '05', title: 'Deploy', desc: 'CI/CD pipelines, edge caching, and automated testing.', icon: GitBranch }
    ]
  },
  {
    id: 'ux-eng',
    label: 'UX Engineering',
    icon: Cpu,
    color: 'text-neon-green',
    borderColor: 'border-neon-green',
    shadowColor: '#2cff05',
    description: "Bridging the gap between design and engineering with systems and functional prototypes.",
    steps: [
      { num: '01', title: 'Feasibility', desc: 'Technical constraints analysis during the design phase.', icon: Search },
      { num: '02', title: 'Systems', desc: 'Creating unified design tokens and component libraries.', icon: Layout },
      { num: '03', title: 'Prototyping', desc: 'Building code-based prototypes for complex logic.', icon: FileCode },
      { num: '04', title: 'Accessibility', desc: 'Ensuring WCAG compliance, keyboard nav, and screen readers.', icon: Accessibility },
      { num: '05', title: 'Handoff', desc: 'Automating specs, documentation, and developer guidance.', icon: Share2 }
    ]
  }
];

const Process: React.FC<ProcessProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState('ux-eng');
  
  const activeProcess = processData.find(p => p.id === activeTab) || processData[2];

  return (
    <section id={id} className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 border-t border-black/5 dark:border-white/5 transition-colors">
      
      {/* Header */}
      <div className="text-center mb-16">
        <Reveal width="100%">
          <h2 className="font-display font-bold text-5xl text-gray-900 dark:text-white mb-4 transition-colors">
            THE PROTOCOL
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto transition-colors mb-12">
            My workflow adapts to the challenge. Select a methodology to view the execution strategy.
          </p>
        </Reveal>

        {/* Interactive Tabs */}
        <Reveal width="100%" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {processData.map((process) => {
              const isActive = activeTab === process.id;
              const Icon = process.icon;
              return (
                <button
                  key={process.id}
                  onClick={() => setActiveTab(process.id)}
                  className={`relative group px-6 py-4 rounded-sm border transition-all duration-300 flex items-center gap-3 uppercase tracking-wider font-bold font-display text-sm md:text-base ${
                    isActive 
                      ? `bg-white dark:bg-white/10 ${process.borderColor} ${process.color} shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-none` 
                      : 'bg-transparent border-gray-300 dark:border-gray-800 text-gray-500 dark:text-gray-500 hover:border-gray-400 dark:hover:border-gray-600'
                  }`}
                  style={isActive ? { boxShadow: `0 0 15px ${process.shadowColor}40` } : {}}
                >
                  <Icon size={18} />
                  {process.label}
                  {/* Active Indicator Line */}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-current`}></span>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Dynamic Content Area */}
      <div className="relative min-h-[400px]">
        {/* Description */}
        <div key={`${activeTab}-desc`} className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
           <p className={`text-lg md:text-xl ${activeProcess.color} font-light`}>
             "{activeProcess.description}"
           </p>
        </div>

        {/* Steps Grid */}
        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-5 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-gray-200 dark:bg-dark-accent -z-10 transition-colors"></div>

          {activeProcess.steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div key={index} className="relative group h-full">
                 
                 {/* Node Point */}
                 <div className={`hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-black border-2 border-gray-200 dark:border-dark-accent mx-auto mb-8 transition-all duration-300 z-10 relative group-hover:scale-110 group-hover:border-current ${activeProcess.color}`}>
                    <StepIcon size={14} />
                 </div>

                 {/* Mobile Connector */}
                 <div className="md:hidden absolute left-4 top-12 bottom-0 w-[1px] bg-gray-200 dark:bg-dark-accent"></div>

                 {/* Card */}
                 <div className={`
                    bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-dark-accent p-6 
                    hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 h-full 
                    group-hover:transform group-hover:-translate-y-2 relative overflow-hidden shadow-sm dark:shadow-none
                    ml-8 md:ml-0
                 `}>
                    {/* Top Color Line */}
                    <div className={`absolute top-0 left-0 w-full h-[2px] bg-current ${activeProcess.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    
                    <div className="flex justify-between items-start mb-4">
                      <span className={`font-display text-3xl font-bold opacity-20 ${activeProcess.color}`}>{step.num}</span>
                      <div className="md:hidden text-gray-400"><StepIcon size={18} /></div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">
                      {step.desc}
                    </p>
                 </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Process;