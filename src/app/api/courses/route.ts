import { NextResponse } from "next/server";

const courses = [
  // Program Specific
  {
    id: 1,
    title: "Executive Leadership",
    category: "program",
    description: "Deep-dive into executive management and leadership excellence.",
    detailedDescription: "Our Program Specific track is designed for high-potential leaders looking to master the nuances of executive decision-making.",
    skills: ["Strategic Leadership", "Change Management"],
    image: "/images/program.jpg",
  },
  {
    id: 5,
    title: "Product Management Elite",
    category: "program",
    description: "Master the art of building and scaling world-class products.",
    detailedDescription: "A comprehensive program for aspiring and senior product managers.",
    skills: ["Product Strategy", "Market Analysis"],
    image: "/images/program.jpg",
  },
  {
    id: 6,
    title: "Digital Transformation Strategy",
    category: "program",
    description: "Lead your organization through the digital age.",
    detailedDescription: "Learn how to leverage technology to drive business value and innovation.",
    skills: ["Digital Maturity", "Innovation Frameworks"],
    image: "/images/program.jpg",
  },
  // Industry Specific
  {
    id: 2,
    title: "FinTech Innovation",
    category: "industry",
    description: "Vertical-focused training for the financial services sector.",
    detailedDescription: "Master the unique challenges of the FinTech sector with curated curriculum.",
    skills: ["Blockchain", "Digital Banking"],
    image: "/images/industry.jpg",
  },
  {
    id: 7,
    title: "HealthTech Systems",
    category: "industry",
    description: "Transforming healthcare through digital solutions.",
    detailedDescription: "Explore the intersection of medicine and technology.",
    skills: ["EHR Systems", "Telemedicine"],
    image: "/images/industry.jpg",
  },
  {
    id: 8,
    title: "Retail Digitalization",
    category: "industry",
    description: "Modernizing the retail experience with AI and Data.",
    detailedDescription: "Scale your retail business in the e-commerce era.",
    skills: ["Omnichannel", "Inventory AI"],
    image: "/images/industry.jpg",
  },
  // Topic Specific
  {
    id: 3,
    title: "Advanced AI & ML",
    category: "topic",
    description: "Master Generative AI, LLMs, and Machine Learning.",
    detailedDescription: "Stay ahead of the curve by specializing in the most in-demand technical topics.",
    skills: ["PyTorch", "Prompt Engineering"],
    image: "/images/topic.jpg",
  },
  {
    id: 9,
    title: "Data Science Masters",
    category: "topic",
    description: "End-to-end data science and engineering for enterprises.",
    detailedDescription: "Turn raw data into actionable business intelligence.",
    skills: ["Big Data", "Predictive Modeling"],
    image: "/images/topic.jpg",
  },
  {
    id: 10,
    title: "Cybersecurity Excellence",
    category: "topic",
    description: "Protecting enterprise assets in a connected world.",
    detailedDescription: "Build robust security frameworks for your organization.",
    skills: ["Ethical Hacking", "Risk Management"],
    image: "/images/topic.jpg",
  },
  // Level Specific
  {
    id: 4,
    title: "Foundational Digital Literacy",
    category: "level",
    description: "Essential skills for the modern digital workforce.",
    detailedDescription: "Upskill your entire workforce with basic digital competencies.",
    skills: ["Cloud Basics", "Data Awareness"],
    image: "/images/level.jpg",
  },
  {
    id: 11,
    title: "Mid-Level Management",
    category: "level",
    description: "Bridging the gap between execution and strategy.",
    detailedDescription: "Empower your managers to lead teams effectively in a remote-first world.",
    skills: ["Team Dynamics", "Performance Tracking"],
    image: "/images/level.jpg",
  },
  {
    id: 12,
    title: "Senior Executive Summit",
    category: "level",
    description: "Visionary leadership for C-suite and Board members.",
    detailedDescription: "High-level strategic sessions for top organizational leaders.",
    skills: ["Board Governance", "Global Strategy"],
    image: "/images/level.jpg",
  },
];

export async function GET() {
  return NextResponse.json(courses);
}
