export interface Blog {
  id: number;
  title: string;
  slug: string;
  category?: string;
  summary?: string;
<<<<<<< HEAD
  excerpt?: string;       // optional fallback you added
  content?: string;       // CKEditor HTML (optional)
  image?: string;         // absolute URL returned by API
  created_at: string;     // timestamp string
=======
  excerpt?: string;
  content?: string;
  image?: string;
  created_at: string;
>>>>>>> 34e22e8c6e4c81178e7abef78c43c5cbc4f18ab0
}

export interface Career {
  id: number;
  title: string;
  department: string;
  location: string;
<<<<<<< HEAD
  work_mode: string;      // Remote / Hybrid / Onsite
  job_type: string;       // Full-time / Part-time / etc.
  description?: string;   // CKEditor HTML
  short_description?: string; // optional preview
  details?: string;       // CKEditor HTML for Job Role page
  posted_on: string;      // date string
  tags?: string;          // comma-separated tags
}
=======
  work_mode: string;
  job_type: string;
  description?: string;
  short_description?: string;
  details?: string;
  posted_on: string;
  tags?: string;
}

>>>>>>> 34e22e8c6e4c81178e7abef78c43c5cbc4f18ab0
