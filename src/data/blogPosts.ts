import { BlogPost } from '../types';
import articleImage from '../assets/Article1.png';
import articleImage2 from '../assets/b1.jpeg';
export const blogPosts: BlogPost[] = [
    {
  id: 1,
  title: "Igniting Curiosity in Young Minds with AI",
  summary: "Sharing my experience conducting an AI awareness session for school students, aiming to inspire and mentor the next generation of innovators.",
  date: "December 2024",
  image: articleImage , // Replace with your own if preferred
  link: "https://www.linkedin.com/pulse/inspiring-next-generation-journey-erode-hindu-kalvi-nilayam-v-x8eic"
},
 {
    id: 2,
    title: "Neuralink's Groundbreaking Wireless Brain-Computer Interface: A New Era in Human-Machine Integration",
    summary: "Neuralink, the pioneering neurotechnology company founded by Elon Musk, has made significant strides in the development of brain-computer interface (BCI) technology.",
    date: "August 2024",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    link: "https://www.linkedin.com/pulse/neuralinks-groundbreaking-wireless-brain-computer-interface-v-cmbsc/?trackingId=PmxBJn73RKCCraaVXRh17Q%3D%3D"
  },

  {
    id: 3,
    title: "Agentic AI: A Game Changer or a Looming Threat?",
    summary: "A deep dive into building efficient architectures that combine multiple language models for better performance.",
    date: "March 2024",
    image: articleImage2,
    link: "https://www.linkedin.com/pulse/agentic-ai-game-changer-looming-threat-subhashith-v-qxl0c/?trackingId=PmxBJn73RKCCraaVXRh17Q%3D%3D"
  },
 
  {
    id: 4,
    title: "Building AI-Powered HR Tools",
    summary: "How we automated resume screening and improved HR efficiency using NLP and machine learning.",
    date: "December 2023",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
    link: "https://github.com/subhashithv/LLM-Career-Guide"
  },

];