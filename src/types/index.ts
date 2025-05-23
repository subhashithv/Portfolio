export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  image: string;
  link: string;
}

export interface Skill {
  id: number;
  name: string;
  icon?: string;
  category: 'machine-learning' | 'programming' | 'frameworks' | 'tools';
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  company?: string;
  location?: string;
}

export interface AnalyticsData {
  visitors: number;
  pageViews: number;
  avgTimeOnSite: string;
  topPages: Array<{ page: string; views: number }>;
}

export interface AdminStats {
  totalVisitors: number;
  activeUsers: number;
  bounceRate: string;
  avgSessionDuration: string;
}