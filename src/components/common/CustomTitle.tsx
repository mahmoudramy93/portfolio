import React from "react";

type TCustomTitleProps = {
  title: string;
  description: string;
};

const CustomTitle = ({ title, description }: TCustomTitleProps) => {
  return (
    <div className="flex flex-col gap-4  text-center relative pb-9 mb-20 before:content-[''] before:absolute before:w-[60px] before:h-0 before:bottom-0 before:left-1/2  before:border-b-[10px] before:border-dotted before:border-tealGreen before:-translate-x-1/2">
      <h2 className="text-tealGreen text-4xl">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default CustomTitle;
