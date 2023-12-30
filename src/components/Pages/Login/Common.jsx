/* eslint-disable react/prop-types */
import loginimg from "../../../assets/login.jpg";

const Common = ({ children }) => {
  return (
    <div
      className=" h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${loginimg})`,
      }}
    >
      <div className="w-full h-full bg-[#413535af]">{children}</div>
    </div>
  );
};

export default Common;
