// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { blogs } from "@/data/blogs";
// import { generateSlug } from "@/data/blogs";

// // Form validation schema
// const blogSchema = z.object({
//   title: z.string().min(3, "Title must be at least 3 characters").max(200),
//   description: z
//     .string()
//     .min(10, "Description must be at least 10 characters")
//     .max(500),
//   content: z.string().min(20, "Content must be at least 20 characters"),
//   category: z.string().min(1, "Please select a category"),
//   blogImage: z.string().url("Please provide a valid image URL"),
// });

// type BlogFormData = z.infer<typeof blogSchema>;

// const CATEGORIES = [
//   "Dogs",
//   "Cats",
//   "Health",
//   "Behavior",
//   "Setup",
//   "Grooming",
//   "Training",
// ];

// export default function CreateBlogForm() {
//   const router = useRouter();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const form = useForm<BlogFormData>({
//     resolver: zodResolver(blogSchema),
//     defaultValues: {
//       title: "",
//       description: "",
//       content: "",
//       category: "",
//       blogImage: "",
//     },
//   });

//   async function onSubmit(data: BlogFormData) {
//     setIsSubmitting(true);
//     try {
//       // Generate slug from title
//       const slug = generateSlug(data.title);

//       // Create new blog object
//       const newBlog = {
//         id: String(blogs.length + 1),
//         title: data.title,
//         slug,
//         description: data.description,
//         content: data.content,
//         image: data.blogImage,
//         category: data.category,
//         createdAt: new Date().toISOString().split("T")[0],
//       };

//       // Add to blogs array (in production, this would be saved to a database)
//       blogs.push(newBlog);
//       console.log("new blog data: ", newBlog);

//       // Show success message and redirect
//       alert("Blog post created successfully!");
//       router.push("/blogs");
//     } catch (error) {
//       console.error("Error creating blog:", error);
//       alert("Failed to create blog post");
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="space-y-6 bg-white rounded-lg border border-orange-100 p-6"
//       >
//         {/* Title Field */}
//         <FormField
//           control={form.control}
//           name="title"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-orange-900">Title</FormLabel>
//               <FormControl>
//                 <Input
//                   placeholder="Enter blog post title"
//                   value={field.value}
//                   onChange={field.onChange}
//                   onBlur={field.onBlur}
//                   disabled={field.disabled}
//                   className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Description Field */}
//         <FormField
//           control={form.control}
//           name="description"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-orange-900">Description</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Brief summary of your post (shown in blog cards)"
//                   value={field.value}
//                   onChange={field.onChange}
//                   onBlur={field.onBlur}
//                   disabled={field.disabled}
//                   className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
//                   rows={3}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Category Field */}
//         <FormField
//           control={form.control}
//           name="category"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-orange-900">Category</FormLabel>
//               <Select onValueChange={field.onChange} defaultValue={field.value}>
//                 <FormControl>
//                   <SelectTrigger className="border-orange-200 focus:border-orange-500 focus:ring-orange-500">
//                     <SelectValue placeholder="Select a category" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   {CATEGORIES.map((category) => (
//                     <SelectItem key={category} value={category}>
//                       {category}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Blog Image URL Field */}
//         <FormField
//           control={form.control}
//           name="blogImage"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-orange-900">Blog Image URL</FormLabel>
//               <FormControl>
//                 <Input
//                   placeholder="https://example.com/image.jpg"
//                   value={field.value}
//                   onChange={field.onChange}
//                   onBlur={field.onBlur}
//                   disabled={field.disabled}
//                   className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
//                   type="url"
//                 />
//               </FormControl>
//               <FormDescription className="text-orange-600">
//                 Provide the full URL to an image (JPEG, PNG, etc.)
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Content Field */}
//         <FormField
//           control={form.control}
//           name="content"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-orange-900">Content</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Write your full blog post content here. Separate paragraphs with line breaks."
//                   value={field.value}
//                   onChange={field.onChange}
//                   onBlur={field.onBlur}
//                   disabled={field.disabled}
//                   className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 font-mono text-sm"
//                   rows={12}
//                 />
//               </FormControl>
//               <FormDescription className="text-orange-600">
//                 Use markdown formatting: **bold**, - for lists, new lines for
//                 paragraphs
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Submit Button */}
//         <Button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-orange-600 hover:bg-orange-700 text-white"
//         >
//           {isSubmitting ? "Publishing..." : "Publish Blog Post"}
//         </Button>
//       </form>
//     </Form>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateBlogsMutation } from "@/hooks/mutations/useSignUpMutations";

// import { useCreateBlogsMutation } from "@/hooks/mutations/useBlogMutations";

// ---------------- Schema ----------------

const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(200),
  description: z.string().min(10).max(500),
  content: z.string().min(20),
  category: z.string().min(1),
  blogImage: z.string().url(),
});

type BlogFormData = z.infer<typeof blogSchema>;

const CATEGORIES = [
  "Dogs",
  "Cats",
  "Health",
  "Behavior",
  "Setup",
  "Grooming",
  "Training",
];

// ---------------- Component ----------------

export default function CreateBlogForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { mutateAsync: createBlog } = useCreateBlogsMutation();

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      category: "",
      blogImage: "",
    },
  });

  async function onSubmit(data: BlogFormData) {
    setIsSubmitting(true);
    try {
      await createBlog({
        title: data.title,
        content: data.content,
        imageUrl: data.blogImage,
      });

      alert("Blog created successfully!");
      router.push("/blog");
    } catch (error) {
      console.error(error);
      alert("Failed to create blog");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-white rounded-lg border border-orange-100 p-6"
      >
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Image */}
        <FormField
          control={form.control}
          name="blogImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input type="url" {...field} />
              </FormControl>
              <FormDescription>Full image URL</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Content */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea rows={12} className="font-mono text-sm" {...field} />
              </FormControl>
              <FormDescription>Markdown supported</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Publishing..." : "Publish"}
        </Button>
      </form>
    </Form>
  );
}
