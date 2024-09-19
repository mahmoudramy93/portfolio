import { TServiceProps } from "@/types/serviceType";

const ServiceCard = ({ title, description, icon: Icon }: TServiceProps) => {
  return (
    <div className="p-[10px] flex flex-col items-center gap-5">
      <Icon className=" text-4xl font-normal text-lightTealGreen dark:text-tealGreen" />
      <h3 className="text-xl text-white text-center font-normal ">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
