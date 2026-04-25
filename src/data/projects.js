// src/data/projects.js
export const projects = [
  {
    id: 1,
    emoji: "⚡",
    title: "Energy Consumption Prediction Dashboard",
    summary:
      "Intelligent dashboard predicting household and commercial energy usage using smart meter and IoT sensor data. Combines ML models with an interactive frontend to deliver actionable energy insights.",
    problem:
      "Energy managers lacked real-time visibility into consumption patterns, making it impossible to identify waste or optimise appliance schedules proactively.",
    impact: "87% ML prediction accuracy · 40% less manual reporting time · 3+ use cases identified",
    stack: ["React.js", "Python", "Scikit-learn", "Random Forest", "IoT", "Data Viz"],
    github: "https://github.com/NAVEENKUMAR11751",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    emoji: "📚",
    title: "Knowledge Dabba – Smart Study Management",
    summary:
      "Full-featured study management platform with modules for Knowledge Manager, Sticky Notes, Timetable Planner, Revision Tracker, and Reports Dashboard. Google Drive API integration for secure cloud sync and spaced-repetition-based revision tracking.",
    problem:
      "Students lacked a unified tool to manage notes, schedules, and revision intelligently — juggling multiple apps caused lost context and inconsistent study habits.",
    impact: "Spaced repetition + confidence scoring · Google Drive cloud sync · Fully responsive · Live on Vercel",
    stack: ["React.js", "JavaScript", "Google Drive API", "Vercel", "GitHub"],
    github: "https://github.com/NAVEENKUMAR11751/knowledge-dabba",
    demo: "https://knowledge-dabba.vercel.app",
    featured: true,
  },
  {
    id: 3,
    emoji: "🏗️",
    title: "BL Engineering Works",
    summary:
      "Fully responsive, modular company website built for BL Engineering Works showcasing their services, portfolio, and contact information. Designed for professionalism and mobile-first performance.",
    problem:
      "Client needed a professional digital presence to compete credibly online — their business was invisible to potential customers searching for engineering services.",
    impact: "100% mobile responsive · Context API state management · Live on GitHub Pages",
    stack: ["React.js", "Context API", "React Hooks", "Bootstrap", "CSS3", "GitHub Pages"],
    github: "https://github.com/NAVEENKUMAR11751/BL-Engineering",
    demo: "https://naveenkumar11751.github.io/BL-Engineering",
    featured: true,
  },
  {
    id: 4,
    emoji: "💼",
    title: "Vishwa Software Solutions",
    summary:
      "Professional corporate website for Vishwa Software Solutions, presenting the company's services, team, and expertise with a clean, conversion-focused design.",
    problem:
      "Software companies often struggle with websites that fail to communicate trust — this project solved that with a structured, professional site.",
    impact: "Production-ready · Professional UI matching industry standards · Live deployment",
    stack: ["React.js", "JavaScript", "CSS3", "Bootstrap", "GitHub Pages"],
    github: "https://github.com/NAVEENKUMAR11751/Vishwa-Software-Solutions",
    demo: "https://naveenkumar11751.github.io/Vishwa-Software-Solutions",
    featured: false,
  },
  {
    id: 5,
    emoji: "🧮",
    title: "Interest Calculator Web App",
    summary:
      "Real-time simple & compound interest calculator — built twice (Vanilla JS then React) to demonstrate skill progression. Zero page reloads, mobile-optimised.",
    problem:
      "Users needed a fast, mobile-friendly financial calculator without relying on spreadsheet software.",
    impact: "Dual implementation (Vanilla JS + React) · Real-time calculations · Mobile optimised",
    stack: ["React.js", "HTML5", "CSS3", "Vanilla JavaScript"],
    github: "https://github.com/NAVEENKUMAR11751/react-interestcalculator",
    demo: null,
    featured: false,
  },
];
