import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useGetBlogDetailQuery } from "../services/blogApi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { formatPlainTextToHtml, looksLikeHtml } from "../utils/formatText";

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
        <div className="max-w-5xl mx-auto px-6 py-20">
          {/* Image skeleton */}
          <div className="mb-8">
            <div className="w-full rounded-2xl bg-bg-secondary h-56 animate-pulse dark:bg-white/5" />
          </div>

          {/* Title skeleton */}
          <div className="h-10 bg-gray-200/60 dark:bg-white/5 rounded w-3/4 animate-pulse mb-4" />
          <div className="h-4 bg-gray-200/60 dark:bg-white/5 rounded w-1/4 animate-pulse mb-6" />

          {/* Content skeleton */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-200/60 dark:bg-white/5 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200/60 dark:bg-white/5 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200/60 dark:bg-white/5 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200/60 dark:bg-white/5 rounded w-4/6 animate-pulse"></div>
          </div>
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
          <h2 className="text-3xl font-semibold mb-4 text-primary">Blog Not Found</h2>
          <p className="mb-6 text-secondary">We couldn’t find this article. Please try again later.</p>
          <Link to="/blogs" className="btn-primary">
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

        <h1 className="text-4xl font-bold mb-6 text-primary">{blog.title}</h1>
        <p className="text-secondary mb-6">{new Date(blog.created_at).toLocaleDateString()}</p>

        <div className="prose max-w-none text-primary leading-relaxed">
          {blog.content ? (
            looksLikeHtml(blog.content) ? (
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: formatPlainTextToHtml(blog.content) }} />
            )
          ) : (
            <p className="text-secondary">No content available.</p>
          )}
        </div>

        <div className="mt-12">
          <Link to="/blogs" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="btn-primary">
            ← Back to All Blogs
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetail;
