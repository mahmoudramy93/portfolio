import { DefaultSeoProps } from "next-seo";

export const seoConfig: DefaultSeoProps = {
  title: "Mahmoud Elbehery - Backend Developer",
  description:
    "Explore my portfolio as a backend developer, specializing in API design, database schema, and cloud deployment. Let's build something amazing together!",
  openGraph: {
    title: "Mahmoud Elbehery - Backend Developer",
    description:
      "Explore my portfolio as a backend developer, specializing in API design, database schema, and cloud deployment.",
    url: "https://mahmoud-elbehery.netlify.app/",
    images: [
      {
        url: "/images/personal_images/profile.svg",
        width: 1200,
        height: 630,
        alt: "Mahmoud Elbehery Portfolio",
      },
      {
        url: "/images/logo.png",
        width: 300,
        height: 300,
        alt: "Mahmoud Elbehery Logo",
      },
    ],
    siteName: "Mahmoud Elbehery Portfolio",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "https://x.com/mahmoudramy93",
  },
  additionalLinkTags: [
    {
      rel: "canonical",
      href: "https://mahmoud-elbehery.netlify.app/",
    },
  ],
  additionalMetaTags: [
    {
      property: "linkedin:site",
      content: "https://www.linkedin.com/in/mahmoud-ramy-elbehery-752aab235",
    },
    {
      property: "twitter:site",
      content: "https://x.com/mahmoudramy93",
    },
    {
      property: "author",
      content: "Mahmoud Elbehery",
    },
    {
      property: "publisher",
      content: "Mahmoud Elbehery Portfolio",
    },
    {
      property: "keywords",
      content:
        "backend development, API design, database schema, cloud deployment, Docker, Ansible, Shell",
    },
  ],
};

export default seoConfig;
