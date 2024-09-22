"use client";

import { useParams } from "next/navigation";
import { postsData } from "@/data/postsData";
import Image from "next/image";
import React from "react";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const post = postsData.find((post) => post.id === id);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  const { title, date, comments, author, sections, category, tags } = post;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mt-6 text-tealGreen">{title}</h1>
        <p className="text-gray-400 text-sm mt-2">
          {date} | {comments} Comments | by {author}
        </p>

        <div className="mt-6">
          {sections.map((section, index) => {
            switch (section.type) {
              case "text":
                return (
                  <div key={index} className="mt-4">
                    <h2 className="text-2xl font-semibold text-tealGreen">
                      {section.heading}
                    </h2>
                    <p className="text-white mt-2 text-lg">{section.content}</p>
                  </div>
                );
              case "image":
                return (
                  <div key={index} className="relative w-full h-64 mt-6">
                    <Image
                      src={`/images/posts_images/${section.src}.webp`}
                      alt={section.alt || "Default alt text"}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                );
              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="bg-gray-800 text-white p-4 italic border-l-4 border-tealGreen mt-6"
                  >
                    {section.content}
                  </blockquote>
                );
              default:
                return null;
            }
          })}
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-tealGreen">Category</h3>
          <p className="text-white mt-2">{category}</p>

          <h3 className="text-2xl font-semibold text-tealGreen mt-6">Tags</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-800 text-white px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
