import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useGetBlogDetailQuery } from "../services/blogApi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: blog, isLoading, isError } = useGetBlogDetailQuery(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex justify-center items-center text-gray-600 text-lg">
          Loading blog...
        </div>
        <Footer />
      </>
    );
  }

  if (isError || !blog) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Blog Not Found
          </h2>
          <p className="mb-6 text-gray-500">
            We couldn’t find this article. Please try again later.
          </p>
          <Link
            to="/blogs"
            className="px-5 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
          >
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="max-w-5xl mx-auto px-6 py-20">
        {blog.image && (
          <div className="mb-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full rounded-2xl shadow-md object-cover max-h-[400px]"
            />
          </div>
        )}

        <h1 className="text-4xl font-bold mb-6 text-teal-700">{blog.title}</h1>
        <p className="text-gray-500 mb-6">
          {new Date(blog.created_at).toLocaleDateString()}
        </p>

        <div
          className="prose max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>

        <div className="mt-12">
          <Link
            to="/blogs"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetail;
