import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  facebook,
  github,
  copilot,
  freelance,
  saylani,
  ned,
  marketplace,
  qit,


} from "../assets";




// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "experience",
    title: "Experience",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },

] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Wordpress Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Agentic Ai Developer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "copilot",
    icon: copilot,
  }

] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Front-End Developer",
    company_name: "Freelance Projects",
    icon: freelance,
    iconBg: "#FFD43B",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Developed responsive websites using HTML, CSS, JavaScript, and Bootstrap for various local clients.",
      "Converted Figma designs into pixel-perfect code using modern web standards.",
      "Collaborated with clients to understand requirements and deliver projects on time.",
      "Ensured cross-browser compatibility and optimized performance for mobile devices.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Saylani Welfare International Trust",
    icon: saylani,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2025",
    points: [
      "Built dynamic websites using HTML, CSS, JavaScript, and integrated with Supabase for backend functionality.",
      "Created responsive UI components and forms with email/password and Google authentication.",
      "Participated in coding exercises and improved proficiency in front-end and basic back-end development.",
      "Collaborated in a learning environment and shared code through GitHub.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Marketplace Hackathon Project",
    icon: marketplace,
    iconBg: "#383E56",
    date: "Sept 2024 - Jan 2025",
    points: [
      "Developed an e-commerce marketplace using Next.js, TypeScript, and Tailwind CSS.",
      "Implemented features like product listings, dynamic routing, cart, and checkout.",
      "Integrated API services and managed basic data migration tasks.",
      "Optimized frontend performance and improved user experience.",
    ],
  },
  {
    title: "Python Developer (Trainee)",
    company_name: "Ned University",
    icon: ned,
    iconBg: "#FFD43B",
    date: "Jan 2025 - March 2025",
    points: [
      "Completed various projects and assignments using Python, including area calculators, user input handling, and type conversions.",
      "Practiced core Python concepts such as data types, conditionals, loops, and functions.",
      "Maintained clean and simple code, regularly pushed updates to GitHub for public reference.",
      "Explored small-scale CLI-based applications for beginner-level Python development.",
    ],
  },
  {
    title: "YouTube Content Creator",
    company_name: "Qadri Intitute Of Technology",
    icon: qit,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    points: [
      "Creating educational content focused on web development, JavaScript, and digital marketing.",
      "Recording, editing, and publishing videos using tools like Camtasia, Filmora, and Canva.",
      "Managing YouTube SEO, thumbnails, and audience engagement strategies.",
      "Monetized the channel and consistently uploading new tech tutorials and shorts.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Moeed transformed our outdated website into a modern, responsive platform. His attention to detail and creativity really stood out!",
    name: "Sara Khan",
    designation: "Project Manager at",
    company: "WebSoft",
    image: user1,
  },
  {
    testimonial:
      "We needed a developer who could integrate AI and build a user-friendly interface — Moeed delivered both with professionalism and speed.",
    name: "Ali Raza",
    designation: "CEO of",
    company: "MenaASK AI",
    image: user2,
  },
  {
    testimonial:
      "I was truly impressed by Moeed's ability to bring our 3D visualization idea to life. He’s reliable, skilled, and great to work with!",
    name: "Ayesha Ahmed",
    designation: "Design Lead at",
    company: "TechVista",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Library Management System",
    description:
      "An efficient platform that helps manage books, track borrow/return activity, and handle member records in libraries with ease.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Muhammad-Moeed/Library-Managment-System",
    live_site_link: "https://librarymanagmentsystem.streamlit.app/",
  },
  {
    name: "Password Strength Checker",
    description:
      "Web app that checks password strength, gives instant feedback, and suggests improvements for better security.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Muhammad-Moeed/Password-Strength-Meter",
    live_site_link: "https://passwordsm.streamlit.app/",
  },
  {
    name: "Unit Converter",
    description:
      " A robust web app designed to seamlessly convert various units across categories like length, weight, temperature, and more. It ensures fast, accurate, and real-time conversions.",

    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Muhammad-Moeed/unitConvertor",
    live_site_link: "https://as2unitconvetor.streamlit.app/",
  },
  {
    name: "E-Commerce Marketplace",
description:
  "A dynamic platform built with Next.js that allows users to buy, sell, and manage products, track orders, and interact through reviews and ratings.",

    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Muhammad-Moeed/Hackathone-Nextjs-UIUX",
    live_site_link: "https://hackathone-nextjs-uiux.vercel.app/product",
  },
  {
    name: "Weather Forecast Application",
    description:
    "A real-time weather app that provides users with accurate forecasts, temperature, humidity, and wind speed for any location globally.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Muhammad-Moeed/weatherApp",
    live_site_link: "https://moeedweather.netlify.app/",
  },
  {
    name: "Quiz Application",
    description:
      "A fully responsive quiz application that allows users to attempt quizzes on various topics with real-time scoring, question filtering by difficulty and category, timer-based sessions, and instant feedback to enhance learning and engagement.",
    tags: [
      {
        name: "Supabase",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/Muhammad-Moeed/Quizapp",
    live_site_link: "https://techknowfuture.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@muhammadmoeedqadri",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/muhammad-moeed-qadri-977568269/",
  },
  {
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/muhammadmoeedqadri",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Muhammad-Moeed",
  },
] as const;
