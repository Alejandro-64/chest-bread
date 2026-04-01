import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import HeroDesktop1 from "../../../assets/images/hero-1-desktop.webp";
import HeroDesktop2 from "../../../assets/images/hero-2-desktop.webp";
import HeroMobile1 from "../../../assets/images/hero-1-mobile.webp";
import HeroMobile2 from "../../../assets/images/hero-2-mobile.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    img: {
      desktop: HeroDesktop1,
      mobile: HeroMobile1,
    },
    alt: "We are everywhere",
  },
  {
    id: 2,
    img: {
      desktop: HeroDesktop2,
      mobile: HeroMobile2,
    },
    alt: "the best burgers you'll find while walking",
  },
];

const SectionHero = () => {
  return (
    <section className="relative w-full  lg:rounded-md lg:overflow-hidden group">
      <h1 className="sr-only">The best artisanal burgers in Lima</h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <picture className="w-full">
              <source media="(min-width: 1024px)" srcSet={slide.img.desktop} />
              <img
                src={slide.img.mobile}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full aspect-2/3 object-cover object-center lg:aspect-square lg:object-fill"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        aria-label="Previous Image"
        className="button-prev absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-bg-2 p-2 md:p-4 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 text-text-3 cursor-pointer"
      >
        <BsChevronLeft size={24} />
      </button>

      <button
        aria-label="Next Image"
        className="button-next absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-bg-2 p-2 md:p-4 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 text-text-3 cursor-pointer"
      >
        <BsChevronRight size={24} />
      </button>
    </section>
  );
};

export default SectionHero;
