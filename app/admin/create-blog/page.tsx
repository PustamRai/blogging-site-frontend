"use client";

import CreateBlogForm from "@/components/create-blog-form";
import AdminProtectedLayout from "@/components/admin-protected-layout";
import { useAuthGuard } from "@/hooks/isAuth";

export default function CreateBlogPage() {
   return (
      <AdminProtectedLayout title="Create Blog Post">
         <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-orange-900 mb-2">
               Create New Blog Post
            </h1>
            <p className="text-orange-600 mb-8">
               Write and publish a new pet care article
            </p>

            <CreateBlogForm />
         </div>
      </AdminProtectedLayout>
   );
}
