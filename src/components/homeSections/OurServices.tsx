import React, { useMemo } from "react";

import { servicesData } from "@/data/servicesData";
import { TServiceProps } from "@/types/serviceType";
import ServiceCard from "./ServiceCard";
import { CustomTitle } from "../common";

const OurServices = () => {
  const renderServiceCards = useMemo(
    () =>
      servicesData.map((service: TServiceProps) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      )),
    [servicesData]
  );

  return (
    <section
      className="py-[60px] px-5  bg-gray-800 dark:bg-darkColor  rounded-[50px]"
      id="our_services"
      aria-label="Our Services"
    >
      <div className="container">
        <CustomTitle title={"Services"} description={"What I do"} />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {renderServiceCards}
        </div>
      </div>
    </section>
  );
};

export default React.memo(OurServices);
