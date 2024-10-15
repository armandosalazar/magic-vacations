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
    initialSlide: 0,
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
      <div className="relative flex justify-center rounded-3xl bg-white p-4">
        <h2 className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center font-bold text-white">
          Viajes <br />
          Nacionales
        </h2>
        <img
          className="rounded-2xl"
          src="/images/banner-1.webp"
          alt=""
          srcset=""
        />
      </div>
      <div className="relative rounded-3xl bg-white p-4">
        <h2 className="absolute bottom-20 left-1/2 -translate-x-1/2 transform text-center font-bold text-white">
          Viajes <br />
          Internacionales
        </h2>
        <img
          className="rounded-2xl"
          src="/images/banner-2.webp"
          alt=""
          srcset=""
        />
        <a
          href="https://www.reservatuviaje.mx/default.aspx?agentID=1325"
          target="_blank"
        >
          <button className="absolute bottom-1 left-1/2 z-50 -translate-x-1/2 rounded-3xl bg-[#626cec] px-4 py-2 text-sm text-white sm:flex">
            Reservas
          </button>
        </a>
      </div>
      <div className="relative rounded-3xl bg-white p-4">
        <h2 className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center font-bold text-white">
          Coordinación
          <br />
          de eventos
        </h2>
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
