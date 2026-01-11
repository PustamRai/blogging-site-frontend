"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useGetBlogsByIdQueries } from "@/hooks/quieries/useGetBlogsQueries";
import { useUpdateBlogsMutation } from "@/hooks/mutations/useSignUpMutations";

export default function BlogPostPage() {
   const { id } = useParams<{ id: string }>();
   const { data, isLoading } = useGetBlogsByIdQueries(id);
   const { mutate } = useUpdateBlogsMutation();
   console.log("Single Blog data:", data);
   if (isLoading) return <p className="text-center py-10">Loading...</p>;
   if (!data) notFound();

   return (
      <div className="min-h-screen bg-linear-to-b from-orange-50 to-white">
         {/* Header */}
         <header className="border-b border-orange-100">
            <div className="max-w-3xl mx-auto px-4 py-6">
               <Link
                  href="/blog"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
               >
                  ← Back to Blog Dashboard
               </Link>
            </div>
         </header>

         {/* Main Content */}
         <main className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-orange-900 mb-6">
               {data.title}
            </h1>

            {/* Optional Featured Image */}
            {data.imageUrl && (
               <div className="relative w-full h-64 sm:h-96 mb-6 rounded-lg overflow-hidden border border-orange-100">
                  <Image
                     src={data.imageUrl ?? "/placeholder.svg"}
                     alt={data.title}
                     fill
                     className="object-cover"
                     priority
                  />
               </div>
            )}

            <div className="prose prose-orange max-w-none">
               <p>{data.content}</p>
            </div>
         </main>
      </div>
   );
}
