import sp1 from "../../../../assets/Friendly Team.png";
import sp2 from "../../../../assets/Perfect Venues.png";
import sp3 from "../../../../assets/Unique Scenarios.png";
import sp4 from "../../../../assets/Unforgettable Time.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const SpecialSection = () => {
  return (
    <div
      data-aos="fade-right"
      className="flex md:flex-row gap-6 flex-col justify-around my-24"
    >
      <div className=" flex flex-col items-center gap-3">
        <img className="w-28 h-28" src={sp1} alt="" />
        <h2 className="text-lg font-bold">Friendly Team</h2>
      </div>
      <div className=" flex flex-col items-center gap-3">
        <img className="w-28 h-28" src={sp2} alt="" />
        <h2 className="text-lg font-bold">Perfect Venues</h2>
      </div>
      <div className=" flex flex-col items-center gap-3">
        <img className="w-28 h-28" src={sp3} alt="" />
        <h2 className="text-lg font-bold">Unique Scenarios</h2>
      </div>
      <div className=" flex flex-col items-center gap-3">
        <img className="w-28 h-28" src={sp4} alt="" />
        <h2 className="text-lg font-bold">Unforgettable Time</h2>
      </div>
    </div>
  );
};

export default SpecialSection;
