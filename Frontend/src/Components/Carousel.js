import React, { useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../App.css";
import Context from "./Context";
import { CarouselData } from "./SampleData";
const Carousel = () => {
  const context = useContext(Context);
  const { carouselItem, setCarouselItem } = context;
  const handleClick = (arrow) => {
    if (arrow === "left") {
      setCarouselItem(carouselItem > 0 ? carouselItem - 1 : 2);
    } else {
      setCarouselItem(carouselItem < 2 ? carouselItem + 1 : 0);
    }
  };
  return (
    <div className="container">
      <div className="carousel">
        <div
          className="larrow"
          onClick={() => {
            handleClick("left");
          }}
        >
          <ArrowBackIosIcon />
        </div>
        <div
          className="carousel-item-container"
          style={{
            transform: `translateX(${carouselItem * -100}vw)`,
            display: "flex",
            transition: "1s",
          }}
          data-interval="1000"
        >
          {CarouselData.map((item) => (
            <div className="carousel-item" key={item.id}>
              <div className="carousel-image">
                <img src={item.img} alt="" />
              </div>
              <div className="carousel-info">
                <h1>
                  {item.title}
                  <br />
                  {item.desc}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div
          className="rarrow"
          onClick={() => {
            handleClick("right");
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
