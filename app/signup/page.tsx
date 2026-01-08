import Link from "next/link";
import SignupForm from "@/components/signup-form";

export const metadata = {
  title: "Sign Up | Blogging sites Admin",
  description: "Create your Blogging sites admin account",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex flex-col">
      <header className="border-b border-orange-100 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/"
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full">
          <SignupForm />
        </div>
      </main>

      <footer className="text-center py-4 text-orange-600 text-sm border-t border-orange-100">
        <p>© 2025 Blogging sites. All rights reserved.</p>
      </footer>
    </div>
  );
}
