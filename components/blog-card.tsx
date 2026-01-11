"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { IBlogProps } from "@/app/blog/page";

export default function BlogCard({
   content,
   imageUrl,

   title,
}: IBlogProps) {
   return (
      <Card className="group overflow-hidden border-orange-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 cursor-pointer h-full flex flex-col">
         {/* Image */}
         <div className="relative w-full h-48 overflow-hidden bg-orange-100">
            <Image
               src={imageUrl || "/placeholder.svg"}
               alt={title}
               fill
               className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
         </div>

         {/* Content */}
         <div className="p-5 flex-1 flex flex-col">
            {/* Category Badge */}
            {/* <div className="mb-3">
               <span className="inline-block px-2.5 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                  {blog.category}
               </span>
            </div> */}

            {/* Title */}
            <h3 className="text-lg font-bold text-orange-900 mb-2 line-clamp-2 group-hover:text-orange-700 transition-colors">
               {title}
            </h3>

            {/* Description */}
            <p className="text-orange-700 text-sm line-clamp-2 flex-1">
               {content}
            </p>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-orange-100">
               {/* <p className="text-xs text-orange-600">
                  {new Date(blog.).toLocaleDateString("en-US", {
                     month: "short",
                     day: "numeric",
                     year: "numeric",
                  })}
               </p> */}
            </div>
         </div>
      </Card>
   );
}
