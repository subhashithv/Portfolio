import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Multi-LLM Integration Platform",
    description: "Built a modular API architecture combining ChatGPT, Claude, and Mistral, optimizing task performance and reducing latency by 25%.",
    technologies: ["Python", "LangChain", "GPT-3.5", "Claude"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    link: "https://github.com/subhashithv/fusionai"
  },
  {
    id: 2,
    title: "AI-Powered Resume Parser",
    description: "Fine-tuned NLP models to automate resume screening with 92% accuracy, cutting HR workload by 60%.",
    technologies: ["Spacy","ChromaDB","Gemini", "Python"],
    image: "https://images.pexels.com/photos/8728556/pexels-photo-8728556.jpeg",
    link: "https://github.com/subhashithv/LLM-Career-Guide"
  },
  {
    id: 3,
    title: "AI-Powered Git Code Review Backend System",
    description: "Ceated an intelligent backend system that fetches code directly from Git repositories and performs automated reviews. It highlights potential issues, suggests improvements, and ensures adherence to best practices across every commit..",
    technologies: ["GANs", "NodeJS","JavaScript", "Python"],
    image: "https://images.pexels.com/photos/8370954/pexels-photo-8370954.jpeg",
    link: "https://github.com/subhashithv/code-fix-backend"
  }
];