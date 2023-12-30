import banner from "../../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className=" lg:text-7xl md:text-5xl text-2xl font-bold mb-3">
            Creating Memories
          </h1>
          <h1 className=" lg:text-7xl md:text-5xl text-2xl font-bold">
            Celebrating Life
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
