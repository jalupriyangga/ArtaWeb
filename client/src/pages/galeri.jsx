import logo from '../images/Frame (1).png'
import textLogo from '../images/text-artagrow.png'
import bg_home from '../images/bg-hero1.jpeg'

// IMPORT FILES
import '../App.css';
import { useState, useEffect, useRef } from "react";
import nextArrow from '../components/NextArrow';

// IMPORT FILES REACT SLICK
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// // IMPORT WHO ARE WE?
// import bggradient from './images/whoarewe/Home.svg'

// // IMPORT OUR TEAM
// import ridho from './images/our-team/ridho.png'
// import clau from './images/our-team/clau.png'
// import hayu from './images/our-team/hayu.png'
// import ana from './images/our-team/ana.png'

// // IMPORT OUR VALUES
// import harga from './images/our-value/harga.png'
// import keberlanjutan from './images/our-value/keberlanjutan.png'
// import kualitas from './images/our-value/kualitas.png'
// import mudah_akses from './images/our-value/mudah-akses.png'
// import negosiasi from './images/our-value/negoisasi.png'
// import pengiriman from './images/our-value/pengiriman.png'

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


// IMPORT PRODUCT CARD
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";

function galeri () {
  var settings = {
    arrow: true,
    nextArrow: <nextArrow />,
    // prevArrow: <ArrowLeft />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    
    // autoplay: true,    
    //   autoplaySpeed: 3000,
    //   cssEase: "linear",

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

        {/* WHO WE ARE? */}
        {/* <div
          className="relative bg-cover bg-center h-[700px] flex items-center"
          style={{
            backgroundImage: `url(${bggradient})`,
            backgroundSize: 'cover',
          }}
        >
          <div className=" mx-auto relative z-10 flex flex-col items-start justify-center">
            <div className="my-auto flex w-full items-center flex-col relative">
              <div className="text-center font-bold leading-[56px] mt-[0px]">
                <h1 className="text-[70px] font-['Inter'] text-[#338755]">WHO ARE WE?</h1>
              </div>
              <div className='w-[1026px]  text-center font-medium leading-[56px] mt-[40px] '>
              <div className='flex flex-row mt-[15px] items-center'>
                    <div className='mx-auto' >
                    <img
                      className="h-[400px] w-[400px] rounded-3xl object-cover object-center shadow-2xl shadow-green-500/70"
                      src= {bg_home}
                      alt="foto meeting"
                    />
                    </div>
                    <h1 className="font-['Poppins'] ml-[42px]  w-[599px] leading-normal  text-[30px] font-normal text-black text-left ">
                    Startup agribisnis yang fokus terhadap dunia pertanian dan memiliki dedikasi tinggi untuk berkontribusi dalam pertanian Indonesia
                    </h1>
                  </div>
              </div>
            </div>
          </div>
        </div> */}
        
        {/* GALLERY CONTENT */}
        
        <div className='w-full  pt-[95px] pb-[95px] px-[30px] md:px-[100px] items-center justify-center drop-shadow-2xl' style={{
            background: 'linear-gradient(180deg, #ABF5AA 0%, #e8f4ea 48.1%, #e8f4ea 60.46%, #ABF5AA 89.58%) '
          }}>
            <div className='rounded-2xl w-full py-[30px] items-center justify-center mb-[50px]' style={{background: '#ffffff'}}>
                  {/* OUR GARDEN */}
                  <div class="flex md:flex-row justify center ">
                    <div className="w-full h-full ml-[25px] md:ml-[50px]">
                      <h1 className="text-[40px] md:text-[48px] font-['Hint Madurai'] text-[#000000] leading-1">Our <br />Garden <br /></h1>
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
                      <h1 className="text-[40px] md:text-[48px] font-['Hint Madurai'] text-[#000000] leading-1">Our Green <br />House</h1>
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
                      <h1 className="text-[40px] md:text-[48px] font-['Hint Madurai'] text-[#000000] leading-1">Our Agritech<br />Dedication</h1>
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
                      <h1 className="text-[40px] md:text-[48px] font-['Hint Madurai'] text-[#000000] leading-1">Our<br />Achievement</h1>
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
                      <h1 className="text-[40px] md:text-[48px] font-['Hint Madurai']x] md: text-[#000000] leading-1">Our Plant<br />Product</h1>
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
      {/* </div> */}
      
    </>
  )
}

export default galeri;

