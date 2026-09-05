/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Nikhil",
  last: "Maalige",
  fullName: "Nikhil Maalige",
  tagline:
    "Computer Science Student • Machine Learning & Bioengineering Researcher",
  location: "New Jersey, USA",
  email: "nmaalige@gmail.com",
  bio: [
    "I'm a junior at Bergen County Academies in Rutherford, New Jersey, studying an all Honors, AP, and IB course load with a 4.0/4.0 cumulative GPA. My focus is computer science — machine learning, data structures, and full-stack development — alongside research that applies those tools to real healthcare problems.",
    "My research work centres on machine learning and reinforcement learning. I built a wearable diagnostic device for assessing Parkinsonian motor symptoms, and I'm assisting an NJIT professor on a reinforcement learning project involving machine learning implementations and experimentation.",
    "Outside the lab, I cofounded my school's Machine Learning Club to teach ML fundamentals to other students, compete in hackathons and game jams, and play alto and tenor saxophone in marching band, concert band, and the saxophone ensemble. I also teach summer band students and volunteer at a local senior center.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/cv.pdf",
  photo: "",
  aboutPhoto: "",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Research & Work", to: "/work" },
      { label: "Projects", to: "/projects" },
      { label: "Interests", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  {
    label: "Leadership & Teaching",

    label: "Leadership & Teaching",
    to: "/volunteering",
  },

  { label: "Music & Activities", to: "/sports" },
];

/* ---- Research & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "njit-reinforcement-learning",
    role: "Undergraduate Research Assistant",
    org: "NJIT Professor Research — Reinforcement Learning",
    logo: "/logos/njit.png",
    location: "New Jersey, USA",
    dates: "Jun 2026 – Tentative",
    meta: "Jun 2026 – Tentative · New Jersey, USA ·",
    badge: "Research",
    desc: "Working with an NJIT professor on a reinforcement learning research project, building theoretical grounding while supporting hands-on experimentation.",
    bullets: [
      "Learned theoretical foundations of reinforcement learning algorithms and their applications",
      "Assisting with an ongoing research project involving machine learning implementations and experimentation",
    ],
    tags: ["Reinforcement Learning", "Machine Learning", "Research"],
    featured: true,
  },
  {
    slug: "state-farm-customer-service",
    role: "Customer Service Agent",
    org: "State Farm Insurance Agency",
    logo: "/logos/state-farm.png",
    location: "New Jersey, USA",
    dates: "Dec 2025 – Present",
    meta: "Dec 2025 – Present · New Jersey, USA ·",
    badge: "Part-time",
    desc: "Client-facing role handling policy support, claims intake, and payment processing for an insurance agency.",
    bullets: [
      "Answer inbound and outbound calls assisting clients with policy inquiries, account updates, and comprehensive support",
      "Guide clients through the claims process by collecting required information, clarifying coverage details, and ensuring proper documentation is submitted",
      "Process payments and coordinate with claims partners to monitor claim status, address issues, and provide timely updates to customers",
    ],
    tags: ["Client Support", "Communication", "Operations"],
    featured: true,
  },
  {
    slug: "bca-machine-learning-club",
    role: "Cofounder & Teacher",
    org: "BCA Machine Learning Club",
    logo: "/logos/bca.png",
    location: "Bergen County Academies, New Jersey",
    dates: "2024 – Present",
    meta: "2024 – Present · Bergen County Academies, New Jersey ·",
    badge: "Student-led",
    desc: "Founded a school-wide machine learning club and built it from concept to a running programme of lessons, fundraising, and competition.",
    bullets: [
      "Founded and developed a school-wide machine learning club from concept to implementation",
      "Taught club members fundamental and advanced machine learning concepts and practical applications",
      "Organised a bake sale fundraiser and planned a school-wide machine learning competition for broader student engagement",
    ],
    tags: ["Machine Learning", "Teaching", "Leadership"],
    featured: true,
  },
  {
    slug: "summer-band-instructor",
    role: "Teacher & Volunteer",
    org: "Summer Band",
    logo: "",
    location: "New Jersey, USA",
    dates: "2023 – Present",
    meta: "2023 – Present · New Jersey, USA ·",
    badge: "Volunteer",
    desc: "Summer instruction for student musicians, covering both small-group coaching and full-band rehearsal support.",
    bullets: [
      "Taught 15+ students across 5 hours per weekday in small-group settings, focusing on technique, accuracy, and confidence",
      "Co-instructed 35+ students alongside the band director during full-band rehearsals and ensemble preparation",
      "Assisted with rehearsal planning, music preparation, and daily organisational tasks",
    ],
    tags: ["Teaching", "Music", "Mentorship"],
    featured: false,
  },
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    name: "Wearable Diagnostic Device for Parkinsonian Motor Symptom Assessment",
    org: "Academic Research Project",
    meta: "2024",
    desc: "Developed an innovative wearable device designed to assess and monitor Parkinsonian motor symptoms with precision. Awarded 2nd Place at the BCA Research Expo and a United States Air Force Research Award; qualified for AJAS, with publication planned.",
    tags: [
      "Bioengineering",
      "Wearable Devices",
      "Machine Learning",
      "Research",
    ],
    featured: true,
  },
  {
    name: "FBLA Mobile Application Development",
    org: "FBLA Competition",
    meta: "2025",
    desc: "Built a mobile application for the FBLA competition focused on practical business solutions, and presented it to judges. Placed 3rd at the New Jersey State Leadership Conference and qualified for the National Leadership Conference.",
    tags: ["Mobile Development", "Product Design", "Presentation"],
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🎖️",
    title: "United States Air Force Research Award",
    meta: "2026",
    detail:
      "Awarded for the wearable diagnostic device developed for Parkinsonian motor symptom assessment.",
    link: "",
    featured: true,
  },
  {
    icon: "🥈",
    title: "BCA Research Expo — 2nd Place",
    meta: "Research Expo",
    detail:
      "Second place for the wearable diagnostic device project; also qualified for the AJAS competition, with findings planned for journal publication.",
    link: "",
    featured: true,
  },
  {
    icon: "🥉",
    title: "FBLA New Jersey State Leadership Conference — 3rd Place",
    meta: "2025",
    detail:
      "Third place in Mobile Application Development, qualifying for the National Leadership Conference.",
    link: "",
    featured: true,
  },
  {
    icon: "🎮",
    title: "Counterspell Game Jam & HackMHS X — 2nd Place",
    meta: "Hackathons & Game Jams",
    detail:
      "Second place finishes in competitive hackathon and game jam events.",
    link: "",
    featured: true,
  },
  {
    icon: "📊",
    title: "SAT — 1550/1600",
    meta: "November 2025",
    detail: "Math 800/800 · Reading & Writing 750/800.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "4.0/4.0 Cumulative GPA",
    meta: "2023 – 2026",
    detail:
      "Maintained a perfect GPA across freshman, sophomore, and junior years in an all Honors, AP, and IB course load at Bergen County Academies.",
    link: "",
    featured: true,
  },
  {
    icon: "💻",
    title: "AP Computer Science A — Score 5",
    meta: "AP Exam",
    detail: "Highest possible score on the AP Computer Science A examination.",
    link: "",
    featured: false,
  },
];

/* ---- Research interests ---- */

export const ARTICLES = [
  {
    title: "Machine Learning & Reinforcement Learning",
    outlet:
      "Algorithm foundations, experimentation, and applied ML implementations",
    link: "",
  },
  {
    title: "Wearable Diagnostics & Bioengineering",
    outlet: "Sensor-based health monitoring and motor symptom assessment",
    link: "",
  },
  {
    title: "Full-Stack Software Development",
    outlet:
      "MERN stack web applications, data structures, sockets and threading",
    link: "",
  },
  {
    title: "Game Development & Rapid Prototyping",
    outlet: "Building under time constraints through hackathons and game jams",
    link: "",
  },
];

/* ---- Leadership, teaching & activities ---- */

export const VOLUNTEER = {
  stats: [
    { value: "50+", label: "Students Taught" },
    { value: "3+", label: "Years Volunteering" },
    { value: "3", label: "Organisations Served" },
  ],
  orgs: [
    {
      name: "BCA Machine Learning Club",
      role: "Cofounder & Teacher · Since 2024",
      desc: "Founded and developed a school-wide machine learning club from concept to implementation. Taught members fundamental and advanced machine learning concepts, organised a bake sale fundraiser, and planned a school-wide machine learning competition.",
    },
    {
      name: "Summer Band",
      role: "Teacher & Volunteer · Since 2023",
      desc: "Taught 15+ students across 5 hours per weekday in small-group settings focused on technique, accuracy, and confidence, and co-instructed 35+ students alongside the band director during full-band rehearsals. Assisted with rehearsal planning, music preparation, and daily organisation.",
    },
    {
      name: "Senior Center",
      role: "Volunteer · Since 2023",
      desc: "Aided with meal service, cleanup, and event preparation for community programmes serving senior residents. Volunteered multiple days per week during summer and frequently throughout the school year.",
    },
  ],
};

/* ---- Music, activities & competitions (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "🎷",
    name: "Marching Band",
    desc: "Active member since 2023, attending frequent practices, games, and competitions, with participation continuing through senior year.",
  },
  {
    icon: "🎶",
    name: "Saxophone Ensemble",
    desc: "Advanced musician performing on alto and tenor saxophones in an ensemble focused on advanced classical and contemporary pieces. Performed at the BCA concert and the Ensemble Prestige showcase.",
  },
  {
    icon: "🎼",
    name: "Concert Band",
    desc: "Consistent member of the concert band ensemble throughout high school.",
  },
  {
    icon: "🏆",
    name: "Hackathons & Game Jams",
    desc: "Competes in hackathons and game jams to sharpen problem solving under time constraints, placing 2nd at the Counterspell Game Jam and HackMHS X. Learned the value of teamwork and planning before execution.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Programming",
    items: [
      "Python",
      "Java",
      "MERN Stack (MongoDB, Express, React, Node.js)",
      "Data Structures",
      "Web Development",
    ],
  },
  {
    group: "Tools & Technologies",
    items: [
      "Photoshop",
      "CAD",
      "3D Printing",
      "Video Production",
      "Sockets & Threading",
      "Mechatronics",
    ],
  },
  {
    group: "Specialised Expertise",
    items: [
      "Machine Learning",
      "Reinforcement Learning",
      "Wearable Diagnostic Devices",
      "Bioengineering Research",
      "Game Development",
    ],
  },
  {
    group: "Languages",
    items: ["English", "Kannada", "French"],
  },
];

/* ---- Education (additional export — needs a component if you want to render it) ---- */

export const EDUCATION = [
  {
    school: "Bergen County Academies",
    location: "Rutherford, New Jersey",
    level: "Junior",
    dates: "2025 – 2026",
    gpa: "4.0/4.0 (All Honors, AP, or IB Courses)",
    coursework: [
      "AP Computer Science A (Score: 5)",
      "Advanced Math Analysis II",
      "AP Computer Science A — Data Structures",
      "Chemistry",
      "MERN Stack Web Applications",
      "Sockets and Threading",
      "Mechatronics",
      "World History II",
      "Français III",
    ],
  },
  {
    school: "Bergen County Academies",
    location: "Rutherford, New Jersey",
    level: "Sophomore",
    dates: "2024 – 2025",
    gpa: "4.0/4.0 (All Honors or AP Courses)",
    coursework: [],
  },
  {
    school: "Bergen County Academies",
    location: "Rutherford, New Jersey",
    level: "Freshman",
    dates: "2023 – 2024",
    gpa: "4.0/4.0 (All Honors Courses)",
    coursework: [],
  },
];

export const TEST_SCORES = [
  {
    exam: "SAT",
    date: "November 2025",
    breakdown: [
      { label: "Math", value: "790/800" },
      { label: "Reading & Writing", value: "720/800" },
      { label: "Total", value: "1510/1600" },
    ],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Achievements", to: "/awards" },
  { label: "Interests", to: "/publications" },
  { label: "Leadership", to: "/volunteering" },
  { label: "About", to: "/about" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
