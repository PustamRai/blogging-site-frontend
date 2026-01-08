import Link from "next/link";
import Image from "next/image";
import { getBlogBySlug, blogs } from "@/data/blogs";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: `${blog.title} | Blogging sites Blog`,
    description: blog.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/blog"
            className="text-orange-600 hover:text-orange-700 text-sm font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </header>

      {/* Blog Post */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title and Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
              {blog.category}
            </span>
            <span className="text-sm text-orange-600">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-900 mb-4 text-balance">
            {blog.title}
          </h1>
          <p className="text-lg text-orange-700 text-pretty">
            {blog.description}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-96 sm:h-[500px] rounded-lg overflow-hidden mb-12 border border-orange-100">
          <Image
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-orange max-w-none">
          {blog.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("**") && paragraph.endsWith("**:")) {
              // Handle bold headings with colons
              const heading = paragraph.replace(/\*\*/g, "");
              return (
                <h3
                  key={index}
                  className="text-2xl font-bold text-orange-900 mt-6 mb-3"
                >
                  {heading}
                </h3>
              );
            } else if (paragraph.startsWith("- ")) {
              // Handle bullet points
              const items = paragraph
                .split("\n")
                .filter((item) => item.startsWith("- "));
              return (
                <ul
                  key={index}
                  className="list-disc list-inside text-orange-800 space-y-2 mb-4"
                >
                  {items.map((item, i) => (
                    <li key={i} className="ml-4">
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            } else if (paragraph.trim()) {
              return (
                <p key={index} className="text-orange-800 leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </div>
      </article>
    </div>
  );
}
