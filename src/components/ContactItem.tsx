import React from "react";

type TContactItemProps = {
  Icon: React.ElementType;
  label: string;
  value: string;
  link: string | null;
};

const ContactItem = ({ Icon, label, link, value }: TContactItemProps) => {
  return (
    <li className="text-white flex items-center">
      <Icon className="text-tealGreen mr-4 text-2xl" />
      <p className="font-semibold">{label}: </p>
      {link ? (
        <a className="ml-2 text-blue-500" href={link}>
          {value}
        </a>
      ) : (
        <span className="ml-2">{value}</span>
      )}
    </li>
  );
};

export default ContactItem;
