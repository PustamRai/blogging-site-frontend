// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";
// import { getSession, clearSession } from "@/lib/auth";
// import { useRouter } from "next/navigation";

// export default function Home() {
//    const router = useRouter();
//    // const [isAuthenticated, setIsAuthenticated] = useState(false);
//    // const [userEmail, setUserEmail] = useState("");

//    // useEffect(() => {
//    //   const session = getSession();
//    //   if (session) {
//    //     setIsAuthenticated(true);
//    //     setUserEmail(session.user.email);
//    //   }
//    // }, []);

//    // const handleLogout = () => {
//    //   clearSession();
//    //   setIsAuthenticated(false);
//    //   setUserEmail("");
//    // };

//    return (
//       <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
//          {/* Header */}
//          <header className="border-b border-orange-100">
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//                <div className="flex items-center justify-between">
//                   <div>
//                      <h1 className="text-3xl font-bold text-orange-900">
//                         Blogging sites
//                      </h1>
//                      {/*<p className="text-orange-600 text-sm">
//                 Expert pet care advice & guides
//               </p>*/}
//                   </div>
//                   <div className="flex gap-2">
//                      {isAuthenticated ? (
//                         <>
//                            <div className="text-sm text-orange-600 py-2 px-3">
//                               Welcome, {userEmail}
//                            </div>
//                            <button
//                               onClick={handleLogout}
//                               className="px-4 py-2 text-sm font-medium text-orange-600 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors"
//                            >
//                               Logout
//                            </button>
//                         </>
//                      ) : (
//                         <>
//                            {/*<Link href="/auth/login">
//                     <Button
//                       size="sm"
//                       variant="outline"
//                       className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
//                     >
//                       Login
//                     </Button>
//                   </Link>
//                   <Link href="/auth/signup">
//                     <Button
//                       size="sm"
//                       className="bg-orange-600 hover:bg-orange-700"
//                     >
//                       Sign Up
//                     </Button>
//                   </Link>*/}
//                         </>
//                      )}
//                   </div>
//                </div>
//             </div>
//          </header>

//          {/* Hero Section */}
//          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
//             <div className="text-center">
//                <h2 className="text-4xl sm:text-5xl font-bold text-orange-900 mb-4 text-balance">
//                   Welcome to Blogging sites Blog
//                </h2>
//                <p className="text-lg text-orange-700 mb-8 max-w-2xl mx-auto text-pretty">
//                   Discover expert tips, tutorials, and guides on web
//                   development, productivity, and tech trends to help you level
//                   up your skills.
//                </p>
//                <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <Link href="/blog">
//                      <Button
//                         size="lg"
//                         className="bg-orange-600 hover:bg-orange-700"
//                      >
//                         View All Posts
//                      </Button>
//                   </Link>
//                   {/*{isAuthenticated && (*/}
//                   {/*<Link href="/admin/create-blog">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
//               >
//                 Create New Post
//               </Button>
//             </Link>*/}
//                   {/*)}*/}
//                </div>
//             </div>
//          </section>
//       </div>
//    );
// }
import React from "react";

export default function page() {
   return <div></div>;
}
