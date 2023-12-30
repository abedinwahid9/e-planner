/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ service }) => {
  const { id, name, image, short_description } = service;

  return (
    <div className="overflow-hidden h-full card  glass justify-between">
      <figure className="h-3/5">
        <img className="h-full w-full" src={image} alt="car!" />
      </figure>
      <div className="p-4 h-2/5 ">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-primaryThreeColor mb-2">{short_description}</p>
      </div>
      <div className="">
        <Link to={`/${id}`}>
          <button className="text-base font-bold w-full bg-primaryFirstColor h-12">
            View details!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
