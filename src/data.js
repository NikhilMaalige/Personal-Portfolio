export const PROFILE = {
  first: "Nikhil",
  last: "Maalige",
  fullName: "Nikhil Maalige",
  tagline: "Aspiring Biomedical Engineer • Computer Science and Machine Learning Student",
  location: "Rutherford, NJ",
  email: "nmaalige@gmail.com",
  bio: [
    "I am a senior in the Academy for Technology and Computer Science at Bergen County Academies in Hackensack, NJ, with a 4.00 unweighted cumulative GPA and a 1550 SAT score (800 Math, 750 Reading & Writing). My work bridges biomedical engineering, machine learning, and hardware development, creating technical solutions for real-world healthcare challenges.",
    "My primary research focuses on real-time detection, quantification, and mechanical mitigation of Parkinsonian tremors using wearable biomechatronic systems, alongside reinforcement learning research at the New Jersey Institute of Technology investigating exact machine unlearning and function approximation.",
    "Beyond research, I co-founded the BCA Machine Learning Club with 50+ members, host an international competition with 230+ submissions across 5+ countries, intern at Optimus Health Analytics developing AI healthcare data solutions, and perform as a varsity alto saxophonist in marching band and wind ensembles.",
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
  cv: "",
  photo: "",
  aboutPhoto: "",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Research Experience", to: "/research" },
      { label: "Work Experience", to: "/work" },
      { label: "Projects", to: "/projects" },
      { label: "Interests", to: "/publications" },
    ],
  },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Teaching", to: "/volunteering" },
  { label: "Music & Activities", to: "/sports" },
];

export const RESEARCH = [
  {
    slug: "parkinsons-tremor-mitigation",
    role: "Co-Researcher & Hardware/ML Developer",
    org: "A Wearable System for Real-Time Detection, Quantification, and Mechanical Mitigation of Simulated Parkinsonian Motor Symptoms",
    logo: "",
    location: "Hackensack, NJ",
    dates: "Sep 2024 - Present",
    badge: "Biomedical Research",
    desc: "Co-conducting biomedical research and hardware development on a wearable biomechatronic device designed to diagnose tremor severity, assess motor slowness, and actively counteract Parkinsonian motor symptoms in real time.",
    bullets: [
      "Co-conducted research to diagnose the severity of Parkinson's disease through tremor analysis using ML models",
      "Design and implement Bradykinesia assessments (finger-tap speed tests) to quantify motor slowness using statistical feature analysis",
      "Build a mechanism to counteract tremors and assess further symptoms of Parkinson's disease",
      "Integrate servo motors with the ML classification system to dynamically adjust tension and mechanically stabilize the hand during detected tremors, translating model predictions into real-time physical intervention",
      "Paper submitted for publication to The Bulletin of the New Jersey Academy of Science (under scientific review); recipient of 3 research awards: BCA Research Expo (2nd Place, Engineering), NJAS Qualifier, and NJSRS (3rd Place, Biomedical Engineering)",
    ],
    tags: [
      "Biomedical Engineering",
      "Machine Learning",
      "Mechatronics",
      "Statistical Analysis",
      "Servo Systems",
      "Python",
    ],
    featured: true,
  },
  {
    slug: "njit-reinforcement-learning",
    role: "Research Assistant",
    org: "Reinforcement Learning Research, New Jersey Institute of Technology",
    logo: "/logos/njit.png",
    location: "Newark, NJ",
    dates: "Apr 2026 - Present",
    badge: "University Research",
    desc: "Conducting theoretical and empirical reinforcement learning research under Professor Thanh Nguyen-Tang at NJIT, investigating exact machine unlearning, data deletion challenges, and generalized function approximation.",
    bullets: [
      "Review and analyze 3+ research papers on reinforcement learning, exact unlearning, and general function approximation",
      "Compare tabular RL methods with function approximation to identify challenges in preserving learning behavior after data deletion",
      "Investigate algorithmic stability, unlearning verification metrics, and post-deletion performance retention across complex reinforcement learning benchmarks",
    ],
    tags: [
      "Reinforcement Learning",
      "Machine Learning",
      "Exact Unlearning",
      "Function Approximation",
      "Python",
    ],
    featured: true,
  },
];

export const EXPERIENCE = [
  {
    slug: "optimus-health-analytics",
    role: "Artificial Intelligence & Data Engineering Intern",
    org: "Optimus Health Analytics - SOMOS Community Care",
    logo: "",
    location: "Bronx, NY",
    dates: "Sep 2026 - Present",
    badge: "Internship",
    desc: "Developing AI-driven healthcare data solutions through automated ETL pipeline development, model evaluation benchmarks, and prompt-caching techniques.",
    bullets: [
      "Develop AI-driven healthcare data solutions through ETL pipeline development, data engineering, AI model evaluation, and prompt engineering",
      "Design automated ETL workflows using Python and Bash to improve reliability and efficiency of healthcare data processing",
      "Evaluate AI models for healthcare applications by measuring accuracy, performance, and cost to identify optimal solutions",
      "Research and implement prompt engineering and prompt-caching techniques to improve model accuracy and reduce token consumption",
    ],
    tags: [
      "Data Engineering",
      "ETL Pipelines",
      "Python",
      "Bash",
      "Prompt Engineering",
      "Healthcare AI",
    ],
    featured: true,
  },
  {
    slug: "state-farm-insurance",
    role: "Agent Team Member",
    org: "Susanne Godau - State Farm Insurance",
    logo: "/logos/state-farm.png",
    location: "Rutherford, NJ",
    dates: "Jan 2026 - Present",
    badge: "Part-time",
    desc: "Managing customer support inquiries, policy updates, claims intake, and payment coordination for an established insurance agency.",
    bullets: [
      "Answer inbound and outbound calls, assisting clients with policy inquiries, account updates, and general support",
      "Guide 30+ clients through the claims process by collecting required information and ensuring proper documentation is submitted",
      "Process payments and coordinate with claims partners to monitor claim status, address issues, and provide timely updates",
    ],
    tags: [
      "Client Support",
      "Claims Operations",
      "Communication",
      "Financial Operations",
    ],
    featured: true,
  },
  {
    slug: "bca-machine-learning-club",
    role: "Co-founder & Teacher",
    org: "BCA Machine Learning Club",
    logo: "/logos/bca.png",
    location: "Hackensack, NJ",
    dates: "Sep 2024 - Present",
    badge: "Student Leadership",
    desc: "Co-founded a student-run Machine Learning Club with 50+ members at Bergen County Academies, leading weekly technical curriculum and hosting a major international competition.",
    bullets: [
      "Co-founded a student-run Machine Learning Club with 50+ members, introducing peers to fundamental ML concepts through lessons and hands-on projects",
      "Design and teach beginner and advanced lessons on data analysis, model training, and real-world applications",
      "Host international competition with 230+ submissions, 5+ countries, and ~$1,200 in prizes sponsored by Jane Street, AoPS, NordSec, and more",
    ],
    tags: [
      "Machine Learning",
      "Teaching",
      "Curriculum Design",
      "Leadership",
      "Python",
    ],
    featured: true,
  },
];

export const PROJECTS = [
  {
    name: "FBLA Mobile Application Hub",
    org: "Future Business Leaders of America (FBLA)",
    meta: "2025 - Present",
    desc: "Designed and programmed a full-featured mobile application hub for FBLA students, presented a live competitive-event demo to judges, and supported chapter fundraising. Placed 3rd at New Jersey FBLA Mobile Application Development 2026, qualifying for the National Leadership Conference.",
    bullets: [
      "Designed and programmed a mobile app hub for FBLA students with scheduling, resources, and chapter coordination tools",
      "Presented a live competitive demonstration to event evaluators highlighting technical architecture and UI design",
      "Placed 3rd in New Jersey for Mobile Application Development (2026), qualifying for the National Leadership Conference",
    ],
    tags: ["Mobile Development", "React Native", "UI/UX Design", "FBLA", "Product Strategy"],
    featured: true,
  },
];

export const AWARDS = [
  {
    icon: "🎖️",
    title: "United States Air Force Research Award",
    meta: "BCA Research Expo, 2026",
    detail: "Awarded by the USAF for the wearable diagnostic and mechanical tremor mitigation device developed for Parkinsonian motor symptom assessment.",
    link: "",
    featured: true,
  },
  {
    icon: "🔬",
    title: "American Junior Academy of Sciences (AJAS) - Qualifier",
    meta: "2026",
    detail: "Qualified for the national American Junior Academy of Sciences competition in recognition of Parkinson's disease tremor research.",
    link: "",
    featured: true,
  },
  {
    icon: "🥉",
    title: "New Jersey Science Research Symposium (NJSRS) - 3rd Place",
    meta: "Biomedical Engineering, 2026",
    detail: "Awarded 3rd Place in Biomedical Engineering for research on real-time detection, quantification, and mechanical mitigation of Parkinsonian tremors.",
    link: "",
    featured: true,
  },
  {
    icon: "🥈",
    title: "BCA Research Expo - 2nd Place",
    meta: "Engineering, 2026",
    detail: "Earned 2nd Place in the Engineering category; paper submitted for publication to The Bulletin of the New Jersey Academy of Science.",
    link: "",
    featured: true,
  },
  {
    icon: "🥈",
    title: "Ridgehacks - 2nd Place",
    meta: "Hackathon, 2026",
    detail: "Awarded 2nd Place overall at the Ridgehacks competitive hackathon.",
    link: "",
    featured: false,
  },
  {
    icon: "🥈",
    title: "HackMHS X Hackathon - 2nd Place",
    meta: "Hackathon, 2025",
    detail: "Placed 2nd overall during a 24-hour sprint designing and building an original software solution.",
    link: "",
    featured: false,
  },
  {
    icon: "🎮",
    title: "Counterspell Game Jam - 2nd Place",
    meta: "Game Jam, 2025",
    detail: "Awarded 2nd Place overall in competitive game development and rapid prototyping.",
    link: "",
    featured: false,
  },
  {
    icon: "🥉",
    title: "New Jersey FBLA - 3rd Place",
    meta: "Mobile Application Development, 2026",
    detail: "Placed 3rd in New Jersey for Mobile Application Development, qualifying for the National Leadership Conference.",
    link: "",
    featured: true,
  },
  {
    icon: "🇫🇷",
    title: "Le Grand Concours (National French Contest) - Silver Medal",
    meta: "2026",
    detail: "Earned a national Silver Medal on the National French Contest examination.",
    link: "",
    featured: false,
  },
  {
    icon: "📜",
    title: "National Merit Commended Student",
    meta: "PSAT/NMSQT 2025",
    detail: "Recognized as a Commended Student in the National Merit Scholarship Program for outstanding academic performance.",
    link: "",
    featured: false,
  },
  {
    icon: "🌟",
    title: "National Honor Society",
    meta: "2025 - Present",
    detail: "Inducted into the National Honor Society based on scholarship, leadership, service, and character.",
    link: "",
    featured: false,
  },
  {
    icon: "🏅",
    title: "AP Scholar with Distinction",
    meta: "College Board",
    detail: "Granted for exceptional scores across 5 Advanced Placement examinations.",
    link: "",
    featured: false,
  },
  {
    icon: "📚",
    title: "High Honor Roll",
    meta: "All Trimesters, 2023 - Present",
    detail: "Maintained High Honor Roll distinction across every trimester throughout high school at Bergen County Academies.",
    link: "",
    featured: false,
  },
  {
    icon: "📊",
    title: "SAT - 1550/1600",
    meta: "June 2026",
    detail: "Math 800/800 · Reading & Writing 750/800.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "4.00/4.00 Cumulative GPA",
    meta: "2023 - Present",
    detail: "Maintained a perfect 4.00 unweighted cumulative GPA in an all Honors, AP, and IB course load at Bergen County Academies.",
    link: "",
    featured: true,
  },
];

export const ARTICLES = [
  {
    title: "Biomedical Systems & Wearable Diagnostics",
    outlet: "Real-time tremor detection, Bradykinesia assessment, and mechanical motor symptom stabilization",
    link: "",
  },
  {
    title: "Machine Learning & Reinforcement Learning",
    outlet: "Algorithm foundations, exact unlearning, function approximation, and applied neural networks",
    link: "",
  },
  {
    title: "Healthcare Data Engineering & ETL Pipelines",
    outlet: "Automated healthcare data workflows, prompt caching, and cost-effective AI model evaluation",
    link: "",
  },
  {
    title: "Full-Stack Development & Mechatronics",
    outlet: "MERN stack applications, sockets and threading, hardware integration, and CAD/3D modeling",
    link: "",
  },
];

export const VOLUNTEER = {
  stats: [
    { value: "50+", label: "Club Members" },
    { value: "230+", label: "Contest Submissions" },
    { value: "55+", label: "Music Students Taught" },
    { value: "3+", label: "Years Volunteering" },
  ],
  orgs: [
    {
      name: "BCA Machine Learning Club",
      role: "Co-founder & Teacher · Sep 2024 - Present",
      desc: "Co-founded a student-run Machine Learning Club with 50+ members, introducing peers to fundamental ML concepts through lessons and hands-on projects. Design and teach beginner and advanced lessons on data analysis, model training, and real-world applications. Host international competition with 230+ submissions, 5+ countries, and ~$1,200 in prizes sponsored by Jane Street, AoPS, NordSec, and more.",
    },
    {
      name: "Rutherford High School Summer Band",
      role: "Volunteer Teacher · Jul 2023 & Jul 2024",
      desc: "Taught 15+ students 5 hours per weekday in small-group settings, focusing on technique, accuracy, and confidence. Co-instructed 40+ students alongside the band director during full-band rehearsals. Assisted with rehearsal planning, music preparation, and daily organization.",
    },
    {
      name: "KIP Senior Center",
      role: "Volunteer · Jul 2023 - Present",
      desc: "Aid with meal service, cleanup, and event preparation for community programs and activities for senior residents. Volunteer multiple days per week during the summer and frequently throughout the school year.",
    },
  ],
};

export const SPORTS = [
  {
    icon: "🎷",
    name: "Marching Band",
    desc: "Alto saxophonist and varsity performer since 2023. Performed across 40+ marching band shows, football games, and competitions; served as a varsity member for 2 years.",
  },
  {
    icon: "🎶",
    name: "Saxophone Ensemble",
    desc: "Advanced musician performing on alto and tenor saxophones in an ensemble focused on advanced classical and contemporary repertoire. Performed at the BCA concert and the Ensemble Prestige showcase.",
  },
  {
    icon: "🎼",
    name: "Concert Band & Wind Ensemble",
    desc: "Consistent woodwind performer across Concert Band and Wind Ensemble ensembles throughout high school at Bergen County Academies.",
  },
  {
    icon: "💼",
    name: "Future Business Leaders of America (FBLA)",
    desc: "App developer and competitive participant since 2025. Designed and programmed a mobile app hub for FBLA students, delivered live competitive demos, and placed 3rd at New Jersey FBLA.",
  },
  {
    icon: "🏆",
    name: "Hackathons & Game Jams",
    desc: "Competes regularly in hackathons and game jams to sharpen rapid prototyping and problem-solving under strict time constraints. Placed 2nd at Ridgehacks (2026), 2nd at HackMHS X (2025), and 2nd at Counterspell Game Jam (2025).",
  },
];

export const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "Java", "C", "JavaScript", "SQL", "Bash"],
  },
  {
    group: "Web Development",
    items: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express.js",
      "MERN Stack",
    ],
  },
  {
    group: "Data Science & ML",
    items: [
      "Pandas",
      "NumPy",
      "TensorFlow",
      "PyTorch",
      "Matplotlib",
      "Reinforcement Learning",
    ],
  },
  {
    group: "Cloud & Developer Tools",
    items: [
      "AWS Certified Cloud Practitioner",
      "Git",
      "GitHub",
      "Fusion 360",
      "CAD",
      "3D Printing",
    ],
  },
  {
    group: "Analytical & Engineering",
    items: [
      "Data Analysis",
      "Statistical Analysis",
      "Data Visualization",
      "Mechatronics",
      "Bioengineering",
      "Signal Processing",
    ],
  },
  {
    group: "Languages",
    items: ["English", "Kannada", "French"],
  },
];

export const EDUCATION = [
  {
    school: "Bergen County Academies",
    location: "Hackensack, NJ",
    level: "Grade 12 (Senior)",
    dates: "2026 - 2027",
    coursework: [
      "Multivariable Calculus",
      "Advanced Topics in Physics",
      "AP Biology",
      "AP Government",
      "Computer Science Capstone",
      "IB Literature & Language II HL",
      "IB Français V HL",
      "Senior Internship",
    ],
  },
  {
    school: "Bergen County Academies",
    location: "Hackensack, NJ",
    level: "Grade 11 (Junior)",
    dates: "2025 - 2026",
    gpa: "4.00/4.00 (Unweighted)",
    coursework: [
      "AP Calculus BC",
      "AP Physics C",
      "Advanced Topics in Computer Science",
      "AP Microeconomics",
      "Cybersecurity I & II",
      "IB Literature & Language I HL",
      "IB Français IV HL",
      "Cloud Certifications",
      "Cracking Coding Interviews",
      "Processors I",
      "Mechatronics Research",
      "20th Century American History",
    ],
  },
  {
    school: "Bergen County Academies",
    location: "Hackensack, NJ",
    level: "Grade 10 (Sophomore)",
    dates: "2024 - 2025",
    gpa: "4.00/4.00 (Unweighted)",
    coursework: [
      "AP Computer Science A & Data Structures",
      "Advanced Math Analysis II",
      "Chemistry",
      "MERN Stack Web Apps (1, 2, 3)",
      "Sockets and Threading",
      "Mechatronics",
      "American Literature II",
      "World History II",
      "Français III",
    ],
  },
  {
    school: "Bergen County Academies",
    location: "Hackensack, NJ",
    level: "Grade 09 (Freshman)",
    dates: "2023 - 2024",
    gpa: "4.00/4.00 (Unweighted)",
    coursework: [
      "Advanced Math Analysis I",
      "Biology",
      "Intro to Computer Science",
      "American Literature I",
      "World History I",
      "Français I/II Accelerated",
      "Foundations of Nanotechnology",
      "Design for 3D Printing",
      "Lets Build a Web Page",
      "Predict Future with Math",
      "MRL-Xploration",
    ],
  },
];

export const TEST_SCORES = [
  {
    exam: "SAT",
    date: "June 2026",
    breakdown: [
      { label: "Math", value: "800/800" },
      { label: "Reading & Writing", value: "750/800" },
      { label: "Total Score", value: "1550/1600" },
    ],
  },
  {
    exam: "Advanced Placement (AP)",
    date: "College Board",
    breakdown: [
      { label: "AP Computer Science A", value: "5" },
      { label: "AP Calculus BC", value: "5" },
      { label: "AP Physics C: Mechanics", value: "5" },
      { label: "AP Physics C: Electricity & Magnetism", value: "5" },
      { label: "AP Microeconomics", value: "5" },
    ],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Work", to: "/work" },
  { label: "Projects", to: "/projects" },
  { label: "Achievements", to: "/awards" },
  { label: "Interests", to: "/publications" },
  { label: "Leadership", to: "/volunteering" },
  { label: "About", to: "/about" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
