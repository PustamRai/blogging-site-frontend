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
import { blogs, generateSlug } from "@/data/blogs";
import type { Blog } from "@/data/blogs";

const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(200),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500),
  content: z.string().min(20, "Content must be at least 20 characters"),
  category: z.string().min(1, "Please select a category"),
  blogImage: z.string().url("Please provide a valid image URL"),
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

interface EditBlogFormProps {
  initialBlog: Blog;
}

export default function EditBlogForm({ initialBlog }: EditBlogFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: initialBlog.title,
      description: initialBlog.description,
      content: initialBlog.content,
      category: initialBlog.category,
      blogImage: initialBlog.image,
    },
  });

  async function onSubmit(data: BlogFormData) {
    setIsSubmitting(true);
    try {
      const blogIndex = blogs.findIndex((b) => b.id === initialBlog.id);

      if (blogIndex === -1) {
        throw new Error("Blog not found");
      }

      // Update the blog object with new data
      const updatedSlug = generateSlug(data.title);
      blogs[blogIndex] = {
        ...blogs[blogIndex],
        title: data.title,
        slug: updatedSlug,
        description: data.description,
        content: data.content,
        image: data.blogImage,
        category: data.category,
      };

      alert("Blog post updated successfully!");
      router.push(`/blog/${updatedSlug}`);
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog post");
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
        {/* Title Field */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-orange-900">Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter blog post title"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  disabled={field.disabled}
                  className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-orange-900">Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Brief summary of your post (shown in blog cards)"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  disabled={field.disabled}
                  className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                  rows={3}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category Field */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-orange-900">Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-orange-200 focus:border-orange-500 focus:ring-orange-500">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Blog Image URL Field */}
        <FormField
          control={form.control}
          name="blogImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-orange-900">Blog Image URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://example.com/image.jpg"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  disabled={field.disabled}
                  className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                  type="url"
                />
              </FormControl>
              <FormDescription className="text-orange-600">
                Provide the full URL to an image (JPEG, PNG, etc.)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Content Field */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-orange-900">Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your full blog post content here. Separate paragraphs with line breaks."
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  disabled={field.disabled}
                  className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 font-mono text-sm"
                  rows={12}
                />
              </FormControl>
              <FormDescription className="text-orange-600">
                Use markdown formatting: **bold**, - for lists, new lines for
                paragraphs
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white"
        >
          {isSubmitting ? "Updating..." : "Update Blog Post"}
        </Button>
      </form>
    </Form>
  );
}
