

export interface ProcessStep {
  title: string;
  description: string;
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
  secondaryColor?: string; // New field for design system (Tailwind bg class)
  description: string;
  challenge: string;
  solution: string;
  impact?: string; 
  processSteps?: ProcessStep[]; 
  features: string[]; 
  detailedFeatures?: FeatureDetail[]; 
  outcomes?: string; 
  image?: string;
  meta?: ProjectMeta; // New field for sidebar stats
  gallery?: GalleryItem[]; // New field for interface gallery;
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
    tech: ["Figma", , "User Research", "Prototyping"],
    color: "border-emerald-500",
    accentColor: "text-emerald-500",
    secondaryColor: "bg-emerald-200",
    description: "The Sahyog App is a comprehensive healthcare platform designed to connect users with essential medical services, offering an intuitive interface for booking diagnostics, pathology tests, and doctor appointments.",
    challenge: "Users needed a streamlined, accessible platform to book diagnostic tests, pathology services, and doctor appointments while ensuring security, transparency, and ease of use in healthcare service delivery.",
    solution: "A user-centric healthcare application integrating secure authentication, comprehensive service selection, and streamlined booking processes for diagnostics, pathology, and medical consultations.",
    impact: "Simplified healthcare access with efficient booking processes, enhanced user confidence through transparent pricing and secure authentication, and improved convenience in managing health services.",
    features: [
      "Secure Authentication",
      "Doctor Appointments",
      "Pathology Booking",
      "Lab Selection"
    ],
    detailedFeatures: [
      {
        title: "Login and Registration",
        description: "Secure and straightforward authentication process ensuring user data privacy. Includes Phone Number Verification via OTP and password protection."
      },
      {
        title: "Service Selection",
        description: "Easy navigation through various healthcare services offered by the app, providing users with comprehensive medical service options at their fingertips."
      },
      {
        title: "Diagnostics Booking",
        description: "Comprehensive diagnostics section providing detailed information on available tests with transparent pricing, lab selection, and instant confirmation."
      },
      {
        title: "Doctor Appointments",
        description: "Convenient booking system for scheduling appointments with qualified doctors through the app interface."
      }
    ],
    processSteps: [
      {
        title: "User Research & Personas",
        description: "Conducted extensive user research to understand pain points. Developed detailed personas to guide the design process and ensure the solution addresses real-world healthcare challenges."
      },
      {
        title: "Wireframes & Prototyping",
        description: "Created comprehensive wireframes to map information architecture. Developed high-fidelity prototypes to illustrate diagnostics booking and service selection flows."
      },
      {
        title: "Usability Testing",
        description: "Performed extensive testing with diverse demographics. Iteratively refined the design to improve accessibility, ease of use, and trust factors."
      },
      {
        title: "Visual Design",
        description: "Focused on a clean, modern aesthetic that instills trust. Implemented a consistent color scheme emphasizing wellness with readable typography."
      }
    ],
    outcomes: "The Sahyog App exemplifies the importance of user-centered design. We created an app that effectively addresses healthcare needs through iterative enhancements, resulting in a visually appealing interface that builds trust and streamlines access to essential medical services.",
    image: "/images/shayoag.png",
    meta: {
      timeline: "6 Weeks",
      team: "2 Designers, 1 PM",
      status: "Live in Production"
    },
    gallery: [
      { caption: "Login & Verification", url: "/images/sh3.png"  },
      { caption: "Dashboard & Services" , url: "/images/sh2.png" },
      { caption: "Profile Test Listing", url: "/images/sh4.png"  },
      { caption: "Booking Section", url: "/images/sh1.png"  }
    ],
    font:"",
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
        description: "Selected a tech stack (Vite + React) focused on minimal bundle size. Optimized assets using next-gen formats (WebM/AVIF)."
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
        description: "Restructured the entire site map to prioritize high-value services and simplify the user journey to the 'Contact' page."
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
    color: "border-blue-700",
    accentColor: "text-blue-700",
    secondaryColor: "bg-slate-700",
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
        description: "Reorganized 50+ pages of content into a streamlined hierarchy, reducing the number of clicks to reach a service page."
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
      { caption: "Global Map" },
      { caption: "Service Mega-Menu" },
      { caption: "Tracking Portal" },
      { caption: "Mobile View" }
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
    color: "border-orange-500",
    accentColor: "text-orange-500",
    secondaryColor: "bg-orange-200",
    description: "The SuDrives Partner App is a comprehensive digital solution designed to transform ride management for drivers and partners in the transportation ecosystem.",
    challenge: "Drivers and partners needed a streamlined solution to manage rides efficiently, track earnings, and maintain operational flexibility while navigating the complexities of modern ride-hailing services.",
    solution: "A user-centric mobile application that integrates ride creation, history management, wallet transactions, and real-time status tracking into one cohesive, intuitive platform.",
    impact: "Enhanced operational efficiency, improved user satisfaction, and empowered drivers with tools to manage their work seamlessly while maintaining complete control over their availability.",
    features: [
      "Ride Creation", 
      "Wallet Transactions", 
      "Status Management", 
      "Ride History"
    ],
    detailedFeatures: [
      {
        title: "Ride Creation",
        description: "Simplified ride creation process designed for efficiency and security, offering multiple authentication methods including QR Code scanning and OTP verification."
      },
      {
        title: "Wallet Transactions",
        description: "Effortless financial management with transparent transaction tracking, current balance display, and flexible payment options for withdrawals."
      },
      {
        title: "Online/Offline Status Management",
        description: "Real-time map integration providing drivers with complete control over their availability via an instant status toggle, enhancing location visibility."
      },
      {
        title: "Ride History Management",
        description: "Comprehensive ride tracking system providing detailed insights into all past trips, including pickup/drop-off locations and fare details."
      }
    ],
    processSteps: [
      {
        title: "User Research & Personas",
        description: "Conducted comprehensive user research to understand the needs, pain points, and daily challenges faced by cab drivers. Created detailed personas to guide design decisions."
      },
      {
        title: "Wireframes & Prototyping",
        description: "Developed detailed wireframes to outline the app's structure and user flow. Created high-fidelity interactive prototypes demonstrating key functionalities like status toggling."
      },
      {
        title: "Usability Testing",
        description: "Conducted multiple rounds of usability testing sessions with potential users to gather qualitative feedback. Iteratively refined the design to address operational pain points."
      },
      {
        title: "Visual Design",
        description: "Emphasized a clean, modern aesthetic with strong focus on usability and accessibility. Implemented a consistent color scheme to ensure important actions are straightforward."
      }
    ],
    outcomes: "This case study demonstrates the successful application of a comprehensive user-centered design process. By meticulously following each stage, we created a solution that effectively addresses the unique needs of drivers and partners in the ride-hailing industry, significantly improving operational efficiency.",
    image: "/images/sup.png",
    meta: {
      timeline: "3 Months",
      team: "Design Lead, 3 Devs",
      status: "Released v2.0"
    },
    gallery: [
      { caption: "Driver Dashboard" },
      { caption: "Earning Wallet" },
      { caption: "Ride Request" },
      { caption: "Map Navigation" }
    ],
    font:"",
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
    accentColor: "text-blue-400",
    secondaryColor: "bg-blue-100",
    description: "The SuDrives User App is a sophisticated and user-friendly platform designed to provide customers with an exceptional ride-hailing experience through advanced technology and a customer-centric approach.",
    challenge: "Customers needed a streamlined, reliable platform to book rides effortlessly, track their trips in real-time, and manage payments seamlessly while ensuring safety and transparency throughout the journey.",
    solution: "A comprehensive mobile application that integrates ride booking, real-time tracking, secure payment processing, and profile management into one intuitive, customer-focused platform.",
    impact: "Enhanced user satisfaction through streamlined processes, improved transparency with real-time updates, and increased convenience with flexible payment options and comprehensive trip management.",
    features: [
      "Ride Booking", 
      "Real-Time Tracking", 
      "Payment Integration", 
      "Profile Management"
    ],
    detailedFeatures: [
      {
        title: "Ride Booking",
        description: "Straightforward and efficient ride booking process ensuring users can quickly arrange transportation. Includes location-based requests and detailed driver information."
      },
      {
        title: "Real-Time Tracking",
        description: "Comprehensive real-time tracking from driver assignment to destination arrival, providing live location updates and continuous visibility for peace of mind."
      },
      {
        title: "Payment Integration",
        description: "Simplified payment processing with transparent fare calculations, multiple payment methods (cards, wallets, cash), and automatic receipt generation."
      },
      {
        title: "User Profile Management",
        description: "Comprehensive profile management system allowing users to maintain their information, update personal details, and access complete ride history."
      }
    ],
    processSteps: [
      {
        title: "User Research & Personas",
        description: "Conducted extensive user research to deeply understand customer needs and expectations in the ride-hailing experience. Created detailed personas to inform design decisions."
      },
      {
        title: "Wireframes & Prototyping",
        description: "Developed comprehensive wireframes to establish the app's structure and information architecture. Created interactive prototypes to validate the booking flow."
      },
      {
        title: "Usability Testing",
        description: "Conducted multiple usability testing sessions with potential users to gather valuable feedback on the booking experience. Iteratively refined the design to enhance ease of use."
      },
      {
        title: "Visual Design",
        description: "Emphasized a clean, modern aesthetic with strong focus on usability. Implemented a consistent system to ensure essential information is easily accessible."
      }
    ],
    outcomes: "The SuDrives User App stands as a testament to the power of user-centered design. This project highlights the importance of a thorough design process in developing solutions that are both highly functional and visually compelling, ultimately delivering an exceptional ride-hailing experience.",
    image: "/images/sduser.png",
    meta: {
      timeline: "4 Months",
      team: "Cross-functional",
      status: "Live"
    },
    gallery: [
      { caption: "Home & Booking" },
      { caption: "Live Tracking" },
      { caption: "Payment Gate" },
      { caption: "Ride History" }
    ],
    font:"",
  },
  {
    id: 7,
    title: "Optimus Procurement",
    category: "B2B SaaS Dashboard",
    role: "Lead Product Designer",
    year: "2024",
    client: "Optimus Tech",
    tech: ["Figma","User Research","Protoyping"],
    color: "border-indigo-500",
    accentColor: "text-indigo-500",
    secondaryColor: "bg-slate-700",
    description: "An enterprise-grade procurement dashboard designed to centralize vendor management, RFQ lifecycles, and financial tracking in a unified interface.",
    challenge: "Procurement teams faced inefficiencies tracking vendor compliance, RFQ deadlines, and payment dues across disparate systems, leading to delayed orders.",
    solution: "We engineered a modular dashboard featuring real-time vendor status cards, an interactive RFQ tracking table, and immediate financial visibility for due balances.",
    impact: "Reduced procurement cycle time by 30% and improved vendor compliance tracking accuracy by 95% through centralized data visualization.",
    features: [
      "Vendor Management",
      "RFQ Tracking",
      "Financial Analytics",
      "Notification Center"
    ],
    detailedFeatures: [
      {
        title: "Vendor Status Cards",
        description: "At-a-glance cards showing vendor approval status (Approved, Pending), balance dues, and creation alerts to prioritize actions."
      },
      {
        title: "RFQ Tracking Table",
        description: "Comprehensive data table managing Request for Quotations with real-time status indicators (Accepted, Pending, Review) and deadline countdowns."
      },
      {
        title: "Financial Overview",
        description: "Dashboard widgets summarizing total vendor dues for the month and providing month-over-month trend analysis (e.g., 8.5% down)."
      },
      {
        title: "Unified Action Center",
        description: "Integrated sidebar for quick access to notifications, purchase orders, and quotation management without leaving the main dashboard."
      }
    ],
    processSteps: [
      {
        title: "Workflow Analysis",
        description: "Mapped the end-to-end procurement journey to identify bottlenecks in vendor onboarding and payment processing."
      },
      {
        title: "Information Architecture",
        description: "Structured complex data sets into a hierarchy of 'Dashboard', 'Vendor', and 'RFQ' views to prevent cognitive overload."
      },
      {
        title: "Dashboard Prototyping",
        description: "Created interactive prototypes testing the clarity of status indicators and the efficiency of the RFQ approval flow."
      },
      {
        title: "Design System",
        description: "Established a clean, professional UI kit using indigo as a primary trust color, with clear 'traffic light' status colors (Green/Orange/Blue)."
      }
    ],
    outcomes: "Optimus has transformed the client's procurement operations. The dashboard provides a single source of truth, allowing managers to approve vendors and track thousands in dues with confidence.",
    image: "/images/opti.png",
    meta: {
      timeline: "12 Weeks",
      team: "Lead Designer, 4 Devs",
      status: "Enterprise Beta"
    },
    gallery: [
      { caption: "Main Dashboard" },
      { caption: "Vendor Table" },
      { caption: "RFQ Details" },
      { caption: "Analytics View" }
    ],
    font:"",
  },
  {
    id: 8,
    title: "PickTailor App",
    category: "Tailor Mobile App",
    role: "UX Engineer",
    year: "2023",
    client: "PickTailor Inc.",
    tech: ["Figma","User Research", "Prototyping"],
    color: "border-rose-500",
    accentColor: "text-rose-500",
    secondaryColor: "bg-orange-300",
    description: "A simplified cash flow management solution enabling retailers to track daily transactions, payment modes, and net balances on the go.",
    challenge: "Small business owners struggled to reconcile daily accounts across various payment methods (Cash, UPI, Card, OD) without complex accounting software.",
    solution: "A mobile-first 'Cash Counter' module providing visual breakdowns of daily income vs expenses, with intuitive date filtering and net balance calculation.",
    impact: "Empowered 500+ retailers to digitize their daily ledgers, saving an average of 1 hour per day on manual account reconciliation.",
    features: [
      "Multi-mode Tracking",
      "Visual Analytics",
      "Date Filtering",
      "Net Balance Calc"
    ],
    detailedFeatures: [
      {
        title: "Payment Mode Breakdown",
        description: "Distinct cards tracking totals for Cash, UPI, Card, and Overdraft accounts, giving instant visibility into liquidity."
      },
      {
        title: "Financial Summary",
        description: "Auto-calculated summary of Bill Amounts, Advances, Delivery costs, Expenses, and Discounts to derive the true Net Balance."
      },
      {
        title: "Visual Analytics",
        description: "Donut chart visualization clearly segmenting 'Order Value' by payment type (Cash, UPI, Card, OD Acc) for rapid analysis."
      },
      {
        title: "Smart Date Filtering",
        description: "One-tap switching between Today, Week, Month, and Custom Date Ranges to analyze performance trends over time."
      }
    ],
    processSteps: [
      {
        title: "Field Research",
        description: "Visited retail shops to observe how owners manually recorded cash and digital payments in physical ledgers."
      },
      {
        title: "Simplification Strategy",
        description: "Decided to focus solely on the 'Cash Counter' use case, stripping away complex ERP features to maximize speed and usability."
      },
      {
        title: "Visual Data Design",
        description: "Designed color-coded cards and charts to help non-technical users instantly understand their financial position."
      },
      {
        title: "Iterative Testing",
        description: "Tested the mobile interface with shop owners to ensure buttons were thumb-friendly and financial terms were clearly understood."
      }
    ],
    outcomes: "PickTailor has become an essential daily tool for its users. The clear visual breakdown of finances helps owners make informed decisions about cash deposits and expense management.",
    image: "/images/Pickta.png",
    meta: {
      timeline: "8 Weeks",
      team: "UX Eng, Backend Dev",
      status: "Market Ready"
    },
    gallery: [
      { caption: "Cash Counter" },
      { caption: "Payment Modes" },
      { caption: "Analytics Chart" },
      { caption: "Date Filter" }
    ],
    font:"",
  }
];
