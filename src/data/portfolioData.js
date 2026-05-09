// ============================================================
//  PORTFOLIO DATA — Edit this file to update your details
//  Replace placeholder values with your actual information
// ============================================================
import profile from './github.png';
export const personalInfo = {
  // ── Basic Info ──────────────────────────────────────────────
  name: "Leela Chouhan",
  role: "Web Developer",
  tagline: "Frontend Developer | React Developer | MERN Stack Learner",
  location: "Jashpur, Chhattisgarh",
  email: "leela23@navgurukul.org",
  resumeUrl: "/Leela_Chouhan.pdf",
  phone: "7067086725",

  // ── Profile Image ────────────────────────────────────────────
  // Replace with your actual image path or URL
  // Put your image in /public/images/ folder as "profile.jpg"
  profileImage: profile,   // <-- UPDATE THIS

  // ── Resume ───────────────────────────────────────────────────
  // Put your resume PDF in /public/ folder
  resumeUrl: "/Leela_Resume.pdf",       // <-- UPDATE THIS

  // ── Social Links ─────────────────────────────────────────────
  github: "https://github.com/leelachouhan23",        // <-- UPDATE THIS (your GitHub URL)
  linkedin: "https://www.linkedin.com/in/leela-chouhan-419141403/",
      // <-- UPDATE THIS (your Twitter URL)

  // ── About ────────────────────────────────────────────────────
  about: `I'm Leela Chouhan, a detail-oriented Computer Science postgraduate student and frontend developer from Jashpur, Chhattisgarh. I build responsive web applications and love turning ideas into polished user experiences.

I've hands-on experience with the MERN stack — from crafting pixel-perfect UIs with React to building REST APIs with Node.js and Express, backed by MongoDB. Beyond code, I've coordinated academic programs at NavGurukul, sharpening my skills in communication, organisation, and leadership.

My goal is to join a forward-thinking team where I can grow as a full-stack developer, contribute meaningfully, and keep pushing my craft.`,

  careerGoal: "Aspiring Full-Stack Developer aiming to build scalable, user-centric web applications while growing within a collaborative, innovation-driven team.",
};

// ── Skills ───────────────────────────────────────────────────────────────────
// level: 0-100 (shown as progress bar fill)
export const skills = [
  { name: "HTML & CSS",      level: 75, icon: "🌐", category: "Frontend"  },
  { name: "JavaScript",      level: 60, icon: "⚡", category: "Frontend"  },
  { name: "React",           level: 50, icon: "⚛️", category: "Frontend"  },
  { name: "Python",          level: 70, icon: "🐍", category: "Backend"   },
  { name: "Node.js",         level: 65, icon: "🟢", category: "Backend"   },
  { name: "Express.js",      level: 65, icon: "🚂", category: "Backend"   },
  { name: "MongoDB",         level: 60, icon: "🍃", category: "Backend"   },
  { name: "Git & GitHub",    level: 80, icon: "🐙", category: "Tools"     },
  { name: "DSA",             level: 65, icon: "📊", category: "CS Fundamentals" },
];

// ── Projects ─────────────────────────────────────────────────────────────────
// Replace liveUrl / repoUrl with your actual links
export const projects = [
  {
    id: 1,
    title: "Perfume E-commerce Website",
    description:
      "A web-based e-commerce platform for fragrance products. Includes product listings, user interaction, structured data handling, and a WhatsApp-integrated feedback system for direct admin messaging.",
    tech: ["HTML", "CSS", "JavaScript", "WhatsApp API"],
    image: "/images/ecommerce.png",         // <-- UPDATE or leave placeholder
    liveUrl: "https://golden-river-luxury-perufume.netlify.app/",                           // <-- UPDATE with live link
    repoUrl: "https://github.com/leelachouhan23/golden-river-official",                           // <-- UPDATE with GitHub repo
    gradient: "from-purple-600 to-pink-500",
    emoji: "🧴",
  },
  {
    id: 2,
    title: "E-commerce Website ",
    description:
      "Full-stack task management application built with Html, Css, Js,Supports complete CRUD operations with dynamic data rendering and .",
    tech: ["Python", "Flask", "Jinja2", "MongoDB"],            // <-- UPDATE or leave placeholder
    liveUrl: "https://e-commerce-website-tan-delta.vercel.app/",                           // <-- UPDATE with live link
    repoUrl: "https://github.com/leelachouhan23/E-commerce-Website",                           // <-- UPDATE with GitHub repo
    gradient: "from-cyan-500 to-blue-600",
    emoji: "🛍️",
  },
  // {
  //   id: 3,
  //   title: "YouTube Clone Backend",
  //   description:
  //     "Backend API for a YouTube-like platform using Node.js and Express.js. Users can upload images and videos. Built with MongoDB, JWT auth, bcrypt, Multer, and Cloudinary for media storage.",
  //   tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
  //   image: "/images/youtube.png",           // <-- UPDATE or leave placeholder
  //   liveUrl: "#",                           // <-- UPDATE with live link
  //   repoUrl: "#",                           // <-- UPDATE with GitHub repo
  //   gradient: "from-red-500 to-orange-500",
  //   emoji: "▶️",
  // },
 
];

// ── Experience / Learning Journey ─────────────────────────────────────────────
export const timeline = [
  {
    year: "2021",
    title: "Started B.Sc. (Maths & Computer Science)",
    org: "Sarguja University, Jashpur",
    description: "Began formal CS education — studied C, C++, Java, and fundamentals of algorithms and data structures.",
    icon: "🎓",
    color: "from-indigo-500 to-purple-500",
  },
  {
    year: "Feb 2023",
    title: "Academic & Life Skills Coordinator",
    org: "NavGurukul, Jashpur Campus",
    description: "Coordinated academic schedules, maintained performance trackers, mentored students in communication, time management, and professional ethics.",
    icon: "📋",
    color: "from-pink-500 to-rose-500",
  },
  {
    year: "Dec 2023",
    title: "Software Web Development Program",
    org: "NavGurukul, Jashpur",
    description: "Intensive full-stack training — HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Git/GitHub, and deployment.",
    icon: "💻",
    color: "from-cyan-500 to-blue-500",
  },
  {
    year: "2023–2025",
    title: "Post Graduation — Computer Science",
    org: "Sarguja University",
    description: "Advanced study in C, C++, Java, MySQL, and Data Structures & Algorithms while simultaneously upskilling in web development.",
    icon: "🏆",
    color: "from-amber-500 to-orange-500",
  },
  {
    year: "2024",
    title: "Built Full-Stack Projects",
    org: "Self-driven",
    description: "Shipped the E-commerce website, Todo App (Flask + MongoDB), and YouTube Clone backend with Cloudinary integration.",
    icon: "🚀",
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "Now",
    title: "Seeking Opportunities",
    org: "Open to Work 🌟",
    description: "Actively looking for frontend / full-stack developer roles. Available for internships and full-time positions.",
    icon: "🎯",
    color: "from-violet-500 to-indigo-500",
  },
];
