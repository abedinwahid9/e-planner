import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function PhotoGallery() {
  const photos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUa0ljsceVQtRu1wtG0BRJ9RPd4l5ZrHVNVXaqafd96fhDgR6YvC2rXi65VBGv8rHFrgY&usqp=CAU",
    "https://i.ibb.co/QmTptnW/Disney-Princess-Royal-Tea-1024x489.jpg",
    "https://i.ibb.co/sCZkhKW/25th-Wedding-Anniversary-wishes-106.jpg",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    "https://i.ibb.co/2h3Xxks/Moving-Pictures.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkSNaIkEh_wEA5t82W5mtFAJoXwuqim_G-w&usqp=CAU",
    "https://i.ibb.co/x1GdDm0/Royal-Tea-Party1-1024x565.jpg",
    "https://assets.vogue.in/photos/6360ee4b74016d3adc45f105/1:1/w_4534,h_4534,c_limit/JR.WP-244.jpg",
    "https://i.ibb.co/QmTptnW/Disney-Princess-Royal-Tea-1024x489.jpg",
    "https://cdn0.weddingwire.com/vendor/956110/original/960/jpg/bellwether0160_51_11659-165894018466312.webp",
    "https://cdn0.weddingwire.com/vendor/956110/original/960/jpg/thumbnail-22_51_11659-163050404595739.webp",
    "https://i.pinimg.com/originals/35/6b/2d/356b2d848230e9aac62878accca124eb.jpg",
    "https://i.pinimg.com/originals/f3/12/10/f3121031f44e6f42445be6c337f322c0.jpg",
    "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-640w.jpeg",
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2011/1/6/1/Original_Kara-Allen-kids-gumball-birthday-party_s4x3.jpg.rend.hgtvcom.966.725.suffix/1400960308778.jpeg",
    "https://www.lhcm.org/ImageRepository/Document?documentID=10016",
    "https://i.ibb.co/Y0BQ8PP/341607-800x533-birthday-party-names-1001540940-1.webp",
    "https://image.wedmegood.com/resized/1000X/uploads/member/3680178/1668860942_MDP_293_2.jpg?crop=8,221,2033,1144",
    "https://image.wedmegood.com/resized/1000X/uploads/vendor_cover_pic/9765/972dd0fe-5192-4f9f-8428-81d706c78e64.png",
    "https://img.ehowcdn.com/630x/photos.demandstudios.com/getty/article/167/177/80612314.jpg?type=webp",
    "https://www.partyplanetindia.com/images/gallery/baby-showers/big-img/7.jpg",
    "https://www.partyplanetindia.com/images/gallery/baby-showers/big-img/9.jpg",
  ];

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 420: 1, 800: 2, 1025: 3 }}>
      <Masonry columnsCount={3} gutter={15}>
        {photos?.map((photo, i) => {
          return (
            <img
              data-aos="fade-up"
              className="rounded-2xl "
              key={i}
              src={photo}
              alt=""
              style={{ width: "100%", display: "block" }}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default PhotoGallery;
