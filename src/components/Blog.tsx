import { TPostProps } from "@/types/postType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Blog = ({
  title,
  date,
  comments,
  image,
  description,
  link,
  isFlex,
}: TPostProps) => {
  return (
    <div
      className={`rounded-md bg-gray-800 dark:bg-black 
    flex flex-col ${isFlex ? "flex-col md:flex-row md:gap-4" : "flex-col"}`}
    >
      <div
        className={`relative w-full aspect-video ${
          isFlex ? "md:w-1/2" : "w-full"
        }`}
      >
        <Image
          src={`/images/posts_images/${image}.webp`}
          alt={title}
          layout="fill"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className={`object-cover `}
        />
      </div>

      {/* text */}
      <div
        className={`flex flex-col gap-4 px-5 dark:px-0 py-5 ${
          isFlex ? "md:w-1/2" : ""
        }`}
      >
        <h3 className="text-lg font-semibold text-tealGreen">{title}</h3>
        <p className="flex items-center gap-2 text-sm font-medium text-white">
          <Link
            href="#"
            className="transition-all duration-300 hover:text-tealGreen "
          >
            {date}
          </Link>
          <span>|</span>
          <Link
            href="#"
            className="transition-all duration-300 hover:text-tealGreen "
          >
            {comments} Comments
          </Link>
        </p>
        <p className="text-gray-300">{description}</p>
        <Link
          href={link}
          className="bg-[#004d40] text-white px-5 py-3 font-medium transition-all duration-300 uppercase flex items-center gap-2 w-fit  hover:bg-black hover:text-tealGreen rounded mt-4"
        >
          read more
          <FaArrowRight className="text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
