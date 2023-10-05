import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../assets/sass/main.scss";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import { Analytics } from "@vercel/analytics/react";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Branden Ng | Frontend dev",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#151515" />
      </head>
      <body className={ubuntu.className}>
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
