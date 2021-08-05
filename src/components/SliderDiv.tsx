import * as React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "../../src/slider.css";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import {
  ContextFont,
  LearnButton,
  MainPageImgDiv,
  MainPagePDiv,
  MainPageTextDiv,
} from "../cssJs/mianPageCss";
import { useHistory } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export const SliderDiv = (): JSX.Element => {
  const history = useHistory();

  const toPage = (url: string) => {
    history.push({
      pathname: `/mainPage/${url}`,
    });
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <MainPageImgDiv>
            <MainPageTextDiv>
              <ContextFont>Love the Earth, Love Life</ContextFont>
              <ContextFont>New Zealand, New Life</ContextFont>
              <MainPagePDiv>
                Love and Peace, Math, Science, Arts and Music, environment
                protection and conservation, sustainability, culture and
                language learning
              </MainPagePDiv>
            </MainPageTextDiv>
            <LearnButton onClick={() => toPage("ourStory")}>
              LEARN MORE
            </LearnButton>
          </MainPageImgDiv>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
};
