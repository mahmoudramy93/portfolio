import { TTags } from "@/data/tagsBlogData";
import Link from "next/link";
import React from "react";

type TTagsList = {
  tags: TTags[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
};

const TagsList = ({ tags, selectedTags, setSelectedTags }: TTagsList) => {
  const handleTagClick = (tagName: string) => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagName));
    } else {
      setSelectedTags([...selectedTags, tagName]);
    }
  };

  return (
    <ul className="flex flex-wrap gap-2 mt-12">
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag.name);

        return (
          <li key={tag.name} className="mb-8">
            <Link
              href="#"
              className={`text-lightTealGreen dark:text-tealGreen p-4 text-xl hover:text-tealGreen transition-all duration-300 
            ${
              isSelected
                ? "bg-lightTealGreen !text-black"
                : "bg-gray-800 dark:bg-darkGray"
            }
          `}
              onClick={() => handleTagClick(tag.name)}
            >
              {tag.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TagsList;
