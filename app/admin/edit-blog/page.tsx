"use client";

import Link from "next/link";

import AdminBlogTable from "@/components/admin-blog-table";
import AdminProtectedLayout from "@/components/admin-protected-layout";
import { useGetBlogsQueries } from "@/hooks/quieries/useGetBlogsQueries";

export default function AdminDashboard() {
   const { data, isLoading } = useGetBlogsQueries();
   console.log("Blog data:", data);
   if (isLoading) {
      return <div>Loading...</div>;
   }
   return (
      <AdminProtectedLayout title="Blog Management">
         {/* Header */}
         <div className="border-b border-orange-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
               <div className="flex items-center justify-between">
                  <div>
                     <h1 className="text-3xl font-bold text-orange-900">
                        Blog Management
                     </h1>
                     <p className="text-orange-600 mt-1">
                        Manage all your blog posts
                     </p>
                  </div>
                  <Link
                     href="/admin/create-blog"
                     className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
                  >
                     + New Post
                  </Link>
               </div>
            </div>
         </div>

         {/* Content */}
         <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {data.length === 0 ? (
               <div className="text-center py-12">
                  <p className="text-orange-600 mb-4">
                     No blog posts yet. Create your first post!
                  </p>
                  <Link
                     href="/admin/create-blog"
                     className="inline-block px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
                  >
                     Create First Post
                  </Link>
               </div>
            ) : (
               <AdminBlogTable blogs={data} />
            )}
         </section>
      </AdminProtectedLayout>
   );
}
