import { TServiceProps } from "@/types/serviceType";

const ServiceCard = ({ title, description, icon: Icon }: TServiceProps) => {
  return (
    <div className="p-[10px] flex flex-col items-center gap-5 transform transition-transform duration-300 hover:scale-105">
      <Icon className="text-4xl font-normal text-lightTealGreen dark:text-tealGreen transition-colors duration-300 hover:text-white" />
      <h3 className="text-xl text-white text-center font-normal transition-opacity duration-[5000] hover:opacity-90">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
