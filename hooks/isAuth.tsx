"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "./store";

export function useAuthGuard() {
   const router = useRouter();
   const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
   const token = useAuthStore((s) => s.token);
   const pathname = usePathname();

   useEffect(() => {
      if (isAuthenticated === true && token?.length !== 0) {
         router.replace(`${pathname}`);
      } else {
         router.replace("/auth/login");
      }
   }, [isAuthenticated, token, router]);
}
