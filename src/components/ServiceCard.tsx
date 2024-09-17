import { TServiceProps } from "@/types/serviceType";

const ServiceCard = ({ title, description, icon: Icon }: TServiceProps) => {
  return (
    <div className="p-[10px] flex flex-col items-center gap-5">
      <Icon className=" text-5xl font-normal text-tealGreen" />
      <h4 className="text-xl text-white text-center font-normal ">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
