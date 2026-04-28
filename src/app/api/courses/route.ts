import { NextResponse } from "next/server";

const courses = [
  {
    id: 1,
    title: "Program Specific",
    category: "program",
    description: "Deep-dive into executive management and leadership excellence.",
    detailedDescription: "Our Program Specific track is designed for high-potential leaders looking to master the nuances of executive decision-making, strategic planning, and organizational behavior.",
    skills: ["Strategic Leadership", "Change Management", "Financial Acumen"],
    image: "/images/program.jpg",
  },
  {
    id: 2,
    title: "Industry Specific",
    category: "industry",
    description: "Vertical-focused training for Finance, Healthcare, and Tech.",
    detailedDescription: "Master the unique challenges of your sector with curated curriculum that addresses industry-specific regulatory environments, market trends, and technological shifts.",
    skills: ["Sector Analysis", "Compliance", "Industry Roadmap"],
    image: "/images/industry.jpg",
  },
  {
    id: 3,
    title: "Topic Specific",
    category: "topic",
    description: "Master AI, Data Science, and Product Management.",
    detailedDescription: "Stay ahead of the curve by specializing in the most in-demand technical and business topics of the modern digital era. Practical, hands-on learning modules.",
    skills: ["AI Foundations", "Data Storytelling", "Product Strategy"],
    image: "/images/topic.jpg",
  },
  {
    id: 4,
    title: "Level Specific",
    category: "level",
    description: "From Foundation to Advanced Professional tracks.",
    detailedDescription: "Whether you are onboarding new talent or up-skilling senior executives, our Level Specific pathways ensure the content matches the learner's seniority and experience.",
    skills: ["Career Progression", "Advanced Analytics", "Foundational Business"],
    image: "/images/level.jpg",
  },
];

export async function GET() {
  return NextResponse.json(courses);
}
