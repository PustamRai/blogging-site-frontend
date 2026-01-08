"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import EditBlogForm from "@/components/edit-blog-form";
import AdminProtectedLayout from "@/components/admin-protected-layout";
import type { Blog } from "@/data/blogs";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = params.id as string;
    const foundBlog = blogs.find((b) => b.id === id);

    if (!foundBlog) {
      alert("Blog post not found!");
      router.push("/admin");
      return;
    }

    setBlog(foundBlog);
    setLoading(false);
  }, [params.id, router]);

  if (loading) {
    return (
      <AdminProtectedLayout title="Edit Blog Post">
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
            <p className="text-orange-600 mt-2">Loading blog post...</p>
          </div>
        </div>
      </AdminProtectedLayout>
    );
  }

  if (!blog) {
    return (
      <AdminProtectedLayout title="Edit Blog Post">
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <p className="text-orange-600 mb-4">Blog post not found</p>
            <Link
              href="/admin"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              ← Back to Admin
            </Link>
          </div>
        </div>
      </AdminProtectedLayout>
    );
  }

  return (
    <AdminProtectedLayout title="Edit Blog Post">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/admin"
          className="text-orange-600 hover:text-orange-700 text-sm font-medium"
        >
          ← Back to Admin
        </Link>
        <h1 className="text-3xl font-bold text-orange-900 mt-4 mb-2">
          Edit Blog Post
        </h1>
        <p className="text-orange-600 mb-8">Update your pet care article</p>

        <EditBlogForm initialBlog={blog} />
      </div>
    </AdminProtectedLayout>
  );
}
