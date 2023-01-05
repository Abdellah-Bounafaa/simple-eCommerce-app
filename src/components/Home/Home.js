import Image1 from "../../assets/shardar-tarikul-islam-tIQ2t64FKy8-unsplash.jpg";
import Image2 from "../../assets/rachit-tank-2cFZ_FB08UM-unsplash.jpg";

import Image3 from "../../assets/j-luis-esquivel-ArGvQkA7iOw-unsplash.jpg";
import Image4 from "../../assets/revolt-164_6wVEHfI-unsplash_1400x720.jpg";
import "./Home.css";
export default function Home() {
  return (
    <>
      {" "}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image1} className="d-block w-100 image" />
          </div>
          <div className="carousel-item active">
            <img src={Image2} className="d-block w-100 image" />
          </div>
          <div className="carousel-item active">
            <img src={Image3} className="d-block w-100 image" />
          </div>
          <div className="carousel-item active">
            <img src={Image4} className="d-block w-100 image" />
          </div>
        </div>
      </div>
    </>
  );
}
