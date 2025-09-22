import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/universal/nav-bar";


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
        <NavBar />
        {children}
      </body>
    </html>
  );
}
