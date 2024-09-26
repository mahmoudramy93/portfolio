import { TCategory } from "@/data/categoriesData";
import Link from "next/link";
import React from "react";

type TCategoriesList = {
  categories: TCategory[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const CategoriesList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: TCategoriesList) => {
  return (
    <ul className="space-y-6">
      {categories.map((category) => {
        const isSelected = selectedCategory === category.name;
        return (
          <li key={category.name}>
            <Link
              href="#"
              className={`text-gray-300 text-xl hover:text-tealGreen transition-all duration-300
                ${isSelected ? "text-tealGreen" : ""}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
