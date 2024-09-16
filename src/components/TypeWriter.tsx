"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Hello World 👋",
          "I'am Mahmoud Elbehery",
          "Freelance Software Engineer",
          "Senior System Administrator",
          "Backend Developer 💻",
        ],
        autoStart: true,
        loop: true,
        // A lower value will make the effect faster
        delay: 50,
      }}
    />
  );
};

export default TypeWriter;
