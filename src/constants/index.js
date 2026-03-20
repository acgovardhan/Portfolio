export const HERO_CONTENT =
  "Full-stack developer with a focus on building clean, purposeful web applications. Currently a CS undergrad at TKM College of Engineering, exploring the edges of full-stack development, AI integration, and decentralised systems."

export const EDUCATION = {
  institution: "TKM College of Engineering",
  degree: "B.Tech in Computer Science & Engineering",
  honors: "Honors in Data Science",
  period: "Sep 2023 – May 2027",
  location: "Kollam, Kerala",
  cgpa: "9.57 / 10.0",
  coursework: ["Data Structures", "Machine Learning", "Computer Networks", "Database Systems", "Operating Systems"],
}

export const EXPERIENCES = [
  {
    period: "Dec 2025 – Mar 2026",
    role: "Full Stack Developer Intern",
    company: "Deknek 3D",
    location: "Remote",
    points: [
      "Built a 3D model animation automation tool in two versions — Unity CLI pipeline and Blender Python API — to programmatically attach and export animations to arbitrary input models",
      "Analysed 20+ 3D platform ecosystems including Sketchfab and Epic Fab, evaluating APIs, pricing models, and web integration suitability",
      "Developed a full-stack AI image generation web app using Hugging Face diffusion model APIs",
    ],
  },
  {
    period: "Sep 2025 – Mar 2026",
    role: "Research Intern",
    company: "Centre for Development of Imaging Technology (C-DIT)",
    location: "Thiruvananthapuram, Kerala",
    points: [
      "Fine-tuned Wav2Vec2 to build a domain-adapted Malayalam speech-to-text model for paddy farmers, incorporating regional dialects and agricultural vocabulary",
      "Curated a dataset of 1,000+ 15-second audio clips with farming terminology and dialect-specific recordings",
      "Developing a voice-based data entry and crop analysis tool for low-literacy farming communities in Kerala",
    ],
  },
  {
    period: "Sep 2024 – Aug 2025",
    role: "Open IoT Student Ambassador",
    company: "ICFOSS / CDOH",
    location: "Kerala, India",
    points: [
      "Participated in IoT workshops and performed field maintenance of ICFOSS-deployed sensor systems across Kerala",
      "Repaired and calibrated environmental sensors at IHRD Engineering College, Kottarakkara, restoring reliable real-time data collection",
    ],
  },
]

export const PROJECTS = [
  {
    title: "SoulSpace",
    subtitle: "Gamified Mental Wellness Platform",
    period: "Jan 2025 – Mar 2026",
    description:
      "Free full-stack mental wellness platform with clinically validated screenings (PHQ-9, GAD-7, PSS-10, DAT) and a gamified streak-based interface featuring virtual pets, a doodle pad, and stress-relief mini-games. Integrated an AI empathetic chatbot via OpenRouter and a zero-cost therapist locator using Nominatim.",
    tech: ["React", "Node.js", "Express", "MongoDB Atlas", "JWT", "OpenRouter API", "OpenStreetMap"],
    github: "https://github.com/acgovardhan/SoulSpace",
    live: "https://soul-space-frontend.vercel.app/",
    featured: true,
  },
  {
    title: "Activity Point Management System",
    subtitle: "KTU Digitalisation Platform",
    period: "Jul 2025 – Oct 2025",
    description:
      "Web platform to digitalise KTU's activity point submission and verification workflow, replacing manual paper-based processes. Built a student portal with proof upload and real-time status tracking, alongside a faculty dashboard with approval workflow.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/acgovardhan/MyPoint",
    live: "https://my-point.vercel.app/",
    featured: false,
  },
   {
    title: "Budget Tracker",
    description: "Personal finance app to track income and expenses with category breakdowns and monthly charts.",
    tech: ["React", "React-Router", "Toastify"],
    github: "https://github.com/acgovardhan/Budgeting-App",
    live: "https://acg-budget-app.netlify.app/",
    featured: false,
  },
  
]

export const ALL_PROJECTS = [
  {
    title: "College & Career Guidance System",
    subtitle: "Student Guidance Desktop App",
    period: "Jul 2024 – Mar 2025",
    description:
      "Psychology-based interest assessment engine that recommends courses, colleges, and career paths across four integrated modules with a Java Swing frontend and optimised MySQL schemas.",
    tech: ["Java", "Java Swing", "MySQL"],
    github: "https://github.com/acgovardhan/Updated-CCGS-App",
    live: "https://github.com/acgovardhan/Updated-CCGS-App/releases",
  },
  {
    title: "YouTube Clone",
    description: "Fully functional YouTube clone with video playback, search, and channel pages using the YouTube Data API.",
    tech: ["React", "YouTube API", "Material UI"],
    github: "https://github.com/acgovardhan/YoutubeClone",
    live: "https://acgovardhan-yt-clone.netlify.app/",
  },
  {
    title: "Simple Piano Player",
    description: "Simple Piano made using vanilla js and css, users can play using their own laptop keyboard or touch screen in mobiles.",
    tech: ["Vanilla JS", "CSS"],
    github: "https://github.com/acgovardhan/MyPiano",
    live: "https://acgovardhan.github.io/MyPiano/",
  },
{
    title: "Find My Grain",
    description: "FindMyGrain is a quirky web app made for TinkerHub’s Useless Projects 2.0. Using OpenCV.js, it identifies rice grains and assigns names to each. Just enter names, point the camera at rice, and each grain reveals its rightful owner, just as Lalettan said.(Funny project)",
    tech: ["OpenCV js"],
    github: "https://github.com/acgovardhan/FindMyGrain",
    live: "https://acgovardhan.github.io/FindMyGrain/",
  },
  {
    title: "Movie Listing App",
    description: "A simple movie listing app using reactjs and omdbAPI.",
    tech: ["React", "CSS"],
    github: "https://github.com/acgovardhan/MovieListingApp",
    live: "https://acg-movielistingapp.netlify.app/",
  },

  {
    title: "Tic Tac Toe",
    description: "Simple tic-tac-toe game using react.",
    tech: ["React"],
    github: "https://github.com/acgovardhan/TicTacToe",
    live: "https://acgovardhan.github.io/TicTacToe/",
  },
  {
    title: "Shortcut Center",
    description: "Shortcut Center is a lightweight and privacy-focused web app that allows you to save and manage an unlimited number of website shortcuts all stored locally on your device.",
    tech: ["Vanilla Js", "CSS"],
    github: "https://github.com/acgovardhan/ShortcutCenter",
    live: "https://acgovardhan.github.io/ShortcutCenter/",
  },
  
  {
    title: "To-do-list app",
    description: "Simple to-do-list app using react.",
    tech: ["React"],
    github: "https://github.com/acgovardhan/Todo-List-React",
    live: "https://acgovardhan.github.io/Todo-List-React/",
  },
  
  {
    title: "Kerala agri voice bot",
    description: "Voice assisted chatbot for old and illiterate farmers in Kerala.",
    tech: ["React", "Chatbot"],
    github: "https://github.com/acgovardhan/kerala-agri-voice-bot",
    live: "https://kerala-agri-voice-bot.netlify.app/",
  },
  {
    title: "AI Image Generator",
    description: "Text-to-Image AI Agent built using Next.js and Tailwind CSS. The project allows users to generate images from text prompts using an AI model and download the generated images.",
    tech: ["React", "Node.js", "Hugging Face API"],
    github: "https://github.com/acgovardhan/Text-to-Image-AI-Agent",
    live: "https://text-to-image-ai-agent.vercel.app/",
  },
  {
    title: "Chat Room Application",
    description: "An online chatroom app using Firebase and React.",
    tech: ["React", "Firebase"],
    github: "https://github.com/acgovardhan/ChatRoom-Application",
    live: "https://desi-chat-app.netlify.app/",
  },
  {
    title: "Student Collaboration Platform",
    description: "Platform for students to collaborate on projects, share resources, and track contributions.(Design only - Work in progress)",
    tech: ["React"],
    github: "https://github.com/acgovardhan/Student_Collaboration_Platform",
    live: "https://magenta-faun-9f6660.netlify.app/",
  },

]

export const RESEARCH = {
  title: "Blockchain Technology to Secure Data in IoT Environments",
  period: "Feb 2026 – Present",
  advisor: "Dr. Thushara A",
  institution: "TKM College of Engineering",
  type: "Undergraduate Research Project",
  points: [
    "Designing a hybrid aggregation protocol combining adaptive batching, Bonawitz-style privacy masking, Merkle-tree anchoring, and BLS signature compression to minimise on-chain footprint for high-volume IoT data streams",
    "Implementing a multi-criteria adaptive scoring mechanism (freshness, QoS, and urgency) to dynamically size transaction batches, reducing gas costs and improving response time for critical IoT events",
    "Applying Bonawitz secure aggregation to raw IoT sensor data on a public blockchain, enabling aggregate analytics without exposing individual device readings",
    "Evaluating the protocol against five state-of-the-art baselines using the IoT-23 dataset across gas cost, latency, bandwidth, and energy metrics",
  ],
}

export const SKILLS = {
  Languages: ["Java", "JavaScript (ES6+)", "Python", "C/C++", "SQL", "Solidity"],
  Frameworks: ["MERN", "React.js", "Node.js", "Express.js", "Tailwind CSS", "Material UI","Motion", "Astro"],
  "AI / ML": ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Hugging Face Transformers"],
  "Blockchain & IoT": ["Ethereum", "Smart Contracts", "IoT Sensor Systems"],
  Databases: ["MongoDB", "MySQL", "Firebase", "Supabase"],
  Tools: ["Git", "GitHub", "VS Code", "Blender", "IntelliJ IDEA", "Linux"],
}


export const CONTRIBUTIONS = [
  {
    project: "Tech Myrmidons",
    type: "Open Source Contribution · Hacktoberfest 2025",
    description: "Contributed a backend web development sub-page to Tech Myrmidons, a tech news and updates platform.",
    repo: "https://github.com/acgovardhan/techmyrmidons-web",
    live: "https://techmyrmidons.com",
  },
  {
    project: "Festive JS",
    type: "Open Source Contribution · Hacktoberfest 2025",
    description: "Built the Sunny Day theme for festive-js, a zero-dependency JavaScript library that adds seasonal overlay animations to web pages, published on npm.",
    repo: "https://github.com/acgovardhan/festive-js",
    live: "https://www.npmjs.com/package/festive-js",
  },
]


export const CERTIFICATIONS = [
  {
    title: "Google AI Essentials",
    issuer: "Google",
    year: "Jan 2025",
    image: "/certs/google-ai.png",
    link: "https://www.coursera.org/account/accomplishments/verify/U0Y0K016CDJP",
  },
  {
    title: "Joy of Computing with Python",
    issuer: "NPTEL",
    year: "Nov 2024",
    image: "/certs/nptel-python.png",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS113S85590047004122960",
  },
  {
    title: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    year: "Sep 2025",
    image: "/certs/fcc-backend.png",
    link: "https://www.freecodecamp.org/certification/acgovardhan/back-end-development-and-apis",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: " Jun 2025",
    image: "/certs/fcc-rwd.png",
    link: "https://www.freecodecamp.org/certification/acgovardhan/responsive-web-design",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "Sep 2025",
    image: "/certs/fcc-js.png",
    link: "https://www.freecodecamp.org/certification/acgovardhan/javascript-algorithms-and-data-structures-v8",
  },
  {
    title: "JavaScript Algorithms and Data Structures (Legacy)",
    issuer: "freeCodeCamp",
    year: "Jul 2025",
    image: "/certs/fcc-js-legacy.png",
    link: "https://www.freecodecamp.org/certification/acgovardhan/javascript-algorithms-and-data-structures",
  },
]