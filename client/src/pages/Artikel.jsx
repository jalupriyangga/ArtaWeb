import logo from '../images/Frame (1).png'
import textLogo from '../images/text-artagrow.png'
import bg_home from '../images/bg-hero1.jpeg'
// import CEO from './images/CEO.png'
// import vision from './images/icon/growth.png'
// import palm from './images/icon/palm.png'
// import harvest from './images/icon/harvest (1).png'
// import service from './images/icon/public-service.png'

// // FOTO CLIENT
// import ayam_cao from './images/clients/ayam.png'
// import bakmie_hokki from './images/clients/bakmie-hokki.jpeg'
// import hydroponic_farm from './images/clients/hydroponic-farm.jpeg'
// import katering from './images/clients/katering.png'
// import kebab from './images/clients/kebab.png'
// import kedai from './images/clients/kedai.png'
// import kober from './images/clients/kober.png'
// import lowcal from './images/clients/lowcal.png'
// import tomo from './images/clients/tomo.jpg'

// // FOTO SUPPORTED BY
// import awmm_ub from './images/clients/awmm-ub.png'
// import bem_fia_ub from './images/clients/bem-fia-ub-22.png'
// import bem_fp_ub from './images/clients/bem-fp-ub-21.png'
// import eo from './images/clients/eo-logo.png'
// import GN1000startup from './images/clients/Logo_Gerakan_Nasional_1000_Startup_Digital.png'
// import AstraStartupCom from './images/clients/Logo-Astra-Startup-Community.png'
import SD_Bareng3 from '../images/clients/sd-bareng-3.png'
import UB from '../images/clients/UB.png'
import yayasan_apsai from '../images/clients/yayasan-apsai.png'

// IMPORT FILES
// import '../App.css';
import '../Artikel.css';
import { useState, useEffect, useRef } from "react";

// IMPORT FILES REACT SLICK
import React, { Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// IMPOR GARDEN PIC
import garden1 from '../images/gallery/garden1.jpg'
import garden2 from '../images/gallery/garden2.jpg'
import garden3 from '../images/gallery/garden3.jpg'
import garden4 from '../images/gallery/garden4.jpg'

const images = [garden1, garden2, garden3, garden4, SD_Bareng3, UB, yayasan_apsai]

// IMPORT PRODUCT CARD
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";


function Artikel() {
    const [slideIndex, setSlideIndex] = useState(0);

  var settings = {
    arrows: false,
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (_current, next) => setSlideIndex(next),
    autoplay: false,
      cssEase: "linear",
      appendDots: (dots) => (
        <div>
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: (current, next) => (
        <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
        </div>
      ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
        <div className='w-full h-[70px] bg-white drop-shadow-2xl flex items-center justify-center'>
          <div className='flex flex-row mr-[190px] items-center'>
            <img src={logo} className='w-[40px] mr-[10px]' />
            <img src={textLogo} className='h-[30px]' />
          </div>
          <div className='flex flex-row'>
            <h1 className='mr-[40px]'>Home</h1>
            <h1 className='mr-[40px]'>About</h1>
            <h1 className='mr-[40px]'>Products</h1>
            <h1 className='mr-[40px]'>Careers</h1>
            <h1 className='mr-[40px]'>Gallery</h1>
            <h1 className='mr-[40px]'>Clients & Supported</h1>
            <h1 className='mr-[40px]'>Blog</h1>
            <h1 className='mr-[40px]'>Contact</h1>
          </div>
        </div>

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
              <h1 className="text-9xl font-bold text-white">BLOG</h1>
              {/* <h1 className="text-8xl float-left font-bold text-emerald-950">For Indonesia</h1> */}
            </div>
          </div>
        </div>
        {/* ABOUT US */}
        <div class = 'container' className='bg-white h-full mb-[55px]'>
                <div class ='Header' className="w-full h-[47px] flex items-center justify-center my-[30px]">
                    <h1 className="text-[48px] font-['Hint Madurai'] text-[#338755]">NEWS</h1>
                </div>
            <div className="w-full h-full">
                
                <div className='mb-[100px]'>
                    <div class = "slider" className="h-full">
                        <Slider {...settings}>
                            {  
                                images.map((img, index)=>(
                                <div className={index === slideIndex ? 'slide slide-active': 'slide'} key={index}>
                                    <div class = 'holder' className='items-center justify-center bg-[#338755] w-full'>
                                        <img src={img} alt="" />
                                    </div>
                                </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
       {/* END OF OUR CLIENT & SUPPORTED BY*/}
        {/* FOOTER*/}
      <footer class="w-full h-[300px] bg-black text-white text-center py-4 flex items-center justify-center">
          <div class="container mx-auto">
            <h3 className='text-4xl font-bold text-white font-family'>ARTA GROW PERSADA</h3> <br />
              <p className='font italic'>Growing The Future of Agricultur in Indonesia
              </p>
                <div class="container mx-auto py-8 flex items-center justify-center">
                  {/* <a href="#" class="text-white hover:text-gray-400 transition duration-300"> */}
                  <div className='flex flex-row'>
                      {/* LOGO INSTAGRAM */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-10 mr-[10px] my-[4px] object-cover transition duration-300 transform hover:scale-125"
                        fill="#ffffffff"
                        viewBox="0 0 24 24">
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      {/* LOGO YOUTUBE */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 mr-[14px] object-cover transition duration-300 transform hover:scale-125"
                        fill="#ffffffff"
                        viewBox="0 0 24 24">
                        <path
                          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                      {/* LOGO LINKEDIN */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 my-[2px] mr-[14px] object-cover transition duration-300 transform hover:scale-125"
                        fill="#ffffffff"
                        viewBox="0 0 24 24"
                        >
                        <path
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                      {/* LOGO TIKTOK */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="h-8 w-7 mr-[10px] my-[4px] object-cover transition duration-300 transform hover:scale-125">
                        <path
                          fill="#ffffffff"
                          d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                      </svg>
                      {/* LOGO FACEBOOK */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 my-[2px] object-cover transition duration-300 transform hover:scale-125"
                        fill="#ffffffff"
                        viewBox="0 0 24 24">
                        <path
                          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </div>
                  {/* </a> */}
                </div>
                  <div class= "copyright">
                    &copy; Copyright
                    <strong> ARTA GROW PERSADA. </strong> All Rights Reserved.
                    <h5>Designed by
                      <span className='text-[#338755D6]'>
                        <a href="artagrow.com" > Arta Grow Persada</a>
                      </span>
                    </h5>                  
                  </div>
          </div>
        </footer>
        {/* END OF FOOTER */}
    </>
  )
}

export default Artikel;
