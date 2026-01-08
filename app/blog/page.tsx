"use client";

import Link from "next/link";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/blog-card";
import { useGetBlogsQueries } from "@/hooks/quieries/useGetBlogsQueries";

// export const metadata = {
//    title: "Blogging sites Blog - All Posts",
//    description:
//       "Browse all pet care articles, training guides, and health tips on Blogging sites Blog.",
// };

export default function BlogDashboard() {
  const { data, isLoading } = useGetBlogsQueries();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("Blog data:", data);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="text-orange-600 hover:text-orange-700 text-sm font-medium"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-orange-900 mt-4">
            Blog Dashboard
          </h1>
          {/*<p className="text-orange-600">
            Explore all pet care articles and guides
          </p>*/}
        </div>
      </header>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <BlogCard blog={blog} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
