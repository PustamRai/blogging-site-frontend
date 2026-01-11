export interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  category: string;
  createdAt: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Top 10 VS Code Extensions for Developers",
    slug: "top-10-vs-code-extensions-for-developers",
    description:
      "Boost your productivity with these essential VS Code extensions every developer should know.",
    content: `Visual Studio Code is one of the most popular code editors, and its extensions can dramatically improve your workflow. Here are 10 must-have extensions:

1. **Prettier** – Auto-formats your code for consistent style.
2. **ESLint** – Lints your JavaScript/TypeScript code to catch errors early.
3. **GitLens** – Enhances Git integration with history, blame info, and code authorship.
4. **Bracket Pair Colorizer** – Makes matching brackets easy to track.
5. **Live Server** – Launches a local server to preview web pages live.
6. **Path Intellisense** – Auto-completes file paths as you type.
7. **REST Client** – Test APIs directly from VS Code without Postman.
8. **Code Spell Checker** – Avoid typos in comments and strings.
9. **Docker** – Manage containers and images from within VS Code.
10. **Tailwind CSS IntelliSense** – Autocomplete Tailwind classes and show previews.

Install these and watch your coding speed and efficiency improve drastically.`,
    image: "/blog1.webp",
    category: "Development",
    createdAt: "2026-01-01",
  },
  {
    id: "2",
    title: "A Beginner’s Guide to Next.js",
    slug: "beginners-guide-to-nextjs",
    description:
      "Learn the basics of Next.js and why it’s one of the fastest-growing frameworks for React developers.",
    content: `Next.js is a React framework that enables server-side rendering, static site generation, and routing out-of-the-box.

- **Pages and Routing:** Create pages in the /pages directory, and Next.js automatically handles routing.
- **Server-side Rendering (SSR):** Fetch data on the server before sending HTML to the client.
- **Static Site Generation (SSG):** Pre-render pages at build time for fast performance.
- **API Routes:** Build backend endpoints directly in Next.js without a separate server.
- **File-based Routing:** Simple folder structure defines your routes, no extra configuration needed.

Next.js also supports TypeScript, Tailwind CSS, and modern React features like hooks and suspense.`,
    image: "/blog2.webp",
    category: "Development",
    createdAt: "2026-01-02",
  },
  {
    id: "3",
    title: "5 Productivity Hacks for Remote Developers",
    slug: "productivity-hacks-for-remote-developers",
    description:
      "Maximize your efficiency while working remotely with these practical productivity tips.",
    content: `Working remotely comes with flexibility but also distractions. Here are five ways to stay productive:

1. **Time Blocking:** Schedule your day in focused blocks with breaks in between.
2. **Pomodoro Technique:** Work 25 minutes, take 5-minute breaks, repeat.
3. **Dedicated Workspace:** Keep your workspace separate from leisure areas to focus better.
4. **Task Management Tools:** Use Trello, Notion, or Todoist to track tasks.
5. **Limit Notifications:** Silence unnecessary notifications to maintain deep work flow.

Combine these strategies to create a consistent and productive routine.`,
    image: "/blog3.webp",
    category: "Productivity",
    createdAt: "2026-01-03",
  },
  {
    id: "4",
    title: "Understanding REST APIs",
    slug: "understanding-rest-apis",
    description:
      "Learn what REST APIs are and how they power modern web applications.",
    content: `REST (Representational State Transfer) is an architectural style used for designing networked applications.

- **Resources:** Represent entities like users, posts, or products.
- **HTTP Methods:** Use GET, POST, PUT, DELETE to interact with resources.
- **Stateless:** Each request contains all the information needed for processing.
- **JSON Format:** Responses are usually in JSON for easy client-side consumption.
- **Endpoints:** Defined URLs to access or manipulate resources.

Understanding REST APIs is crucial for both frontend and backend development.`,
    image: "/blog4.webp",
    category: "Development",
    createdAt: "2026-01-04",
  },
  {
    id: "5",
    title: "How to Start a Tech Blog in 2026",
    slug: "how-to-start-a-tech-blog-in-2026",
    description:
      "Step-by-step guide to launching your own tech blog and sharing your knowledge with the world.",
    content: `Starting a tech blog is easier than ever:

1. **Choose a Niche:** Pick a topic you’re passionate about, e.g., web development, AI, or cloud computing.
2. **Select a Platform:** Use Next.js, WordPress, or static site generators.
3. **Set Up Hosting & Domain:** Deploy on Vercel, Netlify, or traditional hosting.
4. **Create Content:** Write tutorials, guides, and opinion pieces.
5. **Promote:** Share posts on LinkedIn, Twitter, or developer forums.

Consistency and quality are key to building an audience.`,
    image: "/blog5.webp",
    category: "Tech Blogging",
    createdAt: "2026-01-05",
  },
  {
    id: "6",
    title: "Top 5 JavaScript Libraries for 2026",
    slug: "top-5-javascript-libraries-2026",
    description:
      "Discover the most useful JavaScript libraries for developers to enhance web applications this year.",
    content: `JavaScript libraries save time and make development easier. Here are the top 5 libraries in 2026:

1. **React.js:** Still the most popular library for building UIs.
2. **Three.js:** Create stunning 3D graphics and animations.
3. **Chart.js:** Easily build interactive charts and graphs.
4. **Lodash:** Provides utility functions for arrays, objects, and strings.
5. **Axios:** Simple HTTP client for API requests.

Incorporating these libraries can significantly improve your projects' functionality and maintainability.`,
    image: "/blog6.webp",
    category: "Development",
    createdAt: "2026-01-06",
  },
];

export function getBlogBySlug(id: number): Blog | undefined {
  return blogs.find((blog) => blog.id === id);
}

// export function generateSlug(title: string): string {
//   return title
//     .toLowerCase()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-")
//     .replace(/-+/g, "-");
// }
