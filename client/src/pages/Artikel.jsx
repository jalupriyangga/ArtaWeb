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

// IMPORT COMPONENTS
import Header from "../components/header"
import Footer from "../components/footer"


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
        <Footer />
        {/* END OF FOOTER */}
    </>
  )
}

export default Artikel;
