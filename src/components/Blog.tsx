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
}: TPostProps) => {
  return (
    <div className="rounded-md bg-gray-800 dark:bg-black ">
      <div className="relative w-full h-[245px]">
        <Image
          src={`/images/posts_images/${image}.webp`}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col gap-4 p-5">
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
