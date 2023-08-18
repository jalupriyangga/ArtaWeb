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

// // FOTO ARTIKEL
import Era_tani from '../images/blog/Era_tani.jpg';
import ibu_ibu_meringis from '../images/blog/ibu_ibu_meringis.jpeg';
import Inovasi_Bertani_Ala_Pemuda_Gobleg from '../images/blog/Inovasi_Bertani_Ala_Pemuda_Gobleg.jpg';
import jack_ma from '../images/blog/jack-ma.jpeg';
import menko_luhut_binsar_pandjaitan from '../images/blog/menko-luhut-binsar-pandjaitan.jpeg';
import petani from '../images/blog/petani.jpg';
import seminar_nasional from '../images/blog/seminar_nasional.jpg';
import Tani_Center_milik_Semaai from '../images/blog/Tani_Center_milik_Semaai.jpg';
import teknologi_bantu_stabilisasi_harga_pangan from '../images/blog/teknologi-bantu-stabilisasi-harga-pangan.jpeg';

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

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging: i => (
      <div
        style={
          
          {
          width: "30px",
          color: "#338755",
          border: "2px #338755 solid",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        {i + 1}
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
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
              <h1 className="text-9xl font-bold text-white">BLOG</h1>
              {/* <h1 className="text-8xl float-left font-bold text-emerald-950">For Indonesia</h1> */}
            </div>
          </div>
        </div>
        {/* ABOUT US */}
        <div class = 'container' className='bg-[#8EC4A4] h-full pb-20'>
                <div class ='Header' className="w-full h-[47px] flex items-center justify-center py-14">
                    <h1 className="text-[48px] font-['Hint Madurai'] text-[#338755]">NEWS</h1>
                </div>
            <div className="w-full h-full">
                <div>
                    <div className='justify-center '>
                        <Slider {...settings}>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={Era_tani} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                                Startup Pertanian Eratani Raih Pendanaan Awal Rp 90 Miliar<br /> <br />
                              </div>
                            </div>
                          </div>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={ibu_ibu_meringis} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                                Wadahi Start Up Pertanian Pemula, Polbangtan Kementan Luncurkan IBT
                              </div>
                            </div>
                          </div>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={Inovasi_Bertani_Ala_Pemuda_Gobleg} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                                Startup Pertanian Semaai Raih Rp45 Miliar dari Investor AS & Singapura
                              </div>
                            </div>
                          </div>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={jack_ma} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                              Jack Ma Investasi di Startup Pertanian China
                              </div>
                            </div>
                          </div>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={Era_tani} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                                Startup Pertanian Eratani Raih Pendanaan Awal Rp 90 Miliar<br /> <br />
                              </div>
                            </div>
                          </div>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={ibu_ibu_meringis} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                                Wadahi Start Up Pertanian Pemula, Polbangtan Kementan Luncurkan IBT
                              </div>
                            </div>
                          </div>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={Inovasi_Bertani_Ala_Pemuda_Gobleg} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                                Startup Pertanian Semaai Raih Rp45 Miliar dari Investor AS & Singapura
                              </div>
                            </div>
                          </div>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={Era_tani} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                                Front End <br />Developer
                              </div>
                            </div>
                          </div>
                        
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
