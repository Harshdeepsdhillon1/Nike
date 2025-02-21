import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../css/membershipCarousel.css"; // New CSS file for styling

const MembershipCarousel = ({ slides, heading }) => {
  return (
    <div className="membership-carousel-container">
      {/* Section Heading */}
      {heading && <h2 className="membership-heading">{heading}</h2>}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="membership-slide">
            <div
              className="membership-card"
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <h3 className="membership-title">{slide.title}</h3>
              <button className="btn-primary">Explore</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MembershipCarousel;
