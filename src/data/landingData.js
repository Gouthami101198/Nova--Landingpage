export const navigationLinks = [
  { name: 'Subject Tracks', href: '#features' },
  { name: 'Virtual Classroom', href: '#about' },
  { name: 'AI Tutor', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Student Reviews', href: '#testimonials' },
  { name: 'Tuition & Plans', href: '#pricing' },
];

export const trustedSchools = [
  { 
    id: 'dps',
    name: 'DPS R.K. Puram', 
    logo: 'DPS R.K. PURAM',
    category: 'CBSE & JEE Foundation Hub',
    metric: '99.8% Board & JEE Pass Rate',
    badge: 'Apex School Partner',
    description: 'Co-developed advanced CBSE Class 11-12 Physics & JEE Advanced vector mathematics interactive whiteboard modules with college readiness pathways.',
    highlight: 'Integrated IIT-JEE PYQ sandboxes & live proofs',
    tag: 'CBSE, JEE & KVPY'
  },
  { 
    id: 'kota',
    name: 'Kota Olympiad Hub', 
    logo: 'KOTA OLYMPIAD HUB',
    category: 'IIT-JEE & NEET Physics Labs',
    metric: '38,000+ JEE Problems Solved',
    badge: 'Premier Foundation Partner',
    description: 'Direct integration with Kota top-ranker problem sets, allowing students to test Kinematics, Thermodynamics & Electromagnetism in real time.',
    highlight: 'JEE Advanced mock sandboxes embedded in virtual board',
    tag: 'JEE Advanced & NEET'
  },
  { 
    id: 'kvs',
    name: 'Kendriya Vidyalaya Network', 
    logo: 'KVS NETWORK',
    category: 'Foundational Mastery & AI',
    metric: '100% NCERT Exemplar Sync',
    badge: 'National Learning Network',
    description: 'Syllabus mapped to NCERT and NEP 2020 benchmarks, paired with Nova Socratic AI mentor for continuous diagnostic hint scaffolding.',
    highlight: 'Adaptive NCERT skill tree tracking with instant feedback',
    tag: 'NCERT Class 6 to 12'
  },
  { 
    id: 'nps',
    name: 'NPS Bengaluru STEM Guild', 
    logo: 'NPS BENGALURU',
    category: 'Algorithmic Coding & Olympiads',
    metric: 'Top 5 National INMO Pods',
    badge: 'Olympiad Training Hub',
    description: 'Honors-level algorithmic computer science and Indian National Mathematical Olympiad (INMO/PRMO) training pods for ambitious students.',
    highlight: 'Python competitive coding pods with live judge compiler',
    tag: 'INMO & Python Algorithms'
  },
  { 
    id: 'iitb',
    name: 'IIT Bombay STEM Alumni Hub', 
    logo: 'IIT BOMBAY ALUMNI',
    category: 'Computational Physics & AI',
    metric: '15,000+ Capstone Projects',
    badge: 'Tech Mentorship Guild',
    description: 'Rigorous engineering foundation covering web architectures, linear algebra, and robotics with interactive browser sandboxes.',
    highlight: 'Full-stack development labs with peer code review',
    tag: 'Engineering & Systems'
  },
  { 
    id: 'khan_in',
    name: 'Khan Academy India', 
    logo: 'KHAN INDIA ALLIANCE',
    category: 'NEP 2020 Bilingual Mastery',
    metric: 'Free Practice Sync in 5 Languages',
    badge: 'Bilingual Partner',
    description: 'Aligned with NCERT syllabus in English & regional languages, offering Socratic hint scaffolding for conceptual science and math.',
    highlight: 'NEP 2020 mapped competency assessments',
    tag: 'Class 6-10 Mathematics'
  },
];

export const statsData = [
  { 
    value: '94%', 
    label: 'Course Completion Rate', 
    description: '3.8x higher than industry MOOC averages thanks to live interactive whiteboard collaboration and peer study pods.' 
  },
  { 
    value: '350,000+', 
    label: 'Active Indian Learners', 
    description: 'Students across Delhi, Bengaluru, Mumbai, Kota, Hyderabad, Pune, Chennai, and 40+ Indian cities learning every single day.' 
  },
  { 
    value: '6,500+', 
    label: 'Certified Master Teachers', 
    description: 'Top Indian educators, IIT/NIT alumni, and senior CBSE/ICSE faculties passionate about interactive conceptual learning.' 
  },
  { 
    value: '4.9 / 5.0', 
    label: 'Average Student Rating', 
    description: 'Based on 48,000+ verified learner and parent reviews praising our engaging, gamified classroom experience.' 
  },
];

export const featuresData = [
  {
    id: 'classroom',
    category: 'Virtual Classroom',
    title: 'Ultra-HD Live Video & Infinite Collaborative Whiteboard',
    description: 'An interactive virtual canvas where teachers and students sketch diagrams, solve math formulas in real-time, and run live code side-by-side.',
    icon: 'Video',
    badge: '<50ms Canvas Latency',
    metric: 'Real-Time Sync',
    tags: ['Infinite Canvas', 'LaTeX Math Formula Engine', 'In-Browser Code Editor', 'Multi-Cursor Whiteboard']
  },
  {
    id: 'aitutor',
    category: 'AI Tutor',
    title: 'Nova AI Socratic Homework Companion',
    description: 'A patient 24/7 AI mentor that guides learners through difficult homework problems with step-by-step Socratic hints—never just blurting out answers.',
    icon: 'Sparkles',
    badge: '24/7 Socratic Guidance',
    metric: 'Step-by-Step Hints',
    tags: ['Concept Breakdown', 'Adaptive Practice Sets', 'Diagram Explanations', 'Voice & Text Support']
  },
  {
    id: 'gamification',
    category: 'Gamification',
    title: 'Gamified Skill Trees & Daily Study Streaks',
    description: 'Transform rigorous academic learning into an addictive adventure. Earn XP, unlock legendary avatar badges, and maintain study streaks with classmates.',
    icon: 'Trophy',
    badge: 'Addictive Motivation',
    metric: '3.2x Longer Study Time',
    tags: ['XP Leveling System', 'Subject Mastery Badges', 'Classroom Leaderboards', 'Streak Safeguards']
  },
  {
    id: 'breakouts',
    category: 'Virtual Classroom',
    title: 'Dynamic Breakout Pods & Peer Study Lounges',
    description: 'Teachers split students into 3-4 person collaboration pods with a single click. Students share screens, brainstorm on private whiteboards, and request help.',
    icon: 'Users',
    badge: 'Peer-to-Peer Learning',
    metric: '1-Click Pod Dispatch',
    tags: ['Auto-Level Matching', 'Shared Worksheets', 'Teacher Broadcast Mode', 'Safe Audio Channels']
  },
  {
    id: 'quizzes',
    category: 'Interactive Quizzes',
    title: 'Live In-Class Trivia, Polls & Lightning Quizzes',
    description: 'Turn lectures into game shows. Pop surprise interactive quizzes onto student screens with countdown timers, instant score feedback, and class leaderboards.',
    icon: 'HelpCircle',
    badge: '100% Participation',
    metric: 'Instant Comprehension Check',
    tags: ['Gamified Buzzers', 'Real-Time Scoreboards', 'Automated Gradebook Sync', 'Anonymous Polling']
  },
  {
    id: 'teachers',
    category: 'Educator Tools',
    title: 'Teacher Command Center & Automated Rubrics',
    description: 'Eliminate weekend grading. Nova Academy drafts homework feedback, detects learning gaps, and delivers automated weekly progress digests to parents.',
    icon: 'GraduationCap',
    badge: 'Zero Admin Drag',
    metric: '8.5 hrs Saved Weekly',
    tags: ['AI Assisted Grading', 'Parent Weekly Digest', 'Automated Attendance', 'Curriculum Template Library']
  },
];

export const workflowSteps = [
  {
    number: '01',
    title: 'Choose Your Subject Track or Join Your School',
    description: 'Select from comprehensive curriculums in Mathematics, Computer Science, Physics, Chemistry, and Languages—or enter your school room code.',
    badge: '30-Second Match',
    highlights: ['Adaptive Level Diagnostic Test', 'Class 6 through University & JEE/NEET Tracks', 'Join via Single Invite Code']
  },
  {
    number: '02',
    title: 'Dive into Live Interactive Classes & Digital Whiteboards',
    description: 'No boring lectures. Draw on collaborative boards, ask questions via live chat or audio, work through lab simulations, and collaborate in breakout pods.',
    badge: 'Active Immersion',
    highlights: ['Live Multi-User Whiteboard', 'Interactive Code & Science Labs', 'Peer Study Lounges']
  },
  {
    number: '03',
    title: 'Master Concepts, Earn Badges & Accelerate Your Future',
    description: 'Level up your skill tree with Nova AI homework assistance, collect certified course completion credentials, and build an impressive academic portfolio.',
    badge: 'Certified Mastery',
    highlights: ['Verified Diplomas & Badges', '24/7 AI Socratic Tutoring', 'Parent Progress Dashboard']
  }
];

export const testimonialsData = [
  {
    quote: "Traditional coaching in Kota felt overwhelming with 150 students in a batch. In Nova Academy, I solve JEE Advanced vector and calculus problems together on the live board and clear doubts with Socratic AI. My mock score jumped from 140 to 248!",
    author: "Aarav Sharma",
    role: "Class 12 - IIT-JEE Aspirant (99.4 Percentile)",
    school: "DPS R.K. Puram, New Delhi",
    avatar: "",
    metrics: "JEE Mock: 140 → 248",
    tag: "Students"
  },
  {
    quote: "Nova Academy transformed how I conduct Class 11 and 12 Physics masterclasses online. The live collaborative whiteboard, breakout pods for numerical problem-solving, and automated step grading saved me 10 hours every week.",
    author: "Dr. Rajesh Kulkarni",
    role: "Senior Master Faculty (18 yrs exp, ex-Kota)",
    school: "Apex Science Academy, Bengaluru",
    avatar: "",
    metrics: "10 hrs Saved Weekly",
    tag: "Teachers"
  },
  {
    quote: "With my son preparing for Class 10 CBSE Boards and daughter targeting NEET, keeping them consistent was tough. With Nova Academy, they actually compete for study streaks and the weekly WhatsApp/email reports keep me informed without hovering.",
    author: "Sunita Deshmukh",
    role: "Parent of Class 10 & 12 Students",
    school: "Parent Council, South Mumbai",
    avatar: "",
    metrics: "95+ Day Study Streak",
    tag: "Parents"
  }
];

export const pricingPlans = [
  {
    id: 'free',
    name: 'Explorer Pass',
    badge: 'Great for Curious Learners',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'Explore the basics, join public study lounges, and test your knowledge with free community classes across India.',
    features: [
      'Access to open public live masterclasses (2/month)',
      'Community study lounges & peer chat',
      'Basic Nova AI tutor (10 questions daily)',
      'Interactive digital whiteboard viewer',
      'Community forum support',
      'Web & mobile app access'
    ],
    popular: false,
    cta: 'Start Learning for Free',
    note: 'Free forever • No credit card or UPI required'
  },
  {
    id: 'pro',
    name: 'Pro Learner Pass',
    badge: 'Most Popular for CBSE, ICSE & JEE/NEET',
    monthlyPrice: 999,
    annualPrice: 799,
    description: 'Unlimited access to all live interactive classrooms, 24/7 Socratic AI mentor, and verified certificates.',
    features: [
      'Everything in Explorer Pass, plus:',
      'Unlimited live interactive classrooms across all subjects',
      'Unlimited 24/7 Nova AI Socratic Homework Companion',
      'Real-time collaborative whiteboard drawing & code execution',
      'Private 4-student breakout study pods',
      'Full class video recordings & searchable transcripts',
      'Verified certificates of course completion'
    ],
    popular: true,
    cta: 'Start 14-Day Free Pro Trial',
    note: 'Cancel anytime in 1 click • Sibling discounts available'
  },
  {
    id: 'educator',
    name: 'Educator & Coaching Pass',
    badge: 'For Teachers, Tutors & Coaching Hubs',
    monthlyPrice: 2999,
    annualPrice: 2499,
    description: 'Host your own interactive classrooms with powerful AI grading, live quizzes, and parent WhatsApp reporting.',
    features: [
      'Everything in Pro Learner Pass, plus:',
      'Host live classrooms up to 150 students per session',
      'Interactive quiz maker with live leaderboards',
      'AI-assisted homework grading & NEP 2020 rubric generator',
      'Automated weekly parent progress WhatsApp & email digests',
      'Custom institute branding & domain integration',
      'DPDP Act 2023 & ISO 27001 compliant Indian data vault'
    ],
    popular: false,
    cta: 'Create Educator Classroom',
    note: 'Includes 1-on-1 curriculum setup consultation & GST invoice'
  }
];

export const faqData = [
  {
    question: 'How is Nova Academy different from Zoom, Google Meet or generic coaching apps?',
    answer: 'Traditional video calling apps are passive streaming channels. Nova Academy is purpose-built for active Indian STEM education: it combines ultra-low latency live video with an infinite collaborative digital whiteboard, integrated code editor, real-time pop quizzes, smart 4-student breakout pods, and a 24/7 AI Socratic homework mentor.'
  },
  {
    question: 'What curriculums, boards, and competitive exams are covered?',
    answer: 'Nova Academy offers interactive tracks for CBSE, ICSE, and State Boards (Class 6 to 12), as well as dedicated competitive tracks for IIT-JEE (Main & Advanced), NEET, KVPY/NTSE, Indian Math Olympiads (PRMO/RMO/INMO), and Python & Web Development.'
  },
  {
    question: 'How does the Nova AI Homework Companion help without encouraging rote learning?',
    answer: 'Unlike generic AI tools that just output finished answers, Nova AI utilizes the Socratic method. It identifies the student\'s current thought process, asks clarifying questions, provides visual hints and diagrams, and leads the student to solve the problem themselves.'
  },
  {
    question: 'Is Nova Academy compliant with Indian data protection laws and safe for children?',
    answer: 'Yes, 100%. Nova Academy is fully compliant with India\'s Digital Personal Data Protection Act (DPDP Act 2023) and NEP 2020 guidelines. All data is hosted on secure Indian cloud servers, student chat is protected by AI moderation filters, and student data is never monetized.'
  },
  {
    question: 'Can coaching institutes or independent tutors host their own batches?',
    answer: 'Absolutely. With our Educator & Coaching Pass, teachers can create private classrooms, invite students with custom batch codes, upload their own notes, conduct live pop quizzes, and utilize AI grading to save up to 10 hours weekly.'
  }
];

export const footerLinks = {
  tracks: [
    { name: 'CBSE & ICSE Mathematics', href: '#features' },
    { name: 'IIT-JEE & NEET Physics', href: '#features' },
    { name: 'Computer Science & Python', href: '#features' },
    { name: 'Chemistry & Biology Labs', href: '#features' },
    { name: 'Class 6-10 Board Boosters', href: '#features' },
    { name: 'Olympiad & NTSE Track', href: '#features' },
  ],
  features: [
    { name: 'Interactive Digital Whiteboard', href: '#about' },
    { name: 'Nova AI Socratic Tutor', href: '#features' },
    { name: 'Smart Breakout Study Pods', href: '#features' },
    { name: 'Gamified Skill Streaks', href: '#about' },
    { name: 'Live Classroom Simulator', href: '#how-it-works' },
    { name: 'Teacher Command Center', href: '#pricing' },
  ],
  educators: [
    { name: 'Educator Onboarding', href: '#pricing' },
    { name: 'School & Coaching Licensing', href: '#pricing' },
    { name: 'NEP 2020 Curriculum Guide', href: '#how-it-works' },
    { name: 'Automated Grading Rubrics', href: '#features' },
    { name: 'Parent Communication Portal', href: '#about' },
  ],
  company: [
    { name: 'About Nova Academy', href: '#about' },
    { name: 'NEP 2020 Teaching Framework', href: '#about' },
    { name: 'DPDP Act 2023 Data Safety', href: '#about' },
    { name: 'Careers (Hiring Master Educators)', href: '#about' },
    { name: 'Contact Student Support (India)', href: '#pricing' },
  ]
};
