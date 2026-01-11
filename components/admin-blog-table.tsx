"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Trash2, Edit2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BlogSimple {
   id: number;
   title: string;
   content: string;
   authorId: number;
   image?: string;
}

interface AdminBlogTableProps {
   blogs: BlogSimple[];
}

export default function AdminBlogTable({
   blogs: initialBlogs,
}: AdminBlogTableProps) {
   const [blogs, setBlogs] = useState<BlogSimple[]>(initialBlogs);
   const [deletingId, setDeletingId] = useState<number | null>(null);

   const handleDelete = (id: number) => {
      if (window.confirm("Are you sure you want to delete this post?")) {
         setDeletingId(id);
         setBlogs(blogs.filter((b) => b.id !== id));
         alert("Blog post deleted successfully!");
      }
   };

   return (
      <div className="space-y-4">
         {blogs.length === 0 ? (
            <Card className="p-6 text-center border-orange-100">
               <p className="text-orange-600">No blog posts to display</p>
            </Card>
         ) : (
            blogs.map((blog) => (
               <Card
                  key={blog.id}
                  className="border-orange-100 hover:shadow-md transition-shadow overflow-hidden"
               >
                  <div className="flex flex-col sm:flex-row gap-4 p-4">
                     {/* Blog Image */}
                     <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-orange-100 flex-shrink-0">
                        <Image
                           src={blog.image || "/placeholder.svg"}
                           alt={blog.title}
                           fill
                           className="object-cover"
                        />
                     </div>

                     {/* Blog Info */}
                     <div className="flex-1 flex flex-col justify-between">
                        <div>
                           <h3 className="text-lg font-bold text-orange-900 mb-2">
                              {blog.title}
                           </h3>
                           <p className="text-orange-700 text-sm line-clamp-2">
                              {blog.content}
                           </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 mt-4 flex-wrap">
                           <Link href={`/blog/${blog.id}`}>
                              <Button
                                 variant="outline"
                                 size="sm"
                                 className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                              >
                                 <Eye className="w-4 h-4 mr-1" />
                                 View
                              </Button>
                           </Link>
                           <Link href={`/admin/edit-blog/${blog.id}`}>
                              <Button
                                 variant="outline"
                                 size="sm"
                                 className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                              >
                                 <Edit2 className="w-4 h-4 mr-1" />
                                 Edit
                              </Button>
                           </Link>
                           <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(blog.id)}
                              disabled={deletingId === blog.id}
                              className="border-red-200 text-red-600 hover:bg-red-50"
                           >
                              <Trash2 className="w-4 h-4 mr-1" />
                              {deletingId === blog.id
                                 ? "Deleting..."
                                 : "Delete"}
                           </Button>
                        </div>
                     </div>
                  </div>
               </Card>
            ))
         )}
      </div>
   );
}
