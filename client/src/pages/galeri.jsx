import bg_home from '../images/bg-hero1.jpeg'

// IMPORT FILES
import '../App.css';
import ArrowRight from '../components/nextArrow';
import ArrowLeft from '../components/prevArrow';

// IMPORT FILES REACT SLICK
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// IMPORT KONTEN GALLERY
// Green House
import GH1 from '../images/gallery/GH1.png'
import GH2 from '../images/gallery/GH2.jpg'
import GH3 from '../images/gallery/GH3.jpg'
import GH4 from '../images/gallery/GH4.jpg'
import GH5 from '../images/gallery/GH5.jpg'

// Dedication
import dedikasi1 from '../images/gallery/dedikasi1.jpg'
import dedikasi2 from '../images/gallery/dedikasi2.png'
import dedikasi3 from '../images/gallery/dedikasi3.jpg'
import dedikasi4 from '../images/gallery/dedikasi4.jpg'

// Garden
import garden1 from '../images/gallery/garden1.jpg'
import garden2 from '../images/gallery/garden2.jpg'
import garden3 from '../images/gallery/garden3.jpg'
import garden4 from '../images/gallery/garden4.jpg'

// Penghargaan
import penghargaan1 from '../images/gallery/penghargaan1.png'
import penghargaan2 from '../images/gallery/penghargaan2.png'
import penghargaan3 from '../images/gallery/penghargaan3.png'

// Produk
import produk1 from '../images/gallery/produk1.jpeg'
import produk2 from '../images/gallery/produk2.jpeg'
import produk3 from '../images/gallery/produk3.jpeg'
import produk4 from '../images/gallery/produk4.jpeg'
import produk5 from '../images/gallery/produk5.jpeg'
import produk6 from '../images/gallery/produk6.JPG'
import produk7 from '../images/gallery/produk7.jpg'

// IMPORT COMPONENTS
import Header from "../components/header"
import Footer from "../components/footer"

function galeri () {
  var settings = {
    arrow: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrow: false

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
      <div>
        {/* HEADER */}
        <Header />

        {/* HOME */}
        <div
          className="relative bg-cover bg-center h-[630px] flex items-center"
          style={{
            backgroundImage: `url(${bg_home})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-green-800 opacity-80"></div>
            <div className=" mx-auto relative z-10 flex  flex-col items-start justify-center">
              <h1 className="text-9xl font-bold text-white">Gallery</h1>
              {/* <h1 className="text-8xl float-left font-bold text-emerald-950">For Indonesia</h1> */}
            </div>
          </div>
        </div>
      
        {/* GALLERY CONTENT */}
        
        <div className='w-full  pt-[95px] pb-[95px] px-[30px] md:px-[50px] items-center justify-center drop-shadow-2xl' style={{
            background: 'linear-gradient(180deg, #ABF5AA 0%, #e8f4ea 48.1%, #e8f4ea 60.46%, #ABF5AA 89.58%) '
          }}>
            <div className='rounded-2xl w-full pt-[40px] md:py-[30px] items-center justify-center mb-[50px]' style={{background: '#ffffff'}}>
                  {/* OUR GARDEN */}
                  <div class="flex flex-row justify center ">
                    <div className="w-full h-full ml-[25px] md:ml-[50px]">
                      <h1 className="text-[25px] sm:text-[35px] font-semibold md:text-[40px] font-['Hint Madurai'] text-[#000000] leading-1">Our <br />Garden <br /></h1>
                      <h2 className="text-[20px] font-['Hint Madurai'] text-[#858585] pb-[100px]">Arta Grow Gallery </h2>
                      
                    </div>
                              
                    {/* GARDEN GALLERY SLIDER */}
                    <div class="Galeri">
                      <Slider {...settings}>
                          <div class='Card'>
                              <img src={garden1} alt='' className='w-[300px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={garden2} alt='' className='w-[270px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={garden3} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={garden4} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                      </Slider>
                    </div>      
                  </div>              
            </div>
            <div className='rounded-2xl w-full py-[30px] items-center justify-center mb-[50px]' style={{background: '#ffffff'}}>
                  {/* OUR GREEN HOUSE TITLE */}
                  <div class="flex flex-row justify center">
                    <div className="w-full h-full ml-[25px] md:ml-[50px]">
                      <h1 className="text-[25px] sm:text-[35px] font-semibold md:text-[40px] font-['Hint Madurai'] text-[#000000] leading-1">Our Green <br />House</h1>
                      <h2 className="text-[20px] font-['Hint Madurai'] text-[#858585] pb-[100px]">Arta Grow Gallery </h2>
                      
                    </div>
                              
                    {/* GREEN HOUSE GALLERY SLIDER */}
                    <div class="Galeri">
                      <Slider {...settings}>
                          <div class='Card'>
                              <img src={GH1} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={GH2} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={GH3} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={GH4} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={GH5} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                      </Slider>
                    </div>      
                  </div>              
            </div>
            <div className='rounded-2xl w-full py-[30px] items-center justify-center mb-[50px]' style={{background: '#ffffff'}}>
                  {/* OUR AGRITECH DEDICATION TITLE */}
                  <div class="flex flex-row justify center">
                    <div className="w-full h-full ml-[25px] md:ml-[50px]">
                      <h1 className="text-[24px] sm:text-[35px] font-semibold md:text-[35px] font-['Hint Madurai'] text-[#000000] leading-1">Our Agritech<br />Dedication</h1>
                      <h2 className="text-[20px] font-['Hint Madurai'] text-[#858585] pb-[100px]">Arta Grow Gallery </h2>
                      
                    </div>
                              
                    {/* AGRITECH DEDICATION GALLERY SLIDER */}
                    <div class="Galeri">
                      <Slider {...settings}>
                          <div class='Card'>
                              <img src={dedikasi1} alt='' className='w-[250px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={dedikasi2} alt='' className='w-[250px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={dedikasi3} alt='' className='w-[250px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={dedikasi4} alt='' className='w-[250px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                      </Slider>
                    </div>      
                  </div>              
            </div>
            <div className='rounded-2xl w-full py-[30px] items-center justify-center mb-[50px]' style={{background: '#ffffff'}}>
                  {/* OUR CLIENTS TITLE */}
                  <div class="flex flex-row justify center">
                    <div className="w-full h-full ml-[25px] md:ml-[50px]">
                      <h1 className="text-[25px] sm:text-[35px] font-semibold md:text-[40px] font-['Hint Madurai'] text-[#000000] leading-1">Our<br />Achievement</h1>
                      <h2 className="text-[20px] font-['Hint Madurai'] text-[#858585] pb-[100px]">Arta Grow Gallery </h2>
                      
                    </div>
                              
                    {/* GALLERY SLIDER */}
                    <div class="Galeri">
                      <Slider {...settings}>
                          <div class='Card'>
                              <img src={penghargaan1} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={penghargaan2} alt='' className='w-[300px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={penghargaan3} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                      </Slider>
                    </div>      
                  </div>              
            </div>
            <div className='rounded-2xl w-full py-[30px] items-center justify-center' style={{background: '#ffffff'}}>
                  {/* OUR PLANT PRODUCT TITLE */}
                  <div class="flex flex-row justify center">
                    <div className="w-full h-full ml-[25px] md:ml-[50px]">
                      <h1 className="text-[25px] sm:text-[35px] font-semibold md:text-[40px] font-['Hint Madurai']x] md: text-[#000000] leading-1">Our Plant<br />Product</h1>
                      <h2 className="text-[20px] font-['Hint Madurai'] text-[#858585] pb-[100px]">Arta Grow Gallery </h2>
                      
                    </div>
                              
                    {/* PLANT PRODUCT GALLERY SLIDER */}
                    <div class="Galeri">
                      <Slider {...settings}>
                          <div class='Card'>
                              <img src={produk1} alt='' className='w-[300px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={produk2} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={produk3} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={produk4} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={produk5} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={produk6} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                          <div className='Card'>
                              <img src={produk7} alt='' className='w-[350px] h-[225px] mx-auto rounded-2xl shadow-l'/>
                                <div className='card-body'>
                                </div>
                          </div>
                      </Slider>
                    </div>      
                  </div>              
            </div>
        </div>


        {/* FOOTER*/}
       <Footer />
        {/* END OF FOOTER */}
    </>
  )
}

export default galeri;

