import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  delay?: number;
}

const BlogCard = ({ title, excerpt, date, category, image, slug, delay = 0 }: BlogCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <p className="text-sm text-cyan-500 font-medium mb-1">{category}</p>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button
          onClick={() => navigate(`/blogs/${slug}`)} // ✅ navigates to correct route
          className="text-cyan-600 hover:text-cyan-800 font-semibold"
        >
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
