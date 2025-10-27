import { useScrollAnimation } from '../hooks/useScrollAnimation';
import BlogCard from './BlogCard';

const BlogSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const blogs = [
    {
      title: 'The AI Revolution in Innovation',
      excerpt: 'Discover how artificial intelligence is transforming the way we think about and develop new ideas.',
      date: 'Oct 20, 2025',
      category: 'AI & Innovation',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'From Thought to Action',
      excerpt: 'Learn how to bridge the gap between having great ideas and actually bringing them to life.',
      date: 'Oct 15, 2025',
      category: 'Productivity',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'The Power of Automated Planning',
      excerpt: 'Explore how automation is changing strategic planning and making execution faster than ever.',
      date: 'Oct 10, 2025',
      category: 'Strategy',
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Human-AI Collaboration',
      excerpt: 'Understanding the synergy between human creativity and artificial intelligence capabilities.',
      date: 'Oct 5, 2025',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Never Lose an Idea Again',
      excerpt: 'Best practices for capturing, organizing, and developing your innovative thoughts.',
      date: 'Sep 28, 2025',
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'The Future of Idea Management',
      excerpt: 'Where is idea development heading? A look at emerging trends and technologies.',
      date: 'Sep 22, 2025',
      category: 'Future Tech',
      image: 'https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="blog" className="py-12 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
           <p className="text-sm font-semibold tracking-widest text-cyan-500 mb-1">BLOG</p>
            <h2 className="text-3xl md:text-3xl font-bold text-primary mb-4">
             <span className="text-gradient">Latest from Syntheseed</span>
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Ideas on product strategy, go-to-market, and founder operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                {...blog}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">
              View All Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
