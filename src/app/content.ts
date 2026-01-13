import type { SiteContent } from "./types";

export const site: SiteContent = {
  meta: {
    title: "Gemstruct — Kurt Montanaro",
    description:
      "Gemstruct is the personal studio of Kurt Montanaro, focused on frontend engineering, clean UX, and practical software.",
  },
  brand: {
    name: "Gemstruct",
    taglineRotating: [
      "Shipping practical web products",
      "Clean UI, maintainable systems",
      "From idea to production",
      "Focused on clarity and performance",
    ],
  },
  person: {
    name: "Kurt Montanaro",
    headline: "Software Developer • Frontend & Full Stack • TypeScript/Node.js",
    location: {
      name: "Malta",
      continent: "EU",
      timezone: "CEST"
    },
    summary:
      "Full Stack Developer, flexible across NodeJS and .NET frameworks, with experience in PHP, web design, HTML, and CSS (including preprocessors).",
    email: "montakurt@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/elmonti" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kurt-montanaro-9715b097/" },
      { label: "CV (PDF)", href: "/Kurt-Montanaro-CV.pdf" },
    ],
  },

    workFeatured: [
    {
      company: "Play'n GO",
      role: "Senior Frontend Developer",
      location: "Sliema, Malta",
      start: "Nov 2023",
      end: "Present",
      highlights: [
        "Senior frontend role focused on shipping production-ready user interfaces.",
        "Collaborated closely with product and engineering to deliver features reliably.",
        "Drove maintainability through reusable patterns and clean, well-structured code.",
      ],
      links: [{ label: "Company", href: "https://www.playngo.com/" }],
    },
    {
      company: "Rootz LTD",
      role: "Senior Frontend Developer",
      location: "Gzira, Malta",
      start: "May 2023",
      end: "Nov 2023",
      highlights: [
        "Delivered frontend features with a focus on UX and consistency.",
        "Worked cross-functionally to ship improvements on a tight cadence.",
        "Contributed to maintainable UI patterns and component reuse.",
      ],
    },
    {
      company: "Play'n GO",
      role: "Frontend Developer",
      location: "Malta",
      start: "Jul 2019",
      end: "May 2023",
      highlights: [
        "Built and maintained frontend features in a production environment.",
        "Worked with stakeholders to deliver iterative improvements.",
        "Helped keep UI codebases maintainable and reliable over time.",
      ],
    },
    {
      company: "Kurt Montanaro",
      role: "Freelance Web Developer",
      location: "Santa Venera, Malta",
      start: "Oct 2015",
      end: "Present",
      highlights: [
        "Freelance web development for clients and personal projects.",
        "Build practical, maintainable solutions end-to-end.",
        "Comfortable working across frontend, backend, and deployment.",
      ],
    },
  ],

  workEarlier: [
    {
      company: "Kwiff",
      role: "Full Stack Developer",
      location: "London, United Kingdom",
      start: "Oct 2018",
      end: "Jul 2019",
      highlights: [
        "Full stack delivery across frontend and backend responsibilities.",
        "Built features end-to-end and supported releases.",
        "Worked in a delivery-focused team environment.",
      ],
    },
    {
      company: "Yobetit",
      role: "Full Stack Developer",
      location: "Zebbug, Malta",
      start: "Mar 2018",
      end: "Oct 2018",
      highlights: [
        "Developed full stack features and supported product changes.",
        "Worked across UI and backend where needed.",
        "Contributed to stable releases and fixes.",
      ],
    },
    {
      company: "Betsson Group",
      role: "UX Designer",
      location: "Malta",
      start: "Jul 2017",
      end: "Jan 2018",
      highlights: [
        "UX design role supporting product interface decisions.",
        "Worked on improving usability and clarity of flows.",
        "Partnered with teams to align design and implementation.",
      ],
    },
    {
      company: "PwC",
      role: "Software Development Intern",
      location: "Qormi, Malta",
      start: "Feb 2017",
      end: "Jul 2017",
      highlights: [
        "Software development internship supporting internal/client work.",
        "Contributed to implementation tasks and improvements.",
      ],
    },
    {
      company: "Paddy Power Betfair",
      role: "Customer Care Agent",
      location: "Santa Venera, Malta",
      start: "Apr 2016",
      end: "May 2017",
      highlights: [
        "Customer-facing support role focused on clarity and problem-solving.",
        "Maintained service quality under pressure.",
      ],
    },
    {
      company: "Terra Di Mezzo 2000 Malta",
      role: "Public Relations Officer",
      location: "Malta",
      start: "Oct 2015",
      end: "Jun 2023",
      highlights: [
        "Long-running PR role alongside development work.",
        "Handled communication and external-facing activities.",
      ],
    },
    {
      company: "MITA (Malta Information Technology Agency)",
      role: "Student Software Developer at Identity Malta",
      location: "Valletta, Malta",
      start: "Jul 2015",
      end: "Sep 2015",
      highlights: [
        "C# system development and PHP intranet system development.",
        "Supported hardware installations as part of delivery.",
      ],
    },
    {
      company: "MITA (Malta Information Technology Agency)",
      role: "Student Software Programmer at Identity Malta",
      location: "Valletta, Malta",
      start: "Jul 2014",
      end: "Sep 2014",
      highlights: ["C# development placement supporting internal systems."],
    },
    {
      company: "Pizza Hut",
      role: "Front of House",
      location: "St. Julians, Malta",
      start: "Apr 2015",
      end: "Mar 2016",
      highlights: ["Customer-facing role in a fast-paced environment."],
    },
    {
      company: "Water Services Corporation - Malta",
      role: "Clerk",
      location: "Malta",
      start: "Jul 2013",
      end: "Sep 2013",
      highlights: ["Administrative support role."],
    },
  ],

  projects: [
    {
      name: "Gemstruct",
      description: "Personal portfolio and experiments hub for software projects and prototypes.",
      tags: ["React", "TypeScript", "Vite"],
      links: [{ label: "Website", href: "https://gemstruct.com" }],
    },
    {
      name: "Pixi.js / WebGL Prototypes",
      description: "Interactive graphics prototypes and performance-focused UI experiments using WebGL.",
      tags: ["Pixi.js", "WebGL", "TypeScript"],
      links: [],
    },
  ],

  skills: [
    { group: "Top skills", items: ["Pixi.js", "WebGL",  "Problem Solving"] },
    { group: "Web", items: ["HTML", "CSS", "Web Design"] },
    { group: "Backend", items: ["NodeJS", ".NET", "PHP"] },
    { group: "Languages", items: ["English (Native/Bilingual)", "Maltese (Native/Bilingual)", "Italian (Limited Working)"] },
  ],

  education: [
    {
      school: "IICT MCAST PAOLA",
      program: "Bachelor's Degree — Computer Science (Software Development)",
      start: "2015",
      end: "2018",
    },
    {
      school: "IICT MCAST, Paola",
      program: "BTEC Extended Diploma in Software Development",
      start: "2013",
      end: "2015",
    },
    {
      school: "St. Aloysius' College, Birkirkara",
      program: "Secondary Education",
      start: "2007",
      end: "2012",
    },
  ],

  about: [
    "Full stack developer with experience across frontend and backend, flexible across Node.js and .NET, and comfortable working with PHP and core web technologies.",
    "Current interests include performance-focused UI, interactive graphics (WebGL), and shipping maintainable products.",
  ],
};
