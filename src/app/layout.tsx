import "./globals.css";

import { Header, SocialMediaFooter } from "@/components/common";
import Providers from "./Providers";
import { DefaultSeo } from "next-seo";
import seoConfig from "../../next-seo.config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-screen h-screen mx-auto overflow-x-hidden bg-black lg:w-5/6">
        <DefaultSeo {...seoConfig} />
        <Providers defaultTheme="system" attribute="class">
          <Header />
          {children}
          <SocialMediaFooter />
        </Providers>
      </body>
    </html>
  );
}

// body bg bg-[#1F2937]
