"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession, clearSession } from "@/lib/auth";
import Link from "next/link";

interface AdminProtectedLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AdminProtectedLayout({
  children,
  title,
}: AdminProtectedLayoutProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const session = getSession();
    if (session) {
      setIsAuthenticated(true);
      setUserEmail(session.user.email);
      setIsLoading(false);
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    clearSession();
    router.push("/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-white">
        <div className="text-center">
          <p className="text-orange-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="border-b border-orange-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link
                href="/admin"
                className="text-orange-600 hover:text-orange-700 text-sm font-medium"
              >
                ← Admin Dashboard
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-orange-600">
                Welcome, <span className="font-medium">{userEmail}</span>
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-orange-600 hover:text-orange-700 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
