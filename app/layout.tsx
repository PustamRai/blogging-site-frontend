import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import ReactQueryClientProvider from "./providers/ReactQueryCLlientProvider";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Blogging Sites ",
   description: "",
   generator: "v0.app",
   icons: {
      icon: [
         {
            url: "/icon-light-32x32.png",
            media: "(prefers-color-scheme: light)",
         },
         {
            url: "/icon-dark-32x32.png",
            media: "(prefers-color-scheme: dark)",
         },
         {
            url: "/icon.svg",
            type: "image/svg+xml",
         },
      ],
      apple: "/apple-icon.png",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <ReactQueryClientProvider>
            <body className={`font-sans antialiased`}>{children}</body>
         </ReactQueryClientProvider>
      </html>
   );
}
