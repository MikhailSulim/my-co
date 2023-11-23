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
        Свежие <br />
        новости
      </h2>

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
        {SLIDES.map((slide,idx) => (
          <SwiperSlide key={idx} className="swiper__slide">
            <img src={slide.src} alt={slide.alt} />
            <div className={`swiper__text 
            ${idx%2===0 ? 'swiper__text_top-right': "swiper__text_top-left"}`}>
              <p className='swiper__text-item'>{slide.text}</p>  
              <a href='/' className='swiper__text-link'>Подробнее &rarr;</a> </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* </div> */}
    </section>
  );
};

export default RecentProject;
