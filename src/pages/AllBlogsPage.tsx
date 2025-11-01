import { useGetBlogsQuery } from "../services/blogApi";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

const AllBlogs = () => {
  const { data: blogs = [], isLoading } = useGetBlogsQuery(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top on load
  }, []);

  const handleReadMore = (slug: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/blogs/${slug}`);
  };

  return (
    <>
      <Header />
      <section className="py-20 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-teal-500 font-semibold uppercase tracking-widest mb-2">
            All Articles
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-3">
            Explore Our Blog Library
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Insights on AI, product strategy, and technology innovation.
          </p>

          {isLoading ? (
            <p className="text-gray-500 text-lg">Loading blogs...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog: any) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl border border-teal-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-teal-100 text-teal-600 text-xs font-semibold px-3 py-1 rounded-full">
                        {blog.category || "Innovation"}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {new Date(blog.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                      {blog.excerpt || "Read this detailed article for insights."}
                    </p>

                    <button
                      onClick={() => handleReadMore(blog.slug)}
                      className="text-teal-600 font-medium hover:text-teal-700 mt-auto flex items-center gap-1"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllBlogs;
