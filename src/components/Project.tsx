import { TProject } from "@/types/projectType";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaLink } from "react-icons/fa";

const Project = ({
  image,
  githubLink,
  technologies,
  name,
  description,
  liveLink,
}: TProject) => {
  return (
    <div className="rounded-md shadow-[0_0_10px_#00c896a3] ">
      {/* image part */}
      <div className="relative group">
        <figure className="mb-0">
          <Image
            src={`/images/projects_images/${image.src}.webp`}
            alt={image.alt}
            width={960}
            height={540}
            className=""
          />
        </figure>
        <div className="absolute top-0 left-0 right-0 bottom-0  text-center bg-black/50 scale-90 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-100">
          <Link
            href={githubLink}
            target="_blank"
            className="flex items-center justify-center text-white w-[50px] h-[50px] -translate-x-1/2 bg-tealGreen border border-tealGreen rounded-full absolute top-1/2 left-1/2 transition-all duration-500 hover:bg-transparent hover:text-tealGreen"
          >
            <FaLink className="text-xl" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {/* technologies */}
        <ul className="flex items-center gap-4">
          {technologies.map((techno, index) => {
            return (
              <li
                className="bg-darkGray rounded text-tealGreen font-bold p-2"
                key={index}
              >
                {techno}
              </li>
            );
          })}
        </ul>

        <h3 className="text-white text-xl font-normal ">{name}</h3>
        <p className="text-gray-300 text-sm ">{description}</p>
        <Link
          href={liveLink}
          target="_blank"
          className="text-tealGreen/70 bg-darkGray text-sm transition-all duration-300 rounded px-4 py-2 flex items-center gap-2 w-fit ml-auto hover:text-tealGreen"
        >
          Preview
          <FaEye />
        </Link>
      </div>
    </div>
  );
};

export default Project;
