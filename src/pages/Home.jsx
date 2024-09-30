import './home.scss'

import Logo from "@/assets/images/logo.jpg";
import Pic1 from "@/assets/images/1.jpg";
import Pic2 from "@/assets/images/2.jpg";
import Pic3 from "@/assets/images/3.jpg";
import Pic4 from "@/assets/images/4.jpg";
import Pic5 from "@/assets/images/5.jpg";
import Pic6 from "@/assets/images/6.jpg";
import Pic7 from "@/assets/images/7.jpg";
import Pic8 from "@/assets/images/8.jpg";

import { motion } from "framer-motion"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';




const Home = () => {
  return (
    <div className="homepage">

      <div className="homeintro">
        <h1>Exporting high quality, sustainable and eco friendly products since 1996.</h1>
        <img src={Logo} alt="Picture" />
      </div>
      <div className="homeourstory">
        <h1>Our Story</h1>
        <p>
          In 1990, We established a company named as 'Shaktirugs', where we domestically supplied rugs. Later, we started exporting to other countries mainly USA.
        </p>
        <p>Since 2005, Our company has been manufacturing and exporting multiple categories of storage items like Crunch cans, Bags, Wall and Pocket hangings etc. We export to USA, Norway, Canada, Sweden and other western & European countries.</p>
        <p>In 2019, We started a new company 'Crescent Export' in which we export these storage items.</p>
        <p>We deliver high quality ,eco friendly , sustainable and affordable products on time.</p>
        <p>Our main motive is to keep our customers happy.</p>
        <div className="enquirebutton">
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="" target='_top'>ENQUIRE</motion.a></div>
      </div>
      <div className="homeproducts">
        <h1>Products</h1>
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
        <SwiperSlide><img className='homeproductspics' src={Pic1} alt="Picture 1" /></SwiperSlide>
        {/* <SwiperSlide><img src={Pic2} alt="Picture 2" /></SwiperSlide> */}
        {/* <SwiperSlide><img src={Pic3} alt="Picture 3" /></SwiperSlide> */}
        <SwiperSlide><img className='homeproductspics' src={Pic4} alt="Picture 4" /></SwiperSlide>
        {/* <SwiperSlide><img src={Pic5} alt="Picture 5" /></SwiperSlide> */}
        <SwiperSlide><img className='homeproductspics' src={Pic6} alt="Picture 6" /></SwiperSlide>
        {/* <SwiperSlide><img src={Pic7} alt="Picture 7" /></SwiperSlide> */}
        <SwiperSlide><img className='homeproductspics' src={Pic8} alt="Picture 8" /></SwiperSlide>

      </Swiper>


    </div>
  )
}

export default Home