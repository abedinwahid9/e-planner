import Reviews from "../Reviews/Reviews";
import Banner from "./Banner/Banner";
// import Maps from "./Maps/Maps";

import OUrServices from "./OurServices/OUrServices";
import SpecialSection from "./SpecialSection/SpecialSection";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <SpecialSection></SpecialSection>
      <OUrServices></OUrServices>
      <Reviews></Reviews>
    </>
  );
};

export default Home;
