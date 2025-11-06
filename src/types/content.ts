export interface Blog {
  id: number;
  title: string;
  slug: string;
  category?: string;
  summary?: string;
  excerpt?: string;
  content?: string;
  image?: string;
  created_at: string;
}

export interface Career {
  id: number;
  title: string;
  department: string;
  location: string;
  work_mode: string;
  job_type: string;
  description?: string;
  short_description?: string;
  details?: string;
  posted_on: string;
  tags?: string;
}

