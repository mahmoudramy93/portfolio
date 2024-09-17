import Link from "next/link";
import React from "react";

const SocialMediaFooter = () => {
  return (
    <footer className="py-10  ">
      <ul className="flex items-center justify-center">
        <li>
          <Link
            href="https://www.linkedin.com/in/mahmoud-ramy-elbehery-752aab235"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-300 p-4 transition-all duration-300 hover:text-tealGreen"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href="https://x.com/mahmoudramy93"
            target="_blank"
            aria-label="Twitter Profile"
            className="text-gray-300 p-4 transition-all duration-300 hover:text-tealGreen"
          >
            Twitter
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/mahmoudramy93"
            target="_blank"
            aria-label="GitHub Profile"
            className="text-gray-300 p-4 transition-all duration-300 hover:text-tealGreen"
          >
            Github
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default SocialMediaFooter;
