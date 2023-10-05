import './RecentProject.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { SLIDES } from '../../utils/constants';
import React from 'react';

const RecentProject: React.FC = () => {
  return (
    <section id="current" className="recent-project">
      <h2 className="recent-project__title">
        Текущий <br />
        проект
      </h2>
      {/* <div className="recent-project__content"> */}

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide className="swiper__slide">
            <img src={slide.src} alt={slide.alt} />
            <p className="swiper__text swiper__text_top-left">{slide.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* </div> */}
    </section>
  );
};

export default RecentProject;
