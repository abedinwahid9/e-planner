import { useContext, useState, useEffect } from "react";
import Card from "../../../Card/Card";
import { contextApi } from "../../../../App";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const OUrServices = () => {
  const contextData = useContext(contextApi);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (contextData && contextData.events) {
      setIsLoading(false);
    }
  }, [contextData]);

  return (
    <div data-aos="fade-up" className="my-10 ">
      <div>
        <h2 className="lg:text-5xl md:text-2xl text-lg font-semibold text-center">
          Our Services
        </h2>
        <div className="divider w-3/4 mx-auto mb-10"></div>
        <div className="p-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {isLoading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            contextData.events?.map((service) => {
              return <Card key={service.id} service={service}></Card>;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default OUrServices;
