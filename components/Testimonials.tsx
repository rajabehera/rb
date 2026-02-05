import React from 'react';
import { Quote } from 'lucide-react';
import Reveal from './Reveal';
export const TESTIMONIALS = [
  {
    id: 1,
    name: "GS RAWAT",
    role: "CEO",
    company: "Seatrans Agencies Pvt. Ltd.",
    text: "Raja is one of those rare engineers who truly understands design. He doesn't just build what's asked; he improves the user experience at every step of the process."
  },
  {
    id: 2,
    name: "Devendra Trivedi",
    role: "Director",
    company: "Trivedi Films",
    text: "The attention to detail Raja brings to frontend development is unmatched. He nailed the complex animations we designed perfectly without compromising performance."
  },
  {
    id: 3,
    name: "Saurabh Bajaj",
    role: "Sr. Software Developer",
    company: "SuDrives",
    text: "Working with Raja was a game-changer for our MVP. His ability to prototype quickly and then write production-ready code saved us months of development time."
  }
];
const Testimonials: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="w-full max-w-[1200px] min-h-[82vh] mx-auto px-6 md:px-12 py-32 border-t border-black/5 dark:border-white/5 transition-colors">

      {/* Header */}
      <div className="mb-16">
        <Reveal width="100%">
          <h2 className="font-display font-bold text-5xl text-gray-900 dark:text-white mb-4 transition-colors text-center">
            TESTIMONIALS
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto transition-colors mb-12 text-center">
            Hear from the clients and colleague whose feedback reflects the dedication, creativity, and problem-solving I bring to every project, big or small.          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="p-8 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-white/5 hover:border-neon-green/30 transition-all duration-300 relative group"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-neon-green/20 group-hover:text-neon-green/40 transition-colors absolute top-6 right-6" />

              <div className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>

                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-mono text-neon-green">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;