import React from "react";
import Blog from "./Blog";
import { TPost } from "@/types/postType";

type TBlogList = {
  posts: TPost[];
};

const BlogList = ({ posts }: TBlogList) => {
  return (
    <div className="grid grid-cols-1 gap-8 mb-10 w-full xl:w-3/4">
      {posts.map((post) => {
        const description =
          post.sections?.find((section) => section.type === "text")?.content ||
          "";
        return (
          <Blog
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            comments={post.comments}
            image={post.image}
            description={description}
            isFlex={true}
          />
        );
      })}
    </div>
  );
};

export default BlogList;
