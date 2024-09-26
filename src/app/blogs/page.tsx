"use client";

import { BlogList } from "@/components";
import { CustomTitle } from "@/components/common";
import { CategoriesList, Search, TagsList } from "@/components/filters";
import { categoriesData } from "@/data/categoriesData";
import { postsData } from "@/data/postsData";
import { tagsData } from "@/data/tagsBlogData";
import {
  filterByCategory,
  filterBySearch,
  filterByTags,
} from "@/utils/postFilters";
import React, { useMemo, useState } from "react";

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const results = postsData.filter((post) => {
      return (
        filterByCategory(post, selectedCategory) &&
        filterByTags(post, selectedTags) &&
        filterBySearch(post, searchQuery)
      );
    });
    return results;
  }, [selectedCategory, selectedTags, searchQuery]);

  return (
    <section className="py-[50px] px-5 ">
      <div className="container">
        <CustomTitle
          title={"All Blogs"}
          description={"There is all my blogs"}
        />
        <div className="flex flex-col xl:flex-row gap-6">
          <BlogList posts={filteredPosts} />

          <div className="w-full xl:w-3/12">
            <div className="space-y-14">
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

              <div>
                <h3 className="text-tealGreen text-3xl border-b-2 border-tealGreen pb-4 mb-6">
                  Categories
                </h3>
                <CategoriesList
                  categories={categoriesData}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>

              <div>
                <h3 className="text-tealGreen text-3xl border-b-2 border-tealGreen pb-4 mb-6">
                  Tags
                </h3>

                <TagsList
                  tags={tagsData}
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
