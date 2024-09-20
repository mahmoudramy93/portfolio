"use client";

import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      {isLoading ? (
        <div className="text-tealGreen text-2xl">
          Loading...{" "}
        </div>
      ) : (
        <Typewriter
          options={{
            strings: [
              "Hello World 👋",
              "I'm Mahmoud Elbehery",
              "Freelance Software Engineer",
              "Senior System Administrator",
              "Backend Developer 💻",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      )}
    </div>
  );
};

export default TypeWriter;
