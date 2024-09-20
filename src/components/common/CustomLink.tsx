import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type TCustomLinkProps = {
  link: string;
  text: string;
};

const CustomLink = ({ link, text }: TCustomLinkProps) => {
  return (
    <Link
      href={link}
      aria-label={`Link to ${text}`}
      className="px-1 py-2 rounded-md text-center bg-darkGray text-tealGreen flex items-center justify-center transition-all duration-500 group"
    >
      {text}
      <FaArrowRightLong className="ml-2 mt-[3px] transition-transform duration-500 group-hover:translate-x-1" />
    </Link>
  );
};

export default CustomLink;
