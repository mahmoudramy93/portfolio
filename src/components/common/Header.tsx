import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="px-6 py-4 rounded-full mt-6 bg-darkColor" id="header">
      <div className="flex flex-col lg:flex-row items-center gap-4 justify-between ">

        <div className="flex flex-col lg:flex-row items-center text-center lg:text-start justify-center md:justify-start gap-3">
          <Link href="/" aria-label="go to home page">
            <Image
              src="/images/personal_images/profile.svg"
              alt="profile"
              width={68}
              height={68}
              className="rounded-full"
            />
          </Link>
          <div className="">
            <h1 className="text-lg text-white font-semibold">
              <span className="text-tealGreen font-custom">M</span>ahmoud
              <span className="text-tealGreen font-custom"> Elbehery</span>
            </h1>
            <h2 className="text-white text-base">
              <span className="block">
                Freelance Software Engineer, Devops |
              </span>
              Senior System Administrator, I.T Infrastructure Engineer @Harvest
              Foods
            </h2>
          </div>
        </div>

        <div className="relative border border-tealGreen rounded-xl pl-6 pr-4 py-1.5 before:content-[''] before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:bg-tealGreen before:top-1/2 before:left-[10px] before:transform before:-translate-y-1/2">
          <p className="text-gray-300 ">Available for work</p>
        </div>

        <div className="flex items-center">
          <Link
            href="https://www.linkedin.com/in/mahmoud-ramy-elbehery-752aab235"
            aria-label="linkedin page"
            target="_blank"
            className="p-2 text-xl text-gray-300 transition-all hover:text-tealGreen"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/mahmoudramy93"
            aria-label="github page"
            target="_blank"
            className="p-2 text-xl text-gray-300 transition-all hover:text-tealGreen"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://x.com/mahmoudramy93"
            target="_blank"
            className="p-2 text-xl text-gray-300 transition-all hover:text-tealGreen"
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
