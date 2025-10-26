import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/universal/nav-bar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Royal dynasty homes",
  description: "Royal dynasty homes architecture style is defined by strong, solid forms with urban design for academic success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" >
        <Toaster position="top-right" richColors />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
