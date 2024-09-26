import { TPost } from "@/types/postType";

export const filterByCategory = (
  post: TPost,
  selectedCategory: string
): boolean => {
  return (
    selectedCategory === "all" ||
    post.category?.toLowerCase() === selectedCategory.toLowerCase()
  );
};

export const filterByTags = (post: TPost, selectedTags: string[]): boolean => {
  return (
    selectedTags.length === 0 ||
    selectedTags.some((tag) => post.tags?.includes(tag))
  );
};

export const filterBySearch = (post: TPost, searchQuery: string): boolean => {
  return post.title.toLowerCase().includes(searchQuery.toLowerCase());
};
