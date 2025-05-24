import { Project } from '../types';
import img1 from "../assets/p1.jpeg";
import img2 from "../assets/p2.jpeg";
import img3 from "../assets/p3.jpg";


export const projects: Project[] = [
  {
    id: 1,
    title: "Multi-LLM Integration Platform",
    description: "Built a modular API architecture combining ChatGPT, Claude, and Mistral, optimizing task performance and reducing latency by 25%.",
    technologies: ["Python", "LangChain", "GPT-3.5", "Claude"],
    image: img1,
    link: "https://github.com/subhashithv/fusionai"
  },
  {
    id: 2,
    title: "AI-Powered Resume Parser",
    description: "Fine-tuned NLP models to automate resume screening with 92% accuracy, cutting HR workload by 60%.",
    technologies: ["Spacy","ChromaDB","Gemini", "Python"],
    image: img2,
    link: "https://github.com/subhashithv/LLM-Career-Guide"
  },
  {
    id: 3,
    title: "AI-Powered Git Code Review Backend System",
    description: "Ceated an intelligent backend system that fetches code directly from Git repositories and performs automated reviews. It highlights potential issues, suggests improvements, and ensures adherence to best practices across every commit..",
    technologies: ["GANs", "NodeJS","JavaScript", "Python"],
    image: img3,
    link: "https://github.com/subhashithv/code-fix-backend"
  }
];