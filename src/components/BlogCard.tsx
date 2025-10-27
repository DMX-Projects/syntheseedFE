import { Calendar, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  delay?: number;
}

const BlogCard = ({ title, excerpt, date, category, image, delay = 0 }: BlogCardProps) => {
  return (
    <div
      className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-48 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-500 text-sm rounded-full">
            {category}
          </span>
          <div className="flex items-center text-sm text-secondary">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
        </div>

        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-cyan-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-secondary leading-relaxed mb-4">{excerpt}</p>

        <button className="flex items-center text-cyan-500 font-medium group-hover:gap-2 transition-all duration-300">
          Read More
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
