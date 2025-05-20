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
    technologies: ["BERT", "ChatGPT", "Python", "FastAPI"],
    image: "https://images.pexels.com/photos/8728556/pexels-photo-8728556.jpeg",
    link: "https://github.com/subhashithv/LLM-Career-Guide"
  },
  {
    id: 3,
    title: "Generative AI Art Workshop",
    description: "Created interactive tools for digital art generation, adopted by 200+ students for creative projects.",
    technologies: ["GANs", "Streamlit", "Python", "React"],
    image: "https://images.pexels.com/photos/8370954/pexels-photo-8370954.jpeg",
    link: "#"
  }
];