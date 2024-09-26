import { TPost } from "@/types/postType";

export const postsData:TPost[] = [
  {
    id: "1",
    title: "Montu is Going to Breakup with Tuntuni",
    date: "2017-03-18",
    comments: 33,
    author: "John Doe",
    sections: [
      {
        type: "text",
        heading: "Introduction",
        content:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      },
      {
        type: "image",
        src: "blog_1",
        alt: "Blog Image",
      },
      {
        type: "text",
        heading: "Key Points",
        content: "This is an important quote from the article.",
      },
      {
        type: "quote",
        content: "This is an important quote from the article.",
      },
    ],
    category: "Lifestyle",
    tags: ["graphic", "media"],
    image: "blog_1",
  },
  {
    id: "2",
    title: "Another Interesting Blog Post",
    date: "2018-04-20",
    comments: 12,
    author: "Jane Smith",
    sections: [
      {
        type: "text",
        heading: "Overview",
        content:
          "This is another interesting blog post that discusses exciting topics and insights.",
      },
      {
        type: "image",
        src: "blog_2",
        alt: "Another Blog Image",
      },
    ],
    category: "Web Development",
    tags: ["web", "development"],
    image: "blog_2",
  },
  {
    id: "3",
    title: "Python",
    date: "2018-04-20",
    comments: 12,
    author: "Jane Smith",
    sections: [
      {
        type: "text",
        heading: "Introduction to Python",
        content:
          "This is another interesting blog post that discusses exciting topics and insights.",
      },
      {
        type: "image",
        src: "blog_3",
        alt: "Another Blog Image",
      },
      {
        type: "text",
        heading: "Advanced Topics",
        content:
          "This is an elaboration on advanced Python features and capabilities.",
      },
      {
        type: "image",
        src: "blog_3_1",
        alt: "Another Blog Image",
      },
    ],
    category: "Web Development",
    tags: ["web", "graphic"],
    image: "blog_3",
  },
  {
    id: "4",
    title: "Python",
    date: "2018-04-20",
    comments: 12,
    author: "Jane Smith",
    sections: [
      {
        type: "text",
        heading: "Introduction to Python",
        content:
          "This is another interesting blog post that discusses exciting topics and insights.",
      },
      {
        type: "image",
        src: "blog_3_1",
        alt: "Another Blog Image",
      },
      {
        type: "text",
        heading: "Advanced Topics",
        content:
          "This is an elaboration on advanced Python features and capabilities.",
      },
      {
        type: "image",
        src: "blog_3_1",
        alt: "Another Blog Image",
      },
    ],
    category: "Web Design",
    tags: ["template", "development"],
    image: "blog_3_1",
  },
];
