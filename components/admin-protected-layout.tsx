"use client";

import type React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/hooks/store";
import { useAuthGuard } from "@/hooks/isAuth";
interface AdminProtectedLayoutProps {
   children: React.ReactNode;
   title: string;
}

export default function AdminProtectedLayout({
   children,
   title,
}: AdminProtectedLayoutProps) {
   const logout = useAuthStore((s) => s.logout);
   const handleLogout = () => {
      logout();
      window.alert("Logged out successfully");
      router.push("/");
   };
   const user = useAuthStore((s) => s.user);
   const router = useRouter();
   useAuthGuard();

   return (
      <div className="min-h-screen bg-linear-to-b from-orange-50 to-white">
         <header className="border-b border-orange-100 bg-white">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
               <Link
                  href="/admin"
                  className="text-orange-600 text-sm font-medium"
               >
                  ← Admin Dashboard
               </Link>

               <div className="flex items-center gap-4">
                  <span className="text-sm text-orange-600">
                     Welcome,{" "}
                     <span className="font-medium">{user?.username}</span>
                  </span>
                  <button
                     onClick={handleLogout}
                     className="px-4 py-2 text-sm border rounded-lg text-orange-600"
                  >
                     Logout
                  </button>
               </div>
            </div>
         </header>

         <div>{children}</div>
      </div>
   );
}
