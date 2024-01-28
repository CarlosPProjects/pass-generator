import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Password Generator",
  description: "Generate a password and copy it to your clipboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container min-h-screen flex flex-col mx-auto">
          <Header />
          <div className="flex-1 p-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
