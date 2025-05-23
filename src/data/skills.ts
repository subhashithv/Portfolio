import { Skill } from '../types';

export const skills: Skill[] = [
  // Machine Learning & Deep Learning
  { id: 1, name: "TensorFlow", category: "machine-learning" },
  { id: 2, name: "PyTorch", category: "machine-learning" },
  { id: 3, name: "Hugging Face Transformers", category: "machine-learning" },
  { id: 4, name: "LangChain", category: "machine-learning" },
  { id: 5, name: "OpenAI GPT-4", category: "machine-learning" },
  { id: 6, name: "Google Gemini", category: "machine-learning" },
  { id: 7, name: "Llama-2", category: "machine-learning" },
  { id: 8, name: "ChromaDB", category: "machine-learning" },
  { id: 9, name: "Sentence Transformers", category: "machine-learning" },

  // Programming Languages
  { id: 10, name: "Python", category: "programming" },
  { id: 11, name: "TypeScript", category: "programming" },
  { id: 12, name: "SQL", category: "programming" },

  // Frameworks
  { id: 13, name: "FastAPI", category: "frameworks" },
  { id: 14, name: "Streamlit", category: "frameworks" },
  { id: 15, name: "React", category: "frameworks" },

  // Tools & DevOps (ML-Relevant Only)
  { id: 16, name: "Docker", category: "tools" },
  { id: 17, name: "Weights & Biases", category: "tools" },
  { id: 18, name: "MLflow", category: "tools" },
  { id: 19, name: "Git", category: "tools" },
  { id: 20, name: "Python-dotenv", category: "tools" },
];
