import { Blog } from "@/components";
import { CustomTitle } from "@/components/common";
import { categoriesData } from "@/data/categoriesData";
import { postsData } from "@/data/postsData";
import Link from "next/link";
import React from "react";

export const tags = [
  { name: "graphic", href: "#" },
  { name: "web", href: "#" },
  { name: "development", href: "#" },
  { name: "template", href: "#" },
  { name: "media", href: "#" },
];

const renderCategories = () => {
  return categoriesData.map((category) => (
    <li key={category.name}>
      <Link
        href={category.href}
        className="text-gray-300 text-xl hover:text-tealGreen transition-all duration-300"
      >
        {category.name}
      </Link>
    </li>
  ));
};

const renderTags = () => {
  return tags.map((tag) => (
    <li key={tag.name} className="mb-8">
      <Link
        href={tag.href}
        className="text-lightTealGreen dark:text-tealGreen bg-gray-800 dark:bg-darkGray p-4 text-xl hover:text-tealGreen transition-all duration-300"
      >
        {tag.name}
      </Link>
    </li>
  ));
};

const BlogsPage = () => {
  const blogPosts = postsData.map((post) => {
    return (
      <Blog
        key={post.id}
        title={post.title}
        date={post.date}
        comments={post.comments}
        image={post.image}
        description={post.description}
        link={post.link}
        isFlex={true}
      />
    );
  });

  return (
    <section className="py-[50px] px-5 ">
      <div className="container">
        <CustomTitle
          title={"All Blogs"}
          description={"There is all my blogs"}
        />
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="grid grid-cols-1  gap-8 mb-10 w-full xl:w-3/4">
            {blogPosts}
          </div>
          <div className="w-full xl:w-3/12">
            <div className="space-y-14">
              <form className="relative flex w-full border border-gray-600">
                <input
                  type="text"
                  placeholder="Enter Keyword..."
                  className="p-4 w-5/6  outline-none bg-darkColor text-white"
                />
                <input
                  type="submit"
                  value="Search"
                  className="p-2 bg-gray-800 dark:bg-tealGreen text-white dark:text-black cursor-pointer w-4/12 font-semibold"
                />
              </form>

              <div>
                <h3 className="text-tealGreen text-3xl border-b-2 border-tealGreen pb-4 mb-6">
                  Categories
                </h3>

                <ul className="space-y-6">{renderCategories()}</ul>
              </div>

              <div>
                <h3 className="text-tealGreen text-3xl border-b-2 border-tealGreen pb-4 mb-6">
                  Tags
                </h3>
                <ul className="flex flex-wrap gap-2 mt-12">{renderTags()}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
