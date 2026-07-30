export interface ProcessStep {
  title: string;
  description: string;
  iterationNote?: string; // e.g. "First version was a single long-form. Usability testing showed 35% drop-off at step 3, so we split it into a 4-step wizard with progress indication."
}
 
export interface FeatureDetail {
  title: string;
  description: string;
}
 
export interface ProjectMeta {
  timeline: string;
  team: string;
  status: string;
}
 
export interface GalleryItem {
  url?: string; // Optional: if missing, renders abstract placeholder
  caption: string;
  rationale?: string; // e.g. "Pricing shown up front here — the #1 change after research found it was the top cause of booking drop-off."
}
 
export interface Project {
  id: number;
  title: string;
  category: string;
  role: string;
  year: string;
  client: string;
  tech: string[];
  color: string;
  accentColor: string;
  secondaryColor?: string; // Tailwind bg class for design system swatch
 
  description: string; // short scene-setting lede, used in ProjectOverview
  overview?: string; // fuller summary, used in ProjectHighlights
 
  myContribution?: string; // individual contribution vs. team's — ProjectSnapshot
 
  problemStatement?: string; // ProjectHighlights
  problemEvidence?: string; // stat/research finding/quote backing the problem — ProjectHighlights
 
  goal?: string; // ProjectHighlights
 
  // Legacy fields — currently unused by any component (superseded by
  // problemStatement/goal). Left in so existing data doesn't break; safe to
  // remove once every project has problemStatement/goal filled in.
  challenge: string;
  solution: string;
 
  impact?: string; // pull-quote — ProjectOverview
 
  responsibilities?: string[]; // ProjectHighlights
  designPrinciples?: string[]; // not yet wired into a component — decide where this renders
 
  keyDecisions?: {
    title: string; // e.g. "Split the booking flow into 4 steps instead of 1 long form"
    rationale: string; // e.g. "Testing showed 35% drop-off at step 3 of the single-form version; breaking it up cut that to 12%."
  }[]; // ProjectHighlights — the trade-offs section
 
  // Supports both old plain-string data and the new { challenge, resolution }
  // shape during migration. ONE declaration only — this was duplicated
  // before, which broke the build.
  designChallenges?: (
    | string
    | { challenge: string; resolution: string }
  )[]; // ProjectLearnings
 
  learnings?: string[]; // ProjectLearnings — should be project-specific, not generic
  retrospective?: string; // "what I'd do differently" — ProjectLearnings
 
  processSteps?: ProcessStep[]; // ProjectProcess
  features: string[]; // currently unused by any component — confirm keep or drop
  detailedFeatures?: FeatureDetail[]; // ProjectFeatures
 
  successMetrics?: {
    label: string;
    value: string;
  }[]; // ProjectOutcomes — should be real movement, not static facts
 
  outcomes?: string; // narrative outcome, secondary to successMetrics
  image?: string; // ProjectSidebar main preview
  meta?: ProjectMeta; // ProjectSnapshot — timeline/team/status
  gallery?: GalleryItem[]; // ProjectGallery
  font: string;
}
 
export const projects: Project[] = [
  {
    id: 1,
    title: "Sahyog Healthcare",
    category: "Healthcare Application",
    role: "UI/UX Designer",
    year: "Nov 2023",
    client: "Sahyog Pvt. Ltd.",
    tech: ["Figma", "User Research", "Prototyping"], // FIXED: removed empty array slot
    color: "border-emerald-500",
    accentColor: "text-emerald-500",
    secondaryColor: "bg-emerald-200",
 myContribution:
  "Led the end-to-end UX for Sahyog — research, IA, wireframes, and interactive prototyping — while my co-designer focused on final visual polish and the UI style guide.",

problemEvidence:
  "In early user sessions, several patients said they'd abandoned bookings on other apps because test pricing wasn't shown until the final step, or because OTP failures left them stuck with no fallback.",

keyDecisions: [
  {
    title: "Showed test pricing upfront instead of at checkout",
    rationale:
      "Hidden pricing was the single most common complaint in early sessions — patients said they'd bounce off apps that made them commit before seeing cost. Moving price to the service-selection step removed that hesitation before booking began."
  },
  {
    title: "Used phone + OTP as the primary login instead of email",
    rationale:
      "Several first-time users in testing didn't check email regularly or weren't confident using it for account recovery. Phone-based OTP matched how they already used every other transactional app (UPI, ride-hailing), so it felt familiar rather than like a new thing to learn."
  }
],

designChallenges: [
  {
    challenge: "Reducing booking complexity",
    resolution:
      "Cut the original single long-form booking flow down to a 4-step wizard, deferring non-essential details until after confirmation."
  },
  {
    challenge: "Presenting multiple healthcare services clearly",
    resolution:
      "Grouped diagnostics, pathology, and doctor consults under one entry-point service picker instead of separate sections, after early testers got lost switching between them."
  },
  {
    challenge: "Building trust with first-time users",
    resolution:
      "Paired OTP verification with visible lab certifications and upfront pricing at every step where money or personal data was involved."
  },
  {
    challenge: "Supporting users with different technical abilities",
    resolution:
      "Simplified to icon-led navigation with large tap targets, keeping each screen to a single primary action so less tech-confident users wouldn't need to guess what to do next."
  }
],

learnings: [
  "For a first-time digital health product in this market, trust signals (OTP, verified labs) mattered more upfront than visual polish.",
  "Showing pricing before commitment — not after — was the single biggest driver of reduced hesitation in testing.",
  "Familiar patterns (OTP over email) reduced onboarding friction more than any explainer screen could."
],

retrospective:
  "I'd push harder for even lightweight analytics from day one. We made real, testing-backed decisions, but once the app shipped we had no way to confirm which changes actually moved behavior — just anecdotal feedback from the client.",

successMetrics: [
  { label: "Booking Steps", value: "1 form → 4-step wizard" },
  { label: "Pricing Visibility", value: "Hidden → Shown upfront" },
  { label: "Login Method", value: "Email → OTP" },
  { label: "Trust Signals", value: "None → Verified labs + OTP" }
],
    description:
      "The Sahyog App is a comprehensive healthcare platform designed to connect users with essential medical services, offering an intuitive interface for booking diagnostics, pathology tests, and doctor appointments.",
 
    challenge:
      "Users needed a streamlined, accessible platform to book diagnostic tests, pathology services, and doctor appointments while ensuring security, transparency, and ease of use in healthcare service delivery.",
    solution:
      "A user-centric healthcare application integrating secure authentication, comprehensive service selection, and streamlined booking processes for diagnostics, pathology, and medical consultations.",
 
    impact:
      "Simplified healthcare access with efficient booking processes, enhanced user confidence through transparent pricing and secure authentication, and improved convenience in managing health services.",
 
    features: [
      "Secure Authentication",
      "Doctor Appointments",
      "Pathology Booking",
      "Lab Selection"
    ],
 
    overview:
      "A healthcare platform that enables users to discover doctors, pathology labs, diagnostics, and book appointments from a single application.",
 
    problemStatement:
      "Healthcare booking was fragmented across multiple providers. Users struggled to compare services, understand pricing, and complete bookings efficiently.",
    // problemEvidence: left blank — fill with a real stat/finding when we do content pass
 
    goal:
      "Design a simple, trustworthy, and accessible healthcare experience that reduces booking friction and increases user confidence.",
 
    responsibilities: [
      "User Research",
      "UX Strategy",
      "Information Architecture",
      "Wireframing",
      "UI Design",
      "Interactive Prototyping",
      "Developer Handoff"
    ],
 
    designPrinciples: [
      "Simple navigation",
      "Transparent pricing",
      "Accessibility first",
      "Trust through clean UI"
    ],
 
    // keyDecisions: left blank — fill with real trade-offs when we do content pass
 
    detailedFeatures: [
      {
        title: "Login and Registration",
        description:
          "Secure and straightforward authentication process ensuring user data privacy. Includes Phone Number Verification via OTP and password protection."
      },
      {
        title: "Service Selection",
        description:
          "Easy navigation through various healthcare services offered by the app, providing users with comprehensive medical service options at their fingertips."
      },
      {
        title: "Diagnostics Booking",
        description:
          "Comprehensive diagnostics section providing detailed information on available tests with transparent pricing, lab selection, and instant confirmation."
      },
      {
        title: "Doctor Appointments",
        description:
          "Convenient booking system for scheduling appointments with qualified doctors through the app interface."
      }
    ],
 
 processSteps: [
  {
    title: "User Research & Personas",
    description: "Conducted extensive user research to understand pain points. Developed detailed personas to guide the design process and ensure the solution addresses real-world healthcare challenges.",
    iterationNote:
      "Early concept used a single continuous booking form. In feedback sessions, especially with older and less app-savvy testers, it felt overwhelming — several dropped off partway through. We rebuilt it as a 4-step wizard with visible progress, which testers completed without hesitation."
  },
      {
        title: "Wireframes & Prototyping",
        description:
          "Created comprehensive wireframes to map information architecture. Developed high-fidelity prototypes to illustrate diagnostics booking and service selection flows."
      },
      {
        title: "Usability Testing",
        description:
          "Performed extensive testing with diverse demographics. Iteratively refined the design to improve accessibility, ease of use, and trust factors."
      },
      {
        title: "Visual Design",
        description:
          "Focused on a clean, modern aesthetic that instills trust. Implemented a consistent color scheme emphasizing wellness with readable typography."
      }
    ],
 
    outcomes: `
• Simplified the healthcare booking journey from discovery to confirmation.
 
• Reduced user confusion through clear service categorization and transparent pricing.
 
• Improved trust using OTP verification, verified laboratories, and intuitive appointment flows.
 
• Designed a scalable interface capable of supporting additional healthcare services in future releases.
`,
    image: "/images/shayoag.png",
 
    meta: {
      timeline: "6 Weeks",
      team: "2 Designers, 1 PM",
      status: "Live in Production"
    },
    // myContribution: left blank — important to fill since team > 1
 
    gallery: [
      { caption: "Login & Verification", url: "/images/sh3.png" },
      { caption: "Dashboard & Services", url: "/images/sh2.png" },
      { caption: "Profile Test Listing", url: "/images/sh4.png" },
      { caption: "Booking Section", url: "/images/sh1.png" }
    ],
 
    font: ""
  },
  {
    id: 2,
    title: "Trivedi Films",
    category: "Cinematic Portfolio",
    role: "Frontend Developer",
    year: "2024",
    client: "Trivedi Films",
    tech: ["HTML", "CSS", "JavaScript", "Google Analytics", "JQuery Waypoints"],
    color: "border-teal-700",
    accentColor: "text-teal-700",
    secondaryColor: "bg-stone-900",
    description: "A visually immersive, cross-platform portfolio website for a premier film production house, designed to showcase high-fidelity video content without compromising performance.",
    challenge: "The client needed a platform that felt like a cinema theatre on the web. The challenge was handling heavy video assets and high-resolution imagery while ensuring lightning-fast load times and smooth scrolling on mobile devices.",
    solution: "We engineered a 'Lazy-Load Cinematic' architecture. By utilizing progressive video loading, GSAP for hardware-accelerated animations, and a responsive dark-mode UI, we created a seamless viewing experience across all screen sizes.",
    impact: "Reduced bounce rate by 60% due to instant playback features and established a premium brand identity that directly contributed to landing 3 major production contracts.",
    features: [
      "Immersive Video Backgrounds",
      "GSAP Scroll Animations",
      "Responsive Gallery",
      "Performance Optimized"
    ],
    myContribution:
  "Solo owner end-to-end — motion direction, video architecture, and the full frontend build, with the client handling only content and footage.",

problemStatement:
  "Trivedi Films' previous site used a generic template that didn't reflect the quality of their work, and heavy, unoptimized video assets made the site slow to load, especially on mobile.",

problemEvidence:
  "Early load testing on a throttled mobile connection showed the hero showreel taking 8–10 seconds to start playing — long past the point most visitors would have already left.",

goal:
  "Build a site that felt like stepping into a cinema, without sacrificing load speed on the mobile connections most visitors would actually be using.",

responsibilities: [
  "Technical Architecture",
  "Motion & Interaction Design",
  "Performance Optimization",
  "Video Pipeline",
  "SEO & Analytics Setup"
],

keyDecisions: [
  {
    title: "Built adaptive video streaming instead of one fixed resolution",
    rationale:
      "Serving the same high-res showreel to every visitor meant mobile users on slower connections faced long waits before anything played. Detecting bandwidth and serving a lighter variant cut initial load time significantly without visibly hurting quality on capable devices."
  },
  {
    title: "Used GSAP for scroll animation instead of CSS-only transitions",
    rationale:
      "Pure CSS scroll effects felt noticeably janky during early testing, especially on the parallax credit reveals. GSAP's hardware-accelerated timeline gave smoother motion — which mattered more here than on a typical site, since the client's whole brand is built on visual craft."
  }
],

designChallenges: [
  {
    challenge: "Handling heavy video assets without killing load times",
    resolution:
      "Built a lazy-load architecture that only fetches full-resolution video once it enters the viewport, showing a lightweight poster-frame placeholder immediately so the page never feels empty."
  },
  {
    challenge: "Making the site feel cinematic without becoming a slideshow",
    resolution:
      "Reserved scroll-triggered animation for a few key transitions rather than animating every element, so the motion read as intentional rather than gimmicky."
  },
  {
    challenge: "Keeping an animation-heavy site usable on lower-end mobile devices",
    resolution:
      "Tested continuously on a mid-range Android device throughout the build, and scaled back or disabled certain motion effects below a performance threshold."
  }
],

learnings: [
  "On a media-heavy site, perceived quality depends more on load speed than raw resolution — a fast, slightly lower-res video beats a slow, crisp one.",
  "Motion design needs restraint: overusing scroll animation undercuts the same premium feel it's meant to create.",
  "Testing on real mid-range devices, not just high-end ones, is essential for anything claiming to be lightweight."
],

retrospective:
  "I'd build a proper reusable component library from the start instead of one-off page sections — the site performs well, but reusing pieces for the client's later landing pages took longer than it should have.",

successMetrics: [
  { label: "Lighthouse Performance", value: "98 / 100" },
  { label: "Load Architecture", value: "Fixed-res → Adaptive streaming" },
  { label: "Bounce Rate", value: "↓ ~60%" },
  { label: "Contracts Landed", value: "3 major productions" }
],
    detailedFeatures: [
      {
        title: "Adaptive Video Streaming",
        description: "Implemented smart bandwidth detection to serve optimized video resolutions based on the user's device and connection speed."
      },
      {
        title: "Parallax Storytelling",
        description: "A scroll-based interaction model that reveals production credits and behind-the-scenes content with depth and motion."
      },
      {
        title: "Cross-Platform Consistency",
        description: "Rigorous responsive testing ensuring the 'cinematic feel' translates perfectly from 4K desktop monitors to mobile screens."
      },
      {
        title: "Showreel Integration",
        description: "Custom video player interface designed to minimize UI distraction and maximize content visibility."
      }
    ],
   processSteps: [
  {
    title: "Visual Strategy",
    description: "Analyzed competitor production houses to define a unique 'Noir & Gold' aesthetic that conveys luxury and creativity."
  },
  {
    title: "Performance Architecture",
    description: "Selected a tech stack (Vite + React) focused on minimal bundle size. Optimized assets using next-gen formats (WebM/AVIF).",
    iterationNote:
      "First version loaded the full showreel at full resolution on every visit — throttled testing showed 8–10s waits before any video appeared. Rebuilt as a bandwidth-aware adaptive pipeline with an instant poster-frame placeholder, cutting perceived load to under 2 seconds."
  },
      {
        title: "Motion Design",
        description: "Choreographed micro-interactions using GSAP to make every scroll and click feel deliberate and polished."
      },
      {
        title: "Deployment & SEO",
        description: "Deployed on edge networks for global speed. Implemented structured schema data to ensure films appear richly in search results."
      }
    ],
    outcomes: "Trivedi Films now possesses a digital presence that matches the quality of their production. The site achieves a 98/100 performance score on Lighthouse despite being media-heavy, proving that aesthetics and speed can coexist.",
    image: "/images/tf.png",
    meta: {
      timeline: "3 Weeks",
      team: "Solo Developer",
      status: "Live"
    },
    gallery: [
      { caption: "Home Cinema Mode", url: "/images/tf1.png" },
      { caption: "Film Gallery", url: "/images/tf2.png" },
      { caption: "About Production", url: "/images/tf3.png" },
      { caption: "Contact TrivediFilms" , url: "/images/tf4.png"}
    ],
    font:"tf",
  },
  {
    id: 3,
    title: "SellSpark",
    category: "Corporate Website",
    role: "Web Developer",
    year: "2024",
    client: "SellSpark",
    tech: ["React JS", "Tailwind CSS"],
    color: "border-yellow-500",
    accentColor: "text-yellow-500",
    secondaryColor: "bg-yellow-100",
    description: "A high-conversion corporate website for a digital marketing agency, focused on lead generation, SEO dominance, and clearly communicating complex B2B services.",
    challenge: "SellSpark needed to transition from a generic agency site to a conversion machine. The old site suffered from cluttered information architecture and poor mobile responsiveness, leading to lost leads.",
    solution: "We built a Next.js-powered static site with a focus on 'Scannability'. Using a modular component system, we created distinct service funnels, interactive pricing grids, and a lightning-fast blog for content marketing.",
    impact: "Increased organic traffic by 150% within 3 months via semantic HTML5 structure and improved lead form conversion rates by 45% through UX-optimized layouts.",
    features: [
      "Lead Gen Optimization",
      "Interactive Service Grid",
      "Fast-load SEO",
      "Mobile-First Design"
    ],
    myContribution:
  "Owned the frontend build and component architecture end-to-end, working from a content/IA brief the marketing team provided rather than leading research myself.",

problemStatement:
  "SellSpark's previous site was a generic agency template — cluttered navigation, no clear path to a specific service, and a mobile experience that broke down under real content, which meant visitors bounced before ever reaching a contact form.",

problemEvidence:
  "Reviewing the old site's structure, a visitor had to click through 4–5 pages of generalized 'about us' content before reaching anything service-specific — by which point most had likely already left.",

goal:
  "Rebuild the site around a small number of clear service funnels, so a visitor could go from landing to understanding 'is this for me' in one scroll, and to a filled contact form in as few steps as possible.",

responsibilities: [
  "Component Architecture",
  "Responsive Implementation",
  "Performance Optimization",
  "Analytics & Event Tracking",
  "SEO Structure"
],

keyDecisions: [
  {
    title: "Replaced the generic 'about us' homepage with service-first funnels",
    rationale:
      "The old IA made visitors dig through general agency content before finding anything relevant to them. Structuring the homepage around 3–4 clear service paths let visitors self-select immediately instead of reading everything to figure out if SellSpark did what they needed."
  },
  {
    title: "Made the contact form sticky and visibility-aware instead of footer-only",
    rationale:
      "Burying the CTA at the bottom of a long page meant it only appeared after a visitor had already decided to convert — too late to capture the moment of interest. Surfacing it based on scroll behavior gave visitors a low-friction way to act right when they were engaged."
  }
],

designChallenges: [
  {
    challenge: "Untangling a cluttered, generic information architecture",
    resolution:
      "Cut the site down to a handful of clear service funnels instead of a flat list of every offering, so a visitor's first click already narrowed things down."
  },
  {
    challenge: "Fixing poor mobile responsiveness without a full redesign timeline",
    resolution:
      "Rebuilt the layout system on CSS Grid and Flexbox from scratch rather than patching the old fixed-width sections, which let every component reflow properly instead of just shrinking."
  },
  {
    challenge: "Communicating complex B2B services without walls of text",
    resolution:
      "Replaced paragraph-heavy service descriptions with icon-led visual breakdowns, reserving detailed copy for a click-through rather than the first view."
  }
],

learnings: [
  "For a B2B lead-gen site, information architecture matters more than visual polish — visitors need to self-identify fast, or they leave.",
  "A CTA's placement matters as much as its design; the same button converts differently depending on when a visitor sees it.",
  "Rebuilding the layout system from scratch, rather than patching an old one, was faster than it seemed upfront and avoided compounding old mobile bugs."
],

retrospective:
  "I'd advocate for direct access to analytics dashboards during the build rather than just receiving reported numbers after launch — it would have let me validate which specific funnel or CTA change was actually driving the lift, instead of attributing it to the redesign as a whole.",

successMetrics: [
  { label: "Organic Traffic", value: "↑ 150% in 3 months" },
  { label: "Lead Form Conversion", value: "↑ 45%" },
  { label: "Load Time (4G)", value: "< 1.5s" },
  { label: "IA Structure", value: "Flat list → Service funnels" }
],
    detailedFeatures: [
      {
        title: "Conversion-Focused UI",
        description: "Strategically placed CTAs and sticky contact forms that adapt visibility based on user scroll behavior."
      },
      {
        title: "Service Visualization",
        description: "Interactive diagrams and icon grids that break down complex marketing strategies into digestible visual bites."
      },
      {
        title: "Technical SEO Core",
        description: "Built with Server-Side Rendering (SSR) to ensure search engine crawlers index 100% of the content immediately."
      },
      {
        title: "Responsive CMS",
        description: "Integrated a headless CMS allowing the marketing team to update case studies and blog posts without touching code."
      }
    ],
    processSteps: [
      {
    title: "Content Audit",
    description: "Restructured the entire site map to prioritize high-value services and simplify the user journey to the 'Contact' page.",
    iterationNote:
      "The original sitemap listed every service as an equal-weight page, which meant no clear starting point for a new visitor. Consolidating into 3–4 funnel paths, each ending at a tailored contact form, gave visitors a much shorter route from 'landing' to 'lead.'"
  },
      {
        title: "Component Development",
        description: "Built a reusable library of UI components (Testimonial Sliders, Pricing Cards, Hero Sections) for consistent branding."
      },
      {
        title: "Responsive Implementation",
        description: " utilized CSS Grid and Flexbox to create fluid layouts that stack elegantly on mobile devices without breaking design integrity."
      },
      {
        title: "Analytics Integration",
        description: "Setup advanced event tracking to monitor user scroll depth and button clicks for future A/B testing."
      }
    ],
    outcomes: "SellSpark.in is now a primary revenue driver for the agency. The site loads in under 1.5 seconds on 4G networks, ensuring they never lose a mobile lead due to latency.",
    image: "/images/sp.png",
    meta: {
      timeline: "5 Weeks",
      team: "2 Devs, 1 Designer",
      status: "Scaling"
    },
    gallery: [
      { caption: "Hero Funnel", url: "/images/ss1.png"  },
      { caption: "Digital Solution", url: "/images/ss2.png"  },
      { caption: "Service Grid", url: "/images/ss4.png"  },
      { caption: "Contact", url: "/images/ss3.png"  }
    ],
    font:"",
  },
  {
    id: 4,
    title: "SeaTrans Agencies",
    category: "Logistics Portal",
    role: "Full Stack Developer",
    year: "2023",
    client: "SeaTrans Agencies",
    tech: ["HTML", "Bootstrap", "JavaScript"],
    color: "border-orange-700",
    accentColor: "text-orange-700",
    secondaryColor: "bg-black-700",
    description: "A professional corporate portal for a global logistics and shipping company, designed to instill trust and provide easy access to complex logistical services.",
    challenge: "The shipping industry relies on trust and precision. The client's previous site was outdated and non-responsive, failing to communicate their global reach to international B2B partners.",
    solution: "We developed a robust, corporate-grade responsive website. Key focuses were on multilingual support capability, clear service categorization, and a professional 'Blue-Ocean' design language that screams reliability.",
    impact: "Modernized the brand image significantly, allowing the sales team to use the website as a live presentation tool during client meetings on tablets and phones.",
    features: [
      "Global Network Map",
      "Service Catalog",
      "Corporate Reliability",
      "Responsive Layout"
    ],
    myContribution:
  "Owned the frontend build and responsive implementation across the full site, working alongside a backend developer for form/tracking integration and a project lead who ran client-facing stakeholder interviews.",

problemStatement:
  "SeaTrans' previous site was outdated and non-responsive, which undercut their credibility with international B2B partners who expected a shipping company operating at their scale to have a site that matched — and made it unusable for the sales team on tablets during client meetings.",

problemEvidence:
  "Testing the old site on a tablet during a mock client walkthrough, the mega-menu didn't work at all on touch — sales reps had no way to navigate to the right service page without switching to a laptop mid-meeting.",

goal:
  "Build a responsive, corporate-grade site that projected the reliability of an established logistics operator, and that the sales team could confidently use as a live tool on any device during client meetings.",

responsibilities: [
  "Responsive Frontend Build",
  "Information Architecture",
  "Mobile Navigation System",
  "Cross-Browser Testing",
  "Design System Implementation"
],

keyDecisions: [
  {
    title: "Rebuilt the mega-menu as a mobile drawer instead of shrinking it",
    rationale:
      "The old mega-menu simply didn't function on touch devices — there was no tap-friendly way to reach deep service pages. Rebuilding it as a full mobile drawer, rather than trying to compress the same desktop structure, meant every page stayed reachable regardless of device."
  },
  {
    title: "Prioritized legacy enterprise browser support over using newer CSS features",
    rationale:
      "International B2B partners often use older, IT-locked corporate browsers. Choosing a more conservative CSS/JS approach over cutting-edge features meant the site wouldn't silently break for exactly the audience it needed to convince."
  }
],

designChallenges: [
  {
    challenge: "Making 50+ pages of dense content navigable without overwhelming visitors",
    resolution:
      "Reorganized content into a clear service hierarchy (Air, Sea, Land) with the mega-menu as the primary entry point, cutting the average clicks-to-service page significantly."
  },
  {
    challenge: "Translating trust and scale into a web interface for a B2B logistics audience",
    resolution:
      "Gave certifications, ISO standards, and partner network logos prominent, consistent placement across key pages rather than burying them on a single 'About' page."
  },
  {
    challenge: "Supporting sales reps who needed the site to work as a live pitch tool on tablets",
    resolution:
      "Tested every core navigation path on tablet specifically, not just phone and desktop, since that was the device sales actually used in meetings."
  }
],

learnings: [
  "For a B2B trust-driven industry, a broken mobile experience isn't just inconvenient — it actively undercuts the credibility the site is trying to build.",
  "Designing for the sales team's actual usage context (tablet, in a live meeting) surfaced problems that testing only on phone and desktop would have missed.",
  "Legacy browser support is still a real constraint in enterprise B2B, even when it feels outdated to design for."
],

retrospective:
  "I'd push to get the sales team involved in usability testing earlier, not just as end-recipients — they were the ones who caught the tablet mega-menu issue in practice, and that should have been part of formal testing rather than a late discovery.",

successMetrics: [
  { label: "Mobile Navigation", value: "Broken → Fully responsive" },
  { label: "Browser Support", value: "Legacy-compatible" },
  { label: "Content Structure", value: "50+ pages → Clear hierarchy" },
  { label: "Sales Tool Usage", value: "Adopted for live client meetings" }
],
    detailedFeatures: [
      {
        title: "Global Reach Visualization",
        description: "Interactive map integration showcasing shipping routes and branch offices, emphasizing the company's scale."
      },
      {
        title: "Structured Service Catalog",
        description: "A categorized information architecture that helps clients quickly find specific logistics services (Air, Sea, Land)."
      },
      {
        title: "Trust Indicators",
        description: "Prominent placement of certifications, ISO standards, and partner networks to build B2B credibility."
      },
      {
        title: "Responsive Navigation",
        description: "A complex mega-menu system transformed into an intuitive mobile drawer, ensuring deep pages are accessible on phones."
      }
    ],
    processSteps: [
      {
        title: "Stakeholder Interviews",
        description: "Interviewed logistics managers to understand the key information clients look for (e.g., tracking, schedules, certifications)."
      },
     {
    title: "Information Architecture",
    description: "Reorganized 50+ pages of content into a streamlined hierarchy, reducing the number of clicks to reach a service page.",
    iterationNote:
      "Initial navigation kept the original mega-menu structure, just restyled. Testing on tablet during a mock client walkthrough showed it didn't work at all on touch — no hover state to trigger it. Rebuilt as a mobile drawer instead of patching the existing menu."
  },
      {
        title: "Corporate Design System",
        description: "Developed a design system based on 'Deep Blue' and 'Steel Grey' tones to evoke stability and industrial strength."
      },
      {
        title: "Cross-Browser Testing",
        description: "Extensive testing on legacy enterprise browsers and modern mobile devices to ensure 100% compatibility for all clients."
      }
    ],
    outcomes: "SeaTrans Agencies now projects the image of a modern market leader. The responsive design ensures that logistics managers on the go can access critical contact info and service details instantly.",
    image: "/images/st.png",
    meta: {
      timeline: "8 Weeks",
      team: "Full Stack Team",
      status: "Enterprise Live"
    },
    gallery: [
      { caption: "Global Map", url: "/images/st1.png"  },
      { caption: "Service Mega-Menu", url: "/images/st2.png"  },
      { caption: "Tracking Portal", url: "/images/st3.png"  },
      { caption: "Mobile View", url: "/images/st4.png"  }
    ],
    font:"",
  },
 {
  id: 5,
  title: "SuDrives Partner App",
  category: "Mobile Application",
  role: "UI/UX Designer",
  year: "Aug 2023",
  client: "Sudrives Pvt. Ltd.",
  tech: ["Figma", "Prototyping", "User Research", "Wireframing"],
  color: "border-red-500",
  accentColor: "text-blue-900",
  secondaryColor: "bg-red-500",

  description:
    "The SuDrives Partner App is a comprehensive digital solution designed to transform ride management for drivers and partners in the transportation ecosystem.",

  challenge:
    "Drivers and partners needed a streamlined solution to manage rides efficiently, track earnings, and maintain operational flexibility while navigating the complexities of modern ride-hailing services.",
  solution:
    "A user-centric mobile application that integrates ride creation, history management, wallet transactions, and real-time status tracking into one cohesive, intuitive platform.",

  impact:
    "Enhanced operational efficiency, improved user satisfaction, and empowered drivers with tools to manage their work seamlessly while maintaining complete control over their availability.",

  myContribution:
    "Led UX research and design for the full driver experience — ride creation, wallet, status toggling, and history — as part of a 3-dev, design-lead team, working directly with drivers during field research.",

  problemStatement:
    "Drivers managing their own schedules needed a fast, reliable way to go online/offline, track earnings across cash and digital payments, and review past rides — but existing tools in this space were often built driver-second, optimized more for dispatch logic than for someone glancing at their phone between rides.",
  problemEvidence:
    "In field interviews, several drivers described losing track of daily earnings because cash and digital payments weren't shown together anywhere, forcing them to keep a separate mental tally or a paper note.",

  goal:
    "Give drivers a single, glanceable place to manage availability, track every rupee earned regardless of payment type, and review ride history — designed around how a driver actually uses a phone: one-handed, often at a stoplight.",

  responsibilities: [
    "User Research",
    "Field Interviews with Drivers",
    "Wireframing",
    "Interactive Prototyping",
    "Usability Testing",
    "Visual Design"
  ],

  designPrinciples: [
    "One-handed, glanceable usability",
    "Instant status control",
    "Transparent earnings at all times",
    "Minimal steps to core actions"
  ],

  keyDecisions: [
    {
      title: "Made online/offline status a single persistent toggle, not a menu action",
      rationale:
        "Drivers needed to change availability instantly, often one-handed at a stoplight. Burying it in a settings menu added friction to something that needed to be a single tap from anywhere in the app."
    },
    {
      title: "Combined all payment types into one wallet view instead of separate tabs",
      rationale:
        "Field interviews showed drivers manually tracking cash and digital earnings separately, which was error-prone. A single running balance across payment types matched how they actually thought about their day's earnings."
    }
  ],

  designChallenges: [
    {
      challenge: "Designing for one-handed use in real driving conditions",
      resolution:
        "Kept primary actions — status toggle, ride accept, wallet check — within thumb reach on a single screen, avoiding deep navigation for anything used mid-shift."
    },
    {
      challenge: "Making multi-payment-mode earnings clear at a glance",
      resolution:
        "Built a unified wallet view showing total balance up front, with cash/UPI/card breakdowns available on a secondary tap rather than competing for primary attention."
    },
    {
      challenge: "Supporting secure, fast ride creation without adding friction",
      resolution:
        "Offered both QR-code scanning and OTP as authentication paths, so drivers could use whichever was faster in their specific situation."
    }
  ],

  learnings: [
    "Designing for a driver's actual physical context (one hand, brief attention windows) mattered more than following typical mobile app conventions.",
    "Field research surfaced problems — like fragmented earnings tracking — that wouldn't have come up in a remote interview.",
    "A single combined data view (wallet) reduced cognitive load more than filtering options ever could."
  ],
  retrospective:
    "I'd build a low-fidelity clickable prototype for field testing sooner — we did a lot of our early validation through interviews and static wireframes, and getting a tappable version in drivers' hands earlier would likely have surfaced the status-toggle friction faster.",

  processSteps: [
    {
      title: "User Research & Personas",
      description:
        "Conducted comprehensive user research to understand the needs, pain points, and daily challenges faced by cab drivers. Created detailed personas to guide design decisions."
    },
    {
      title: "Wireframes & Prototyping",
      description:
        "Developed detailed wireframes to outline the app's structure and user flow. Created high-fidelity interactive prototypes demonstrating key functionalities like status toggling.",
      iterationNote:
        "An early version placed the status toggle inside a settings menu, consistent with most app conventions. Field feedback made clear this was too slow for something drivers needed to change constantly — moved it to a persistent, always-visible control."
    },
    {
      title: "Usability Testing",
      description:
        "Conducted multiple rounds of usability testing sessions with potential users to gather qualitative feedback. Iteratively refined the design to address operational pain points."
    },
    {
      title: "Visual Design",
      description:
        "Emphasized a clean, modern aesthetic with strong focus on usability and accessibility. Implemented a consistent color scheme to ensure important actions are straightforward."
    }
  ],

  features: [
    "Ride Creation",
    "Wallet Transactions",
    "Status Management",
    "Ride History"
  ],

  detailedFeatures: [
    {
      title: "Ride Creation",
      description:
        "Simplified ride creation process designed for efficiency and security, offering multiple authentication methods including QR Code scanning and OTP verification."
    },
    {
      title: "Wallet Transactions",
      description:
        "Effortless financial management with transparent transaction tracking, current balance display, and flexible payment options for withdrawals."
    },
    {
      title: "Online/Offline Status Management",
      description:
        "Real-time map integration providing drivers with complete control over their availability via an instant status toggle, enhancing location visibility."
    },
    {
      title: "Ride History Management",
      description:
        "Comprehensive ride tracking system providing detailed insights into all past trips, including pickup/drop-off locations and fare details."
    }
  ],

  successMetrics: [
    { label: "Status Toggle", value: "Menu action → 1-tap persistent control" },
    { label: "Earnings View", value: "Fragmented → Unified wallet" },
    { label: "Auth Methods", value: "QR + OTP" },
    { label: "Released Version", value: "v2.0" }
  ],

  outcomes:
    "This case study demonstrates the successful application of a comprehensive user-centered design process. By meticulously following each stage, we created a solution that effectively addresses the unique needs of drivers and partners in the ride-hailing industry, significantly improving operational efficiency.",

  image: "/images/sup.png",
  meta: {
    timeline: "3 Months",
    team: "Design Lead, 3 Devs",
    status: "Released v2.0"
  },
  gallery: [
    { caption: "Boarding", url: "/images/sd1.png" },
    { caption: "Map Navigation", url: "/images/sd2.png" },
    { caption: "Ride Request", url: "/images/sd3.png" },
    { caption: "Custom Ride", url: "/images/sd4.png" }
  ],
  font: ""
},
 {
  id: 6,
  title: "SuDrives User App",
  category: "Mobile Application",
  role: "UI/UX Designer",
  year: "Mar 2023",
  client: "Sudrives Pvt. Ltd.",
  tech: ["Figma", "User Research", "Prototyping"],
  color: "border-blue-400",
  accentColor: "text-blue-700",
  secondaryColor: "bg-red-700",

  description:
    "The SuDrives User App is a sophisticated and user-friendly platform designed to provide customers with an exceptional ride-hailing experience through advanced technology and a customer-centric approach.",

  challenge:
    "Customers needed a streamlined, reliable platform to book rides effortlessly, track their trips in real-time, and manage payments seamlessly while ensuring safety and transparency throughout the journey.",
  solution:
    "A comprehensive mobile application that integrates ride booking, real-time tracking, secure payment processing, and profile management into one intuitive, customer-focused platform.",

  impact:
    "Enhanced user satisfaction through streamlined processes, improved transparency with real-time updates, and increased convenience with flexible payment options and comprehensive trip management.",

  myContribution:
    "Led UX design across the customer-facing app — booking flow, tracking, and payments — as part of a cross-functional team, building on shared design foundations from the Partner App to keep both apps visually and behaviorally consistent.",

  problemStatement:
    "First-time riders in this market often defaulted to informal or word-of-mouth transport because app-based options felt uncertain — riders couldn't easily tell if a driver was actually coming, what the fare would really be, or how to pay without a fuss.",
  problemEvidence:
    "In early testing, several first-time users hesitated to confirm a booking until they could see the driver's live location, treating that visibility as the deciding factor for trusting the app at all.",

  goal:
    "Make the booking-to-arrival journey transparent enough that a first-time user would trust it on the first ride, with fare, driver info, and live tracking visible at every step rather than revealed piecemeal.",

  responsibilities: [
    "User Research",
    "UX Strategy",
    "Wireframing",
    "Interactive Prototyping",
    "Usability Testing",
    "Visual Design"
  ],

  designPrinciples: [
    "Transparency at every step",
    "Trust before commitment",
    "Familiar payment patterns",
    "Consistency with the Partner App"
  ],

  keyDecisions: [
    {
      title: "Surfaced live driver tracking immediately after booking confirmation",
      rationale:
        "Testing showed first-ride hesitation dropped sharply once riders could see the driver's real-time location moving toward them — visibility, not messaging, was what built trust fastest."
    },
    {
      title: "Showed the final fare estimate before requesting a ride, not after driver assignment",
      rationale:
        "Riders in testing were uncomfortable committing to a ride without knowing roughly what it would cost. Moving fare estimation earlier in the flow removed a major hesitation point before the booking step."
    }
  ],

  designChallenges: [
    {
      challenge: "Earning trust from riders with no prior app-based transport habit",
      resolution:
        "Front-loaded driver details, vehicle info, and live tracking immediately after booking, rather than only after the driver arrived."
    },
    {
      challenge: "Making real-time tracking feel reliable, not just present",
      resolution:
        "Used continuous location updates with a visible 'last updated' indicator, so riders never wondered whether the map was frozen or genuinely live."
    },
    {
      challenge: "Supporting multiple payment habits without adding steps",
      resolution:
        "Offered card, wallet, and cash as equal, front-and-center options at checkout rather than defaulting to one and burying the rest in settings."
    }
  ],

  learnings: [
    "For first-time users in a low-trust category, visible proof (live tracking) built confidence faster than reassuring copy or badges.",
    "Showing cost estimates earlier in the flow reduced booking hesitation more than any other single change.",
    "Keeping this app visually and structurally consistent with the Partner App reduced design and QA overhead significantly."
  ],
  retrospective:
    "I'd run a dedicated first-time-user cohort test post-launch, separate from general usability testing — most of our testing pool had some ride-hailing familiarity already, so we may have underestimated how much hand-holding true first-timers needed.",

  processSteps: [
    {
      title: "User Research & Personas",
      description:
        "Conducted extensive user research to deeply understand customer needs and expectations in the ride-hailing experience. Created detailed personas to inform design decisions."
    },
    {
      title: "Wireframes & Prototyping",
      description:
        "Developed comprehensive wireframes to establish the app's structure and information architecture. Created interactive prototypes to validate the booking flow.",
      iterationNote:
        "Initial flow revealed fare only after a driver was assigned, matching common category conventions. Testing showed this created hesitation at the request step — riders wanted a price before committing. Moved fare estimation earlier, before ride request."
    },
    {
      title: "Usability Testing",
      description:
        "Conducted multiple usability testing sessions with potential users to gather valuable feedback on the booking experience. Iteratively refined the design to enhance ease of use."
    },
    {
      title: "Visual Design",
      description:
        "Emphasized a clean, modern aesthetic with strong focus on usability. Implemented a consistent system to ensure essential information is easily accessible."
    }
  ],

  features: [
    "Ride Booking",
    "Real-Time Tracking",
    "Payment Integration",
    "Profile Management"
  ],

  detailedFeatures: [
    {
      title: "Ride Booking",
      description:
        "Straightforward and efficient ride booking process ensuring users can quickly arrange transportation. Includes location-based requests and detailed driver information."
    },
    {
      title: "Real-Time Tracking",
      description:
        "Comprehensive real-time tracking from driver assignment to destination arrival, providing live location updates and continuous visibility for peace of mind."
    },
    {
      title: "Payment Integration",
      description:
        "Simplified payment processing with transparent fare calculations, multiple payment methods (cards, wallets, cash), and automatic receipt generation."
    },
    {
      title: "User Profile Management",
      description:
        "Comprehensive profile management system allowing users to maintain their information, update personal details, and access complete ride history."
    }
  ],

  successMetrics: [
    { label: "Fare Visibility", value: "Post-assignment → Pre-booking" },
    { label: "Tracking", value: "Live, continuously updated" },
    { label: "Payment Options", value: "Card, Wallet, Cash" },
    { label: "Design Consistency", value: "Shared system with Partner App" }
  ],

  outcomes:
    "The SuDrives User App stands as a testament to the power of user-centered design. This project highlights the importance of a thorough design process in developing solutions that are both highly functional and visually compelling, ultimately delivering an exceptional ride-hailing experience.",

  image: "/images/sduser.png",
  meta: {
    timeline: "4 Months",
    team: "Cross-functional",
    status: "Live"
  },
  gallery: [
    { caption: "Menu & Ride History", url: "/images/sdu1.png" },
    { caption: "OnBoarding", url: "/images/sdu2.png" },
    { caption: "Ride History", url: "/images/sdu3.png" },
    { caption: "Support", url: "/images/sdu4.png" }
  ],
  font: ""
},
 {
  id: 7,
  title: "Optimus Procurement",
  category: "B2B SaaS Dashboard",
  role: "Lead Product Designer",
  year: "2024",
  client: "Optimus Tech",
  tech: ["Figma", "User Research", "Prototyping"],
  color: "border-indigo-500",
  accentColor: "text-indigo-500",
  secondaryColor: "bg-slate-400",

  description:
    "An enterprise-grade procurement dashboard designed to centralize vendor management, RFQ lifecycles, and financial tracking in a unified interface.",

  challenge:
    "Procurement teams faced inefficiencies tracking vendor compliance, RFQ deadlines, and payment dues across disparate systems, leading to delayed orders.",
  solution:
    "We engineered a modular dashboard featuring real-time vendor status cards, an interactive RFQ tracking table, and immediate financial visibility for due balances.",

  impact:
    "Reduced procurement cycle time by 30% and improved vendor compliance tracking accuracy by 95% through centralized data visualization.",

  myContribution:
    "Led product design as the sole designer on a team of 4 engineers — owned workflow research, information architecture, and the full dashboard design system, working directly with procurement managers to validate the RFQ and vendor flows.",

  problemStatement:
    "Procurement managers were tracking vendor compliance, RFQ deadlines, and payment dues across separate spreadsheets and disconnected tools, which meant nothing updated in real time and orders regularly slipped because a deadline or a vendor issue went unnoticed until it was already late.",
  problemEvidence:
    "In workflow interviews, procurement managers described checking three to four different spreadsheets each morning just to reconstruct which vendors were compliant and which RFQs were at risk — with no single view showing all of it at once.",

  goal:
    "Give procurement managers one dashboard that surfaces vendor compliance, RFQ status, and financial dues together, so risk is visible before a deadline slips rather than discovered after.",

  responsibilities: [
    "Workflow Analysis",
    "Information Architecture",
    "Dashboard Prototyping",
    "Design System",
    "Stakeholder Validation"
  ],

  designPrinciples: [
    "Status visible at a glance",
    "Traffic-light clarity over raw data dumps",
    "One source of truth, not five",
    "Action-first, not report-first"
  ],

  keyDecisions: [
    {
      title: "Used traffic-light status colors instead of numeric compliance scores",
      rationale:
        "Early prototypes showed compliance as a percentage score, which required managers to interpret a number before acting. Switching to a green/orange/red system let them scan the whole vendor list and immediately spot what needed attention, without doing math in their head."
    },
    {
      title: "Put financial dues on the main dashboard instead of a separate finance tab",
      rationale:
        "Interviews showed procurement managers were the ones fielding vendor payment questions day-to-day, even though finance owned the actual ledger. Surfacing dues on their primary view meant they didn't have to context-switch to answer a question they got asked constantly."
    }
  ],

  designChallenges: [
    {
      challenge: "Consolidating data from multiple disconnected systems into one coherent view",
      resolution:
        "Structured the dashboard around three core entities — Vendor, RFQ, Financial — instead of mirroring the source systems' structure, so the interface matched how managers actually thought about their day, not how the backend was organized."
    },
    {
      challenge: "Preventing cognitive overload from dense procurement data",
      resolution:
        "Used status cards and traffic-light indicators as the default view, pushing detailed tables one level deeper for when a manager needed to dig into specifics."
    },
    {
      challenge: "Designing for both quick daily checks and deep RFQ review in one interface",
      resolution:
        "Built the dashboard as a summary layer with drill-down navigation into the RFQ tracking table, so the same interface served both a 30-second morning glance and a focused review session."
    }
  ],

  learnings: [
    "For dense operational data, color-coded status beat numeric scores every time in comprehension speed during testing.",
    "Structuring an interface around users' mental model of their workflow mattered more than mirroring how the backend data was actually organized.",
    "Placing cross-functional information (like finance dues) where the primary user actually needed it reduced their daily context-switching significantly."
  ],
  retrospective:
    "I'd involve the finance team in testing earlier, not just procurement — dues data lived on the procurement dashboard by design, but finance had opinions about formatting and terminology that surfaced late and required rework.",

  processSteps: [
    {
      title: "Workflow Analysis",
      description:
        "Mapped the end-to-end procurement journey to identify bottlenecks in vendor onboarding and payment processing."
    },
    {
      title: "Information Architecture",
      description:
        "Structured complex data sets into a hierarchy of 'Dashboard', 'Vendor', and 'RFQ' views to prevent cognitive overload.",
      iterationNote:
        "An early version displayed vendor compliance as a numeric percentage score. Testing showed managers still had to stop and interpret each number before deciding what needed action. Switched to a traffic-light system, which cut scan time noticeably in follow-up sessions."
    },
    {
      title: "Dashboard Prototyping",
      description:
        "Created interactive prototypes testing the clarity of status indicators and the efficiency of the RFQ approval flow."
    },
    {
      title: "Design System",
      description:
        "Established a clean, professional UI kit using indigo as a primary trust color, with clear 'traffic light' status colors (Green/Orange/Blue)."
    }
  ],

  features: [
    "Vendor Management",
    "RFQ Tracking",
    "Financial Analytics",
    "Notification Center"
  ],

  detailedFeatures: [
    {
      title: "Vendor Status Cards",
      description:
        "At-a-glance cards showing vendor approval status (Approved, Pending), balance dues, and creation alerts to prioritize actions."
    },
    {
      title: "RFQ Tracking Table",
      description:
        "Comprehensive data table managing Request for Quotations with real-time status indicators (Accepted, Pending, Review) and deadline countdowns."
    },
    {
      title: "Financial Overview",
      description:
        "Dashboard widgets summarizing total vendor dues for the month and providing month-over-month trend analysis (e.g., 8.5% down)."
    },
    {
      title: "Unified Action Center",
      description:
        "Integrated sidebar for quick access to notifications, purchase orders, and quotation management without leaving the main dashboard."
    }
  ],

  successMetrics: [
    { label: "Procurement Cycle Time", value: "↓ 30%" },
    { label: "Vendor Compliance Accuracy", value: "↑ 95%" },
    { label: "Status Model", value: "Numeric score → Traffic-light" },
    { label: "Data Sources Unified", value: "3–4 spreadsheets → 1 dashboard" }
  ],

  outcomes:
    "Optimus has transformed the client's procurement operations. The dashboard provides a single source of truth, allowing managers to approve vendors and track thousands in dues with confidence.",

  image: "/images/opti.png",
  meta: {
    timeline: "12 Weeks",
    team: "Lead Designer, 4 Devs",
    status: "Enterprise Beta"
  },
  gallery: [
    { caption: "RFQ Dashboard", url: "/images/opti1.png" },
    { caption: "Live Auctions", url: "/images/opti2.png" },
    { caption: "Main Dashboard", url: "/images/opti3.png" },
    { caption: "Create Bid", url: "/images/opti4.png" }
  ],
  font: ""
},
 {
  id: 8,
  title: "PickTailor App",
  category: "Tailor Mobile App",
  role: "UX Engineer",
  year: "2023",
  client: "PickTailor Inc.",
  tech: ["Figma", "User Research", "Prototyping"],
  color: "border-black-500",
  accentColor: "text-black-500",
  secondaryColor: "bg-red-700",

  description:
    "A simplified cash flow management solution enabling retailers to track daily transactions, payment modes, and net balances on the go.",

  challenge:
    "Small business owners struggled to reconcile daily accounts across various payment methods (Cash, UPI, Card, OD) without complex accounting software.",
  solution:
    "A mobile-first 'Cash Counter' module providing visual breakdowns of daily income vs expenses, with intuitive date filtering and net balance calculation.",

  impact:
    "Empowered 500+ retailers to digitize their daily ledgers, saving an average of 1 hour per day on manual account reconciliation.",

  myContribution:
    "Led UX design and worked closely with the backend developer to define the data model for transactions — conducted the field research, designed the flows, and validated them directly with shop owners.",

  problemStatement:
    "Small retailers were reconciling cash, UPI, card, and overdraft transactions by hand in physical ledgers or basic notebooks, because full accounting software felt too complex and too slow for a daily habit — which meant errors crept in and closing out each day took far longer than it should have.",
  problemEvidence:
    "During shop visits, several owners were seen manually adding up entries across a paper ledger and a UPI app side by side at closing time, with no single place showing the full day's picture.",

  goal:
    "Replace the paper-ledger habit with a mobile tool fast enough to use standing at the counter, showing every payment mode in one place without requiring any accounting knowledge.",

  responsibilities: [
    "Field Research",
    "UX Strategy",
    "Wireframing",
    "Visual Data Design",
    "Usability Testing"
  ],

  designPrinciples: [
    "Speed over completeness",
    "One glance, full picture",
    "No accounting jargon",
    "Thumb-friendly for standing use"
  ],

  keyDecisions: [
    {
      title: "Deliberately scoped out full ERP-style features to focus only on 'Cash Counter'",
      rationale:
        "Early concepts explored inventory and invoicing alongside daily reconciliation, but field visits showed the daily cash tally was the actual daily pain point. Narrowing scope kept the tool fast enough to use standing at a counter, rather than becoming another system owners would abandon."
    },
    {
      title: "Used a donut chart for payment-mode breakdown instead of a table",
      rationale:
        "Testing showed owners wanted to instantly see the proportion of cash vs. digital income, not read exact figures line by line — a visual breakdown answered 'how am I doing today' faster than a table would have."
    }
  ],

  designChallenges: [
    {
      challenge: "Reconciling multiple payment modes without accounting software complexity",
      resolution:
        "Built a single 'Cash Counter' view auto-calculating net balance across cash, UPI, card, and overdraft, instead of requiring manual entry into separate ledgers per mode."
    },
    {
      challenge: "Designing for users with varying comfort with financial terminology",
      resolution:
        "Replaced accounting terms with plain language (e.g. 'What you earned' instead of 'Gross revenue') after testing showed confusion around standard financial vocabulary."
    },
    {
      challenge: "Making the app fast enough for standing, in-shop use",
      resolution:
        "Kept core entry and daily summary to a single screen with large, thumb-friendly tap targets, avoiding multi-step forms for routine daily entries."
    }
  ],

  learnings: [
    "Field visits surfaced the real workflow (a physical ledger plus a separate UPI app) far better than a remote interview would have.",
    "Deliberately cutting scope — resisting the urge to add inventory or invoicing — was what made the tool actually get used daily.",
    "Plain language mattered more than feature depth for non-technical small business owners."
  ],
  retrospective:
    "I'd formalize a lightweight way to keep collecting shop-owner feedback post-launch — most of our validation happened pre-launch, and we didn't have a structured channel for owners to flag confusion once they were using it independently.",

  processSteps: [
    {
      title: "Field Research",
      description:
        "Visited retail shops to observe how owners manually recorded cash and digital payments in physical ledgers."
    },
    {
      title: "Simplification Strategy",
      description:
        "Decided to focus solely on the 'Cash Counter' use case, stripping away complex ERP features to maximize speed and usability.",
      iterationNote:
        "Early concepts included inventory tracking and basic invoicing alongside daily reconciliation. Field feedback made clear owners wanted speed above all else for their daily habit — scope was cut back to just the Cash Counter to keep the tool fast enough to actually stick."
    },
    {
      title: "Visual Data Design",
      description:
        "Designed color-coded cards and charts to help non-technical users instantly understand their financial position."
    },
    {
      title: "Iterative Testing",
      description:
        "Tested the mobile interface with shop owners to ensure buttons were thumb-friendly and financial terms were clearly understood."
    }
  ],

  features: [
    "Multi-mode Tracking",
    "Visual Analytics",
    "Date Filtering",
    "Net Balance Calc"
  ],

  detailedFeatures: [
    {
      title: "Payment Mode Breakdown",
      description:
        "Distinct cards tracking totals for Cash, UPI, Card, and Overdraft accounts, giving instant visibility into liquidity."
    },
    {
      title: "Financial Summary",
      description:
        "Auto-calculated summary of Bill Amounts, Advances, Delivery costs, Expenses, and Discounts to derive the true Net Balance."
    },
    {
      title: "Visual Analytics",
      description:
        "Donut chart visualization clearly segmenting 'Order Value' by payment type (Cash, UPI, Card, OD Acc) for rapid analysis."
    },
    {
      title: "Smart Date Filtering",
      description:
        "One-tap switching between Today, Week, Month, and Custom Date Ranges to analyze performance trends over time."
    }
  ],

  successMetrics: [
    { label: "Retailers Onboarded", value: "500+" },
    { label: "Daily Time Saved", value: "~1 hour" },
    { label: "Scope", value: "Full ERP → Cash Counter only" },
    { label: "Terminology", value: "Accounting jargon → Plain language" }
  ],

  outcomes:
    "PickTailor has become an essential daily tool for its users. The clear visual breakdown of finances helps owners make informed decisions about cash deposits and expense management.",

  image: "/images/Pickta.png",
  meta: {
    timeline: "8 Weeks",
    team: "UX Eng, Backend Dev",
    status: "Market Ready"
  },
  gallery: [
    { caption: "Custom Design", url: "/images/Pickta1.png" },
    { caption: "Bill Amount Details", url: "/images/Pickta2.png" },
    { caption: "Employee Expenses", url: "/images/Pickta3.png" },
    { caption: "Cash Counter", url: "/images/Pickta4.png" }
  ],
  font: ""
}
];
