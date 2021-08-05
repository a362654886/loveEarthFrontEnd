import * as React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../../src/slider.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { useHistory } from "react-router-dom";
import volunteer1 from "../files/volunteer/volunteer1.jpg";
import volunteer2 from "../files/volunteer/volunteer2.jpg";
import volunteer3 from "../files/volunteer/volunteer3.jpg";
import volunteer4 from "../files/volunteer/volunteer4.jpg";
import volunteer5 from "../files/volunteer/volunteer5.jpg";
import volunteer6 from "../files/volunteer/volunteer6.jpg";
import volunteer7 from "../files/volunteer/volunteer7.png";
import volunteer8 from "../files/volunteer/volunteer8.jpg";
import volunteer9 from "../files/volunteer/volunteer9.jpeg";
import volunteer10 from "../files/volunteer/volunteer10.jpg";
import volunteer11 from "../files/volunteer/volunteer11.jpg";
import volunteer12 from "../files/volunteer/volunteer12.jpg";
import volunteer13 from "../files/volunteer/volunteer13.jpg";
import volunteer14 from "../files/volunteer/volunteer14.jpg";
import volunteer15 from "../files/volunteer/volunteer15.jpg";
import volunteer16 from "../files/volunteer/volunteer16.jpeg";
import volunteer17 from "../files/volunteer/volunteer17.jpg";
import volunteer18 from "../files/volunteer/volunteer18.jpg";
import volunteer19 from "../files/volunteer/volunteer19.jpeg";
import volunteer20 from "../files/volunteer/volunteer20.jpg";
import volunteer21 from "../files/volunteer/volunteer21.png";
import volunteer22 from "../files/volunteer/volunteer22.jpg";
import volunteer23 from "../files/volunteer/volunteer23.jpg";
import { VolunteerImg } from "../cssJs/volunteerCsss";
import styled from "styled-components";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export const SliderVolunteerDiv = (): JSX.Element => {
  const history = useHistory();

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={3}
        freeMode={true}
        className="mySwiper"
      >
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer1} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer2} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer3} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer4} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer5} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer6} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer7} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer8} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer9} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer10} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer11} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer12} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer13} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer14} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer15} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer16} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer17} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer18} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer19} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer20} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer21} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer22} />
          </VolunteerImg>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fdfff4" }}>
          <VolunteerImg>
            <img src={volunteer23} />
          </VolunteerImg>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
