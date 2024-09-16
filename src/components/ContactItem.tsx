import Link from "next/link";
import React from "react";

type TContactItemProps = {
  Icon: React.ElementType;
  label: string;
  value: string;
  link: string | null;
};

const ContactItem = ({ Icon, label, link, value }: TContactItemProps) => {
  return (
    <li className="text-white flex items-center flex-wrap gap-2">
      <Icon className="text-tealGreen text-2xl" />
      <p className="font-semibold">{label}: </p>
      {link ? (
        <Link
          className="text-blue-500 transition-all duration-300 hover:text-blue-600 flex-wrap"
          href={link}
        >
          {value}
        </Link>
      ) : (
        <span className="ml-2">{value}</span>
      )}
    </li>
  );
};

export default ContactItem;
