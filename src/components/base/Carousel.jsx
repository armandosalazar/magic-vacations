import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

// @ts-ignore
const SliderComponent = !!Slider.default ? Slider.default : Slider;

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderComponent {...settings}>
      <div className="rounded-3xl bg-white p-4">
        <img
          className="rounded-2xl"
          src="/images/banner-1.webp"
          alt=""
          srcset=""
        />
      </div>
      <div className="rounded-3xl bg-white p-4">
        <img
          className="rounded-2xl"
          src="/images/banner-2.webp"
          alt=""
          srcset=""
        />
      </div>
      <div className="rounded-3xl bg-white p-4">
        <img
          className="rounded-2xl"
          src="/images/banner-3.webp"
          alt=""
          srcset=""
        />
      </div>
    </SliderComponent>
  );
}
