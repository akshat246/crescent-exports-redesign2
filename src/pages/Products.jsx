import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Products = () => {
  const slides = [
    {
      url: 'https://i.postimg.cc/HLG3QpSQ/b11.jpg',
    },
    {
      url: 'https://i.postimg.cc/j5cX0yRX/b21.jpg',
    },
    {
      url: 'https://i.postimg.cc/GmTq8BjL/b31.jpg',
    },

    {
      url: 'https://i.postimg.cc/NfMNtC9r/DSC00658.jpg',
    },
    {
      url: 'https://i.postimg.cc/Pxy25QG8/b41.jpg',
    },
    {
      url: 'https://i.postimg.cc/Y0Sxpj9w/DSC00662.jpg',
    },
    {
      url: 'https://i.postimg.cc/KjsD4Fk3/DSC00669.jpg',
    },
    {
      url: 'https://i.postimg.cc/BvxppdyR/DSC00672.jpg',
    },

    {
      url: 'https://i.postimg.cc/63t0mMxq/DSC00677.jpg',
    },
    
  ];

  const slides1 = [
    {
      url: 'https://i.postimg.cc/sDpSwcQq/DSC00685.jpg',
    },
    {
      url: 'https://i.postimg.cc/Xq9Z1jJd/DSC00686.jpg',
    },
    {
      url: 'https://i.postimg.cc/3wwvrQSQ/DSC00688.jpg',
    },

    {
      url: 'https://i.postimg.cc/fLGtvtwM/DSC00730.jpg',
    },
    {
      url: 'https://i.postimg.cc/vZYJm0Wd/DSC00639.jpg',
    },
    {
      url: 'https://i.postimg.cc/Zq0X8077/DSC00645.jpg',
    },
    {
      url: 'https://i.postimg.cc/wMYPY26Z/DSC00646.jpg',
    },
    {
      url: 'https://i.postimg.cc/rF1Tsd35/DSC00651.jpg',
    },
    {
      url: 'https://i.postimg.cc/3w6Vn7zK/DSC00653.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const [currentIndex1, setCurrentIndex1] = useState(0);

  const prevSlide1 = () => {
    const isFirstSlide1 = currentIndex1 === 0;
    const newIndex1 = isFirstSlide1 ? slides1.length - 1 : currentIndex1 - 1;
    setCurrentIndex1(newIndex1);
  };

  const nextSlide1 = () => {
    const isLastSlide1 = currentIndex1 === slides1.length - 1;
    const newIndex1 = isLastSlide1 ? 0 : currentIndex1 + 1;
    setCurrentIndex1(newIndex1);
  };

  const goToSlide1 = (slide1Index) => {
    setCurrentIndex1(slide1Index);
  };

  return (<div><div>Bags</div>
    <div className='max-w-[1000px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>

    <div>Pockets and Tiebacks</div>
    <div className='max-w-[1000px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides1[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide1} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide1} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides1.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Products