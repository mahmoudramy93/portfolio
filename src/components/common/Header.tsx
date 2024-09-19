import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ThemeSwitcher from "../ThemeSwitcher";

type TSocialLinkProps = {
  href: string;
  ariaLabel: string;
  Icon: React.ComponentType;
};

const SocialLink = ({ href, ariaLabel, Icon }: TSocialLinkProps) => (
  <Link
    href={href}
    aria-label={ariaLabel}
    target="_blank"
    className="p-2 text-xl text-gray-300 transition-all hover:text-tealGreen"
  >
    <Icon />
  </Link>
);

const Header = () => {
  return (
    <header
      className="px-6 py-4 rounded-[50px] my-6 bg-gray-800 border border-gray-600 dark:border-transparent dark:bg-darkColor relative"
      id="header"
    >
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row ">
        <div className="flex flex-col items-center justify-center gap-3 text-center lg:flex-row lg:text-start md:justify-start">
          <Link href="/" aria-label="go to home page">
            <Image
              src="/images/personal_images/profile.svg"
              alt="profile"
              width={68}
              height={68}
              className="rounded-full"
            />
          </Link>
          <div className="w-full lg:w-[300px] xl:w-full">
            <h1 className="text-lg font-semibold text-white">
              <span className="text-lightTealGreen dark:text-tealGreen custom-font">
                M
              </span>
              ahmoud
              <span className="text-lightTealGreen dark:text-tealGreen custom-font">
                {" "}
                Elbehery
              </span>
            </h1>
            <h2 className="text-base text-white">
              <span className="block">
                Freelance Software Engineer, Devops |
              </span>
              Senior System Administrator, I.T Infrastructure Engineer @Harvest
              Foods
            </h2>
          </div>
        </div>

        <div className="relative border border-tealGreen rounded-xl pl-6 pr-4 py-1.5 before:content-[''] before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:bg-tealGreen before:top-1/2 before:left-[10px] before:transform before:-translate-y-1/2">
          <p className="text-gray-300">Available for work</p>
        </div>

        <div className="flex items-center">
          <SocialLink
            href="https://www.linkedin.com/in/mahmoud-ramy-elbehery-752aab235"
            ariaLabel="LinkedIn profile of Mahmoud Elbehery"
            Icon={FaLinkedin}
          />
          <SocialLink
            href="https://github.com/mahmoudramy93"
            ariaLabel="GitHub profile of Mahmoud Elbehery"
            Icon={FaGithub}
          />
          <SocialLink
            href="https://x.com/mahmoudramy93"
            ariaLabel="X (formerly Twitter) profile of Mahmoud Elbehery"
            Icon={FaXTwitter}
          />
        </div>
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
