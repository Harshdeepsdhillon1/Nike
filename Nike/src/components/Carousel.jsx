import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Carousel = ({ slides, heading }) => {
    return (
      <div className="carousel-container">
        {/* Custom Heading */}
        {heading && <h2 className="carousel-heading">{heading}</h2>}
  
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="carousel-slide">
              <div className="carousel-card">
                <img src={slide.url} alt={slide.title} className="carousel-img" />
                <h3 className="carousel-title">{slide.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  export default Carousel;

