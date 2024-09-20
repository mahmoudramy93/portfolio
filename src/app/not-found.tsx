import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center flex flex-col justify-center gap-10 h-screen">
      <h1 className="text-3xl text-red-600">
        Sorry, the page you requested could not be found
      </h1>
      <h4 className="text-2xl ">
        you can add anything here with your own styles and languages as i
        mentioned in the article.
      </h4>
      <p className="text-xl ">
        please visit{" "}
        <Link href={"/"} className="text-blue-500 underline">
          Home page
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
