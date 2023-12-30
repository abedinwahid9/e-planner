import PhotoGallery from "./PhotoGallery/PhotoGallery";
import "./Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Gallery = () => {
  return (
    <div data-aos="fade-up" className="my-12 p-5">
      <h2 className="mb-10 text-center lg:text-5xl md:text-3xl font-bold">
        Our Gallery
      </h2>
      <PhotoGallery></PhotoGallery>
    </div>
  );
};

export default Gallery;
