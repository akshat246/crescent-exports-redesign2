import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';

const Products = () => {
  
  return ( <div>
    <div className='homeproducts'>
      <h1> Bags </h1>
    </div>
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
        spaceBetween={10}
        slidesPerView={2} // Default value for larger screens
        breakpoints={{
          // When the screen width is >= 760px, use this setting
          760: {
            slidesPerView: 3, // Or any number you want for larger screens
          },
          // When the screen width is <= 759px, use this setting
          0: {
            slidesPerView: 2, // Number of slides per view for smaller screens
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

      >
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/HLG3QpSQ/b11.jpg"} alt="bag" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/j5cX0yRX/b21.jpg"} alt="bag" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/GmTq8BjL/b31.jpg"} alt="bag" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/KjsD4Fk3/DSC00669.jpg"} alt="bag" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/qM1pMCYz/DSC00705.jpg"} alt="bag" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/4yBRdrWr/DSC00722.jpg"} alt="bag" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/505VcHL9/DSC00726.jpg"} alt="bag" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/T1RXTRJV/DSC00727.jpg"} alt="bag" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/NG4cpHQp/DSC00753.jpg"} alt="brown bag" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/FsLMdWTd/DSC00760.jpg"} alt="bag" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/JzC9bNFT/DSC00759.jpg"} alt="bag" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/FsLMdWTd/DSC00760.jpg"} alt="bag" /></SwiperSlide>
        

      </Swiper>

      <div className='homeproducts'>
      <h1> Tiebacks </h1>
    </div>

    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
        spaceBetween={10}
        slidesPerView={2} // Default value for larger screens
        breakpoints={{
          // When the screen width is >= 760px, use this setting
          760: {
            slidesPerView: 3, // Or any number you want for larger screens
          },
          // When the screen width is <= 759px, use this setting
          0: {
            slidesPerView: 2, // Number of slides per view for smaller screens
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

      >
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/zBF7Wh9g/DSC00646.jpg"} alt="Picture 1" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/kgLTdqQB/DSC00651.jpg"} alt="Picture 2" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/sD6nwp1P/DSC00708.jpg"} alt="Picture 3" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/FFj5WnQy/DSC00820.jpg"} alt="Picture 4" /></SwiperSlide>

      </Swiper>

      <div className='homeproducts'>
        <h1> Wall Pockets</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
        spaceBetween={10}
        slidesPerView={2} // Default value for larger screens
        breakpoints={{
          // When the screen width is >= 760px, use this setting
          760: {
            slidesPerView: 3, // Or any number you want for larger screens
          },
          // When the screen width is <= 759px, use this setting
          0: {
            slidesPerView: 2, // Number of slides per view for smaller screens
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

      >

        <SwiperSlide><img className='homeproductspics' src={"https://i.postimg.cc/3wwvrQSQ/DSC00688.jpg"} alt="Picture 6" /></SwiperSlide>

      </Swiper>

      
  </div>
  );
}

export default Products