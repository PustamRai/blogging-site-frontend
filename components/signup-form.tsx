"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { registerUser } from "@/lib/auth";

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    // Simulate async registration
    setTimeout(() => {
      const session = registerUser(email, password);
      if (session) {
        router.push("/admin");
      } else {
        setError("Email already registered. Please login instead.");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <Card className="w-full max-w-md mx-auto p-8 border-orange-200">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-orange-900 mb-2">
          Create Account
        </h2>
        <p className="text-orange-600 text-sm">
          Join Blogging sites to manage your blog posts
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-orange-900 mb-1"
          >
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-orange-200 focus:ring-orange-500 focus:border-orange-500"
            disabled={loading}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-orange-900 mb-1"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-orange-200 focus:ring-orange-500 focus:border-orange-500"
            disabled={loading}
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-orange-900 mb-1"
          >
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-orange-200 focus:ring-orange-500 focus:border-orange-500"
            disabled={loading}
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 rounded-lg transition-colors"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      <p className="text-center text-sm text-orange-600 mt-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-orange-700 hover:text-orange-800"
        >
          Login here
        </Link>
      </p>
    </Card>
  );
}
