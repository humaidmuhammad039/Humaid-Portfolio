/**
 * Central portfolio data — built from Humaid Muhammad's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless Humaid has stated it.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Humaid Muhammad',
  displayName: 'Humaid Muhammad',
  firstName: 'HUMAID',
  seriesTag: 'ASPIRING ENGINEER',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A MUHAMMAD ORIGINAL',
  role: 'Aspiring Cloud Engineer',
  tagline: ['Aspiring Cloud Engineer', 'Networking', 'Embedded Systems'],
  intro:
    'A Computer Systems Engineering student at UET Peshawar (Class of 2028) and Hafiz-e-Quran, building networks, low-level systems and embedded projects on the road to cloud engineering.',
  location: 'Peshawar',
  country: 'Pakistan',
  email: '24pwcse2376@uetpeshawar.edu.pk',
  links: {
    linkedin: 'https://www.linkedin.com/in/humaidmuhammad-368456355',
    github: 'https://github.com/humaidmuhammad039',
  },
  resumePdf: '/assets/Humaid_Muhammad_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Humaid Muhammad',
  },
  interests: ['Embedded Systems', 'Networking', 'AWS'],
};

export const education = [
  {
    school: 'University of Engineering & Technology (UET)',
    place: 'Peshawar',
    degree: 'BS Computer Systems Engineering',
    period: 'October 2024 – 2028 (Expected)',
    score: 'Class of 2028',
  },
  {
    school: 'FSc Pre-Medical',
    place: 'Pakistan',
    degree: 'Higher Secondary School Certificate',
    period: 'Completed 2023',
    score: 'District 3rd Position',
  },
];

export const experience = [
  {
    company: 'Battagram Engineers Society (BES)',
    role: 'Vice President',
    place: 'Battagram',
    period: 'Present',
    points: [
      'Coordinate initiatives promoting collaboration, leadership, and professional development among engineering students.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when there is no public repository — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'campus-network',
    title: 'Segmented Campus Network',
    year: 'Academic Project',
    genre: 'Networking • Cisco Packet Tracer',
    logline: 'A VLAN-segmented network for a masjid/madrassah campus, defended in a 135+ question viva.',
    stack: ['Cisco Packet Tracer', 'VLANs', 'DHCP', 'DNS', 'ACLs'],
    build: [
      'Designed a segmented network architecture for a campus (masjid/madrassah) environment, implementing VLANs to isolate traffic by function and department.',
      'Configured Router-on-a-Stick for inter-VLAN routing, along with DHCP for automated addressing, DNS resolution, and ACL-based access control policies.',
      'Presented and defended the design in a structured technical viva covering 135+ networking questions.',
    ],
    features: ['VLAN traffic isolation by function', 'Router-on-a-Stick inter-VLAN routing', 'DHCP automated addressing', 'DNS resolution', 'ACL-based access control'],
    metrics: [
      { value: '135+', label: 'viva questions defended' },
      { value: '5', label: 'networking techniques combined' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'office-network',
    title: 'Flat Single-Subnet Office Network',
    year: 'CSE-203L Networking Lab',
    genre: 'Networking • Documentation',
    logline: 'A single-subnet office topology, fully documented from addressing to device configuration.',
    stack: ['Cisco Packet Tracer', 'IP Addressing', 'Technical Reporting'],
    build: ['Designed and documented a single-subnet office network topology, producing a full technical report covering IP addressing, device configuration, and topology rationale.'],
    features: ['Single-subnet topology', 'IP addressing plan', 'Device configuration', 'Full technical report'],
    metrics: [
      { value: '1', label: 'subnet, fully documented' },
      { value: 'Lab', label: 'CSE-203L' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'memory-allocator',
    title: 'Custom Memory Allocator',
    year: 'Operating Systems Lab',
    genre: 'Systems • C',
    logline: 'A bitmap-based allocator in C comparing three block placement strategies.',
    stack: ['C', 'Bitmaps', 'Memory Management'],
    build: [
      'Implemented a bitmap-based memory allocator in C supporting three block placement strategies: first-fit, best-fit, and worst-fit.',
      'Analyzed and compared fragmentation behavior and allocation efficiency across the three strategies.',
    ],
    features: ['Bitmap block tracking', 'First-fit placement', 'Best-fit placement', 'Worst-fit placement', 'Fragmentation comparison'],
    metrics: [
      { value: '3', label: 'placement strategies' },
      { value: 'C', label: 'built from scratch' },
    ],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'dijkstra',
    title: "Dijkstra's Shortest Path",
    year: 'CSE-210L DSA Lab',
    genre: 'Algorithms • C++',
    logline: "Dijkstra's algorithm in C++98-compatible code with complexity analysis and a full lab report.",
    stack: ['C++98', 'Graph Algorithms', 'Dev-C++'],
    build: ["Implemented Dijkstra's algorithm in C++98-compatible code (Dev-C++ environment), including complexity analysis and a full lab report."],
    features: ['C++98-compatible code', 'Graph shortest path', 'Complexity analysis', 'Full lab report'],
    metrics: [
      { value: 'C++98', label: 'compatible code' },
      { value: 'Lab', label: 'CSE-210L' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'toll-gate',
    title: 'Automatic Toll Gate System',
    year: 'Independent Hardware Project',
    genre: 'Embedded • Arduino',
    logline: 'An Arduino prototype that detects approaching vehicles and opens and closes the gate automatically.',
    stack: ['Arduino', 'Breadboard', 'Sensors'],
    build: ['Designed and built an automatic toll gate prototype using Arduino, a breadboard, and electronic sensors to detect approaching vehicles and control the gate opening and closing process automatically.'],
    features: ['Vehicle detection with sensors', 'Automatic gate open / close', 'Arduino control logic', 'Breadboard prototype'],
    metrics: [
      { value: 'Arduino', label: 'controller' },
      { value: '100%', label: 'automatic gate control' },
    ],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'vacuum-robot',
    title: 'Vacuum Cleaner Robot Car',
    year: 'Independent Embedded Project',
    genre: 'Embedded • Robotics',
    logline: 'An Arduino robot car that moves autonomously with a built-in vacuum mechanism.',
    stack: ['Arduino', 'Motor Driver', 'DC Motors'],
    build: ['Developed an Arduino-based robotic vacuum cleaner car capable of autonomous movement, integrating DC motors, a motor driver, and a vacuum mechanism to demonstrate embedded systems, robotics, and automation concepts.'],
    features: ['Autonomous movement', 'DC motors with motor driver', 'Vacuum mechanism', 'Embedded systems and automation'],
    metrics: [
      { value: 'Arduino', label: 'controller' },
      { value: 'DC', label: 'motor-driven' },
    ],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'tenants',
  },
  {
    id: 'fake-news',
    title: 'Fake News Detector Website',
    year: 'Social Action Project',
    genre: 'Web • Machine Learning',
    logline: 'A web platform that uses machine learning to help people spot misleading news articles.',
    stack: ['Web Development', 'Machine Learning'],
    build: ['Developed a web-based fake news detection platform to help users identify potentially misleading news articles by leveraging machine learning techniques, promoting digital literacy and awareness against misinformation.'],
    features: ['Machine-learning detection', 'Web-based interface', 'Digital literacy focus'],
    metrics: [
      { value: 'ML', label: 'powered detection' },
      { value: 'Web', label: 'accessible to anyone' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  { id: 'hafiz', title: 'Hafiz-e-Quran', org: 'Hifz • 2019', detail: 'Graduated from Hifz in 2019, completing memorisation of the Quran.', laurel: 'Hifz 2019' },
  { id: 'tajweed', title: 'Tajweed Graduate', org: 'Tajweed • 2023', detail: 'Graduated in Tajweed in 2023.', laurel: 'Tajweed 2023' },
  { id: 'honhaar', title: 'Punjab Honhaar Scholar', org: 'Punjab Honhaar Scholarship', detail: 'Awarded the Punjab Honhaar Scholarship.', laurel: 'Scholar' },
  { id: 'district-third', title: 'District 3rd Position', org: 'FSc • 2023', detail: 'Secured 3rd position in the district in FSc 2023.', laurel: 'District Top 3' },
  { id: 'bes-vp', title: 'Vice President', org: 'Battagram Engineers Society', detail: 'Coordinating initiatives for collaboration, leadership and professional development among engineering students.', laurel: 'Leadership' },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Cisco', name: 'Network Technician Certification' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'networking',
    title: 'Networking',
    subtitle: 'Design labs in Cisco Packet Tracer',
    skills: [
      { name: 'Cisco Packet Tracer', mono: 'PT', note: 'Primary' },
      { name: 'VLANs', mono: 'VL' },
      { name: 'Inter-VLAN Routing', mono: 'IR' },
      { name: 'DHCP', mono: 'DH' },
      { name: 'DNS', mono: 'DN' },
      { name: 'ACLs', mono: 'AC' },
      { name: 'Subnetting', mono: 'SN' },
      { name: 'OSI / TCP-IP', mono: 'OS' },
      { name: 'Wireshark', mono: 'WS' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming & DSA',
    subtitle: 'Low-level and algorithmic work',
    skills: [
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
      { name: 'Graph Algorithms', mono: 'GA' },
      { name: 'Memory Management', mono: 'MM' },
    ],
  },
  {
    id: 'os',
    title: 'Operating Systems',
    subtitle: 'How the machine shares itself',
    skills: [
      { name: 'Linux Fundamentals', mono: 'Lx' },
      { name: 'Memory Allocation', mono: 'MA' },
      { name: 'Processes & Threads', mono: 'Th' },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    subtitle: 'Hardware that responds',
    skills: [
      { name: 'Arduino', mono: 'Ar' },
      { name: 'Sensors', mono: 'Se' },
      { name: 'Motor Drivers', mono: 'MD' },
      { name: 'Breadboard Prototyping', mono: 'BP' },
    ],
  },
  {
    id: 'practice',
    title: 'Tools & Practice',
    subtitle: 'How the work gets done',
    skills: [
      { name: 'AI-Assisted Development', mono: 'AI' },
      { name: 'Prompt Engineering', mono: 'PE' },
      { name: 'Technical Documentation', mono: 'TD' },
      { name: 'MS Office', mono: 'MO' },
    ],
  },
  {
    id: 'next',
    title: 'Coming Soon',
    subtitle: 'The focus areas I am building toward',
    skills: [
      { name: 'Embedded Systems', mono: 'ES', note: 'Goal' },
      { name: 'Networking', mono: 'NW', note: 'Goal' },
      { name: 'AWS', mono: 'AW', note: 'Goal' },
    ],
  },
];

/** Where a skill appears in the projects on the resume (shown on hover/tap). */
export const skillEvidence: Record<string, string[]> = {
  'Cisco Packet Tracer': ['Segmented Campus Network', 'Flat Single-Subnet Office Network'],
  VLANs: ['Segmented Campus Network'],
  'Inter-VLAN Routing': ['Segmented Campus Network'],
  DHCP: ['Segmented Campus Network'],
  DNS: ['Segmented Campus Network'],
  ACLs: ['Segmented Campus Network'],
  Subnetting: ['Flat Single-Subnet Office Network'],
  C: ['Custom Memory Allocator'],
  'C++': ["Dijkstra's Shortest Path"],
  'Graph Algorithms': ["Dijkstra's Shortest Path"],
  'Memory Management': ['Custom Memory Allocator'],
  'Memory Allocation': ['Custom Memory Allocator'],
  Arduino: ['Automatic Toll Gate System', 'Vacuum Cleaner Robot Car'],
  Sensors: ['Automatic Toll Gate System'],
  'Motor Drivers': ['Vacuum Cleaner Robot Car'],
  'Breadboard Prototyping': ['Automatic Toll Gate System'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2019 – 2023',
    synopsis: 'Hifz, Tajweed and pre-medical studies — discipline and self-directed learning before engineering.',
    episodes: [
      { code: 'S01 E01', title: 'The Hafiz', description: 'Graduated from Hifz in 2019, becoming a Hafiz-e-Quran.', tags: ['Hifz', 'Hafiz-e-Quran'], runtime: '2019', palette: amber },
      { code: 'S01 E02', title: 'The Pre-Med Years', description: 'FSc Pre-Medical, finishing in 2023 with District 3rd Position.', tags: ['FSc', 'Pre-Medical', 'District 3rd'], runtime: 'Completed 2023', palette: jade },
      { code: 'S01 E03', title: 'The Reciter', description: 'Graduated in Tajweed in 2023.', tags: ['Tajweed'], runtime: '2023', palette: violet },
      { code: 'S01 E04', title: 'The Scholar', description: 'Awarded the Punjab Honhaar Scholarship.', tags: ['Scholarship', 'Punjab Honhaar'], runtime: 'Scholarship', palette: crimson },
    ],
  },
  {
    number: 2,
    title: 'The Pivot',
    period: 'October 2024 – Present',
    synopsis: 'From pre-medical to BS Computer Systems Engineering at UET Peshawar.',
    episodes: [
      { code: 'S02 E01', title: 'The Switch', description: 'Began BS Computer Systems Engineering at UET Peshawar — Class of 2028.', tags: ['BS CSE', 'UET Peshawar'], runtime: 'Oct 2024 – 2028', palette: ocean },
      { code: 'S02 E02', title: 'The Network', description: 'Computer Communication & Networks: VLANs, inter-VLAN routing, DHCP, DNS and ACLs in Cisco Packet Tracer.', tags: ['Networking', 'Packet Tracer'], runtime: 'Coursework', palette: ocean },
      { code: 'S02 E03', title: 'The Machine', description: 'Operating Systems, Data Structures & Algorithms and Digital Logic Design — a custom memory allocator and Dijkstra in C++.', tags: ['OS', 'DSA', 'Digital Logic'], runtime: 'Coursework', palette: violet },
      { code: 'S02 E04', title: 'The Viva', description: 'Defended the Segmented Campus Network design in a viva covering 135+ networking questions.', tags: ['Viva', '135+ questions'], runtime: 'Academic Project', palette: crimson },
    ],
  },
  {
    number: 3,
    title: 'Building in Public',
    period: 'Present',
    synopsis: 'Certifications, leadership, community events and hands-on builds.',
    episodes: [
      { code: 'S03 E01', title: 'The Certified', description: 'Earned the Cisco Network Technician Certification.', tags: ['Cisco', 'Networking'], runtime: 'Certification', palette: ocean },
      { code: 'S03 E02', title: 'The Leader', description: 'Vice President of the Battagram Engineers Society, coordinating student-led technical and professional development initiatives.', tags: ['Leadership', 'BES'], runtime: 'Present', palette: amber },
      { code: 'S03 E03', title: 'The Copilot Day', description: 'Participated in GitHub Copilot Dev Days.', tags: ['GitHub Copilot', 'Community'], runtime: 'Event', palette: jade },
      { code: 'S03 E04', title: 'The Conference', description: 'Participated in ICCIOT 2026 — the International Conference on Computing, IoT and related technologies.', tags: ['ICCIOT 2026', 'IoT'], runtime: '2026', palette: violet },
      { code: 'S03 E05', title: 'The Makers', description: 'Independent Arduino builds: an automatic toll gate and a vacuum cleaner robot car.', tags: ['Arduino', 'Embedded'], runtime: 'Independent Projects', palette: crimson },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'The specialty', title: 'Networking', detail: 'Packet Tracer • VLANs • ACLs • DHCP • DNS', palette: ocean },
  { label: 'Biggest defense', title: 'Campus Network', detail: '135+ question technical viva', palette: crimson },
  { label: 'Under the hood', title: 'Memory Allocator', detail: 'First-fit • best-fit • worst-fit in C', palette: violet },
  { label: 'Credential', title: 'Cisco Network Technician', detail: 'Certified', palette: jade },
  { label: 'Leadership', title: 'Vice President, BES', detail: 'Battagram Engineers Society', palette: amber },
  { label: 'Before engineering', title: 'Hafiz-e-Quran', detail: 'Hifz 2019 • Tajweed 2023', palette: amber },
  { label: 'Recognition', title: 'Punjab Honhaar', detail: 'Scholar • District 3rd, FSc 2023', palette: jade },
  { label: 'Current focus', title: 'Embedded • Networking • AWS', detail: 'The next seasons', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'BS Computer Systems Engineering', lines: ['UET Peshawar', 'October 2024 – 2028 (Expected)'], chips: ['Class of 2028'] },
  { kicker: 'Skills', title: 'Networks first.', lines: ['Cisco Packet Tracer · VLANs · ACLs · DHCP · DNS', 'C, C++ · Linux fundamentals · Arduino'], chips: ['Networking', 'C / C++', 'Linux', 'Arduino'] },
  { kicker: 'Projects', title: 'Seven Originals', lines: ['Segmented Campus Network — 135+ viva questions', 'Custom Memory Allocator — 3 placement strategies', 'Arduino toll gate and robot car'] },
  { kicker: 'Leadership', title: 'Vice President', lines: ['Battagram Engineers Society', 'GitHub Copilot Dev Days · ICCIOT 2026'] },
  { kicker: 'Honors', title: 'Beyond the screen', lines: ['Hafiz-e-Quran · Hifz 2019, Tajweed 2023', 'Punjab Honhaar Scholar · District 3rd, FSc 2023'] },
  { kicker: 'Certified', title: 'Cisco Network Technician', lines: ['Certified'] },
  { kicker: 'Current mission', title: 'Now building toward', lines: ['Embedded Systems · Networking · AWS'] },
];

export type ProfileId = 'humaid' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  { id: 'humaid', name: 'Humaid', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Resume, achievements & skills first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Engineer', blurb: 'Projects, stack & GitHub first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Visitor', blurb: 'The story arc & highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & leadership', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • UET Peshawar`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certification`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
