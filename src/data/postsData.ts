import { v4 as uuidv4 } from "uuid";

export const postsData = [
  {
    id: uuidv4(),
    title: "Montu is Going to Breakup with Tuntuni",
    date: "2017-03-18",
    comments: 33,
    image: "blog_1",
    description:
      "There are many variations of passages of the Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
    link: "#",
    category: "Lifestyle",
    tags: ["graphic", "media"],
    author: "John Doe",
  },
  {
    id: uuidv4(),
    title: "Another Interesting Blog Post",
    date: "2018-04-20",
    comments: 12,
    image: "blog_1",
    description:
      "This is another interesting blog post that discusses exciting topics and insights.",
    link: "#",
    category: "Web Development",
    tags: ["web", "development"],
    author: "Jane Smith",
  },
];
