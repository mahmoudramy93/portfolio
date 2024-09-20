import type { Metadata } from "next";
import "./globals.css";

import { Header, Navigation, SocialMediaFooter } from "@/components/common";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Mahmoud Elbehery",
  description:
    "Explore Mahmoud Elbehery's portfolio. I specialize in backend software development, API design and management, and database schema design (SQL & NoSQL). With expertise in Docker containerization, cloud and on-premise deployment, and Infrastructure as Code using Ansible and Shell, I excel in automation and operations. My experience includes collaboration and CI/CD practices to ensure seamless software delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-screen h-screen mx-auto overflow-x-hidden bg-black lg:w-5/6">
        <Providers defaultTheme="system" attribute="class">
          <Header />
          {children}
          <SocialMediaFooter />
          <Navigation/>
        </Providers>
      </body>
    </html>
  );
}

// body bg bg-[#1F2937]
