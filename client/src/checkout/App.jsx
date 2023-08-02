import logo from './images/Frame (1).png'
import textLogo from './images/text-artagrow.png'
import bg_home from './images/bg-hero1.jpeg'
import CEO from './images/CEO.png'
import vision from './images/icon/growth.png'
import palm from './images/icon/palm.png'
import harvest from './images/icon/harvest (1).png'
import service from './images/icon/public-service.png'

// FOTO CLIENT
import ayam_cao from './images/clients/ayam.png'
import bakmie_hokki from './images/clients/bakmie-hokki.jpeg'
import hydroponic_farm from './images/clients/hydroponic-farm.jpeg'
import katering from './images/clients/katering.png'
import kebab from './images/clients/kebab.png'
import kedai from './images/clients/kedai.png'
import kober from './images/clients/kober.png'
import lowcal from './images/clients/lowcal.png'
import tomo from './images/clients/tomo.jpg'

// FOTO SUPPORTED BY
import awmm_ub from './images/clients/awmm-ub.png'
import bem_fia_ub from './images/clients/bem-fia-ub-22.png'
import bem_fp_ub from './images/clients/bem-fp-ub-21.png'
import eo from './images/clients/eo-logo.png'
import GN1000startup from './images/clients/Logo_Gerakan_Nasional_1000_Startup_Digital.png'
import AstraStartupCom from './images/clients/Logo-Astra-Startup-Community.png'
import SD_Bareng3 from './images/clients/sd-bareng-3.png'
import UB from './images/clients/UB.png'
import yayasan_apsai from './images/clients/yayasan-apsai.png'

// IMPORT FILES
import './App.css';
import { useState } from 'react';

// IMPORT FILES REACT SLICK
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// IMPORT PRODUCT CARD
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";

// IMPORT REACT ROUTER DOM
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import about from '../aboutUs'

// import {
//   RouterProvider,
// } from "react-router-dom";
// import router from './router'

function App() {

  const App = () => {
    <Router>
      <Routes>
        <Route path="/about" element={<about />}/>
      </Routes>
    </Router>
  }


  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: true,    
      autoplaySpeed: 3000,
      cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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

  var settings2 = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    rtl: true,
    autoplay: true,    
      autoplaySpeed: 3000,
      cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
          className="relative bg-cover bg-center h-[700px] flex items-center"
          style={{
            backgroundImage: `url(${bg_home})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-green-800 opacity-80"></div>
          <div className=" ml-[200px] relative z-10 flex  flex-col items-start">
            <h1 className="text-7xl float-left font-bold text-white">Growing </h1>
            <h1 className="text-7xl float-left font-bold text-white">The Future of</h1>
            <h1 className="text-7xl float-left font-bold text-white">Agriculture For Indonesia</h1>
            <div className='mt-[20px] h-full w-[700px]'>
              <h1 className="text-1xl float-left text-white text-left font-medium " >Agriculture in Indonesia with sustainable practices, improved quality and quantity of produce, and customer satisfaction. Join us in creating a greener and prosperous future.</h1>
              <h1 className="text-1xl float-left text-white text-left font-medium " >Welcome to Arta Grow Persada.</h1>
            </div>
            <button type="button" class="mt-[20px] focus:outline-none text-green-700 bg-white hover:bg-gray-300 focus:ring-4 focus:ring-green-300 font-bold rounded-full text-1xl py-3 px-7 mr-2 mb-2 dark:bg-white dark:hover:bg-slate-200 dark:focus:ring-green-800">Find Out More</button>
            {/* <h1 className="text-8xl float-left font-bold text-emerald-950">For Indonesia</h1> */}
          </div>
        </div>
        </div>
        {/* ABOUT US */}

        <div className="mt-[55px] flex w-full h-full items-center flex-col relative">
          <div className="w-[174px] h-[47px] bg-[#33875529] rounded-full flex items-center justify-center">
            <h1 className="text-[24px] font-['Inter']  text-[#338755]">ABOUT US </h1>
          </div>
          <div className='w-[1026px]  text-center font-medium leading-[56px] mt-[40px] '>
            <h1 className="text-[48px] font-['Poppins']">Agribusiness Startup is <span className='text-[#338755D6]'>Contributing to Sustainable</span> Farming in Indonesia </h1>
          </div>
          <div className='w-[814px] h-full text-center mt-[40px] '>
            <h1 className="text-[20px] ">Startup agribisnis yang fokus terhadap dunia pertanian dan memiliki dedikasi tinggi untuk berkontribusi dalam pertanian Indonesia</h1>
          </div>

          {/* Vidio youtube */}
          {showVideo ? (
            <div className="absolute top-[350px]">
              <iframe
                className='rounded-[30px]'
                width="683"
                height="381"
                src="https://www.youtube.com/embed/Qegj4QDR9_Y?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          ) : (
            <div className="absolute top-[350px]">
              <img
                src={CEO}
                alt="Video Cover"
                className="w-[683px] h-[381px] rounded-[30px]"
              />
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-4 rounded-full"
                onClick={handlePlayVideo}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 5v10l9-5-9-5z"
                  />
                </svg>
              </button>
            </div>
          )}
        <div className='w-full pb-[250px] mb-[0px] mt-[230px] px-[312px] rounded-tl-[100px] rounded-br-[100px] ' style={{
          background: 'linear-gradient(180deg, #00AF46 0%, #338755 40.1%, #338755 61.46%, #0CAE4D 89.58%) '
        }}>
          
          {/* <div className='w-full flex mt-[250px] items-center justify-center '> */}
          <div className="mt-[250px] flex w-full h-full items-center flex-col relative">
            <div className='w-[1026px]  text-center font-medium leading-[56px] mt-[40px] '>
              <h1 className="text-white text-[48px] font-['Poppins']">Our Product:
              <span className='text-black'> Unleash the Power of Agriculture Excellence</span></h1>
            </div>
            <div className='w-[814px] h-full text-center mt-[40px] '>
              <h1 className="text-[20px] font-['Inter'] text-[#ffffffff] ">Transforming Farms with Cutting-edge Technology and <br />Sustainable Practices</h1>
            </div>
          </div>
          
          {/* VISION AND MISSION */}
          {/* <div className='w-full flex mt-[250px] items-center justify-center '>
            <h1 className="font-['Poppins']  text-[42px] font-semibold text-white">
              Vision & Mission
            </h1>
          </div>
          <div className='ml-[50px]'>
            <div className='w-full flex flex-col justify-start mt-[30px]'>
              <h1 className="font-['Poppins'] text-[32px] font-semibold text-white">
                Our Vision
              </h1>
              <div className='flex flex-row mt-[15px] items-center'>
                <div className='w-[80px] ml-[14px]' >
                  <img src={vision} className='w-[137px]' />
                </div>
                <h1 className="font-['Poppins'] ml-[42px]  w-[599px] leading-[34px]  text-[20px] font-normal text-white">
                  Menjadi perusahaan Agritech no 1 di Indonesia dan berperan dalam mewujudkan kesejahteraan petani kecil
                </h1>
              </div>
            </div>
            <div className='w-full flex flex-col justify-start mt-[60px]'>
              <h1 className="font-['Poppins'] text-[32px] font-semibold text-white">
                Our Mission
              </h1>
              <div className='flex flex-row mt-[15px] items-center'>
                <div className='w-[80px] ml-[14px]' >
                  <img src={palm} className='w-[137px]' />
                </div>
                <h1 className="font-['Poppins'] ml-[42px]  w-[599px] leading-[34px]  text-[20px] font-normal text-white">
                Menciptakan ekosistem pertanian yang berkelanjutan.
                </h1>
              </div>
              <div className='flex flex-row mt-[15px] items-center'>
                <div className='w-[80px] ml-[14px]' >
                  <img src={harvest} className='w-[137px]' />
                </div>
                <h1 className="font-['Poppins'] ml-[42px]  w-[599px] leading-[34px]  text-[20px] font-normal text-white">
                Meningkatkan kualitas dan kuantitas hasil pertanian dan memberikan akses pasar pasti bagi petani Indonesia.
                </h1>
              </div>
              <div className='flex flex-row mt-[15px] items-center'>
                <div className='w-[80px] ml-[14px]' >
                  <img src={service} className='w-[137px]' />
                </div>
                <h1 className="font-['Poppins'] ml-[42px]  w-[599px] leading-[34px]  text-[20px] font-normal text-white">
                Mengutamakan kepuasan konsumen dalam pelayanan dan kualitas produk hasil pertanian
                </h1>
              </div>
            </div>
          </div> */}
        </div>



        {/* OUR CLIENT & SUPPORTED BY */}
          <div className="mt-[0px] flex-none w-full h-[700px] bg-[#ffffffff] pt-[40px]">
            <div>
              {/* OUR CLIENTS TITLE */}
              <div className="w-full h-[47px] flex items-center justify-center mb-[30px]">
                <h1 className="text-[48px] font-['Hint Madurai'] text-[#338755]">Our Clients</h1>
              </div>
                {/* OUR CLIENTS SLIDER */}
                <Slider {...settings}>
                    <div class='Card'>
                        <img src={ayam_cao} alt='' className='w-[158px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={bakmie_hokki} alt='' className='w-[184px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={kebab} alt='' className='w-[246px] pt-[20px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={kedai} alt='' className='w-[150px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={kober} alt='' className='w-[161px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={katering} alt='' className='w-[160px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={lowcal} alt='' className='w-[170px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={hydroponic_farm} alt='' className='w-[160px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={tomo} alt='' className='w-[160px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                </Slider>
                <br /> <br /><br />
                {/* SUPPORTED BY TITLE */}
                <div className="w-full h-[47px] flex items-center justify-center mb-[30px]">
                  <h1 className="text-[48px] font-['Hint Madurai'] text-[#338755]">Supported By</h1>
                </div>
                {/* SUPPORTED BY SLIDER */}
                <Slider {...settings2}>
                    <div class='Card'>
                        <img src={ayam_cao} alt='' className='w-[158px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div class='Card'>
                        <img src={awmm_ub} alt='' className='w-[173px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={GN1000startup} alt='' className='w-[180px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={UB} alt='' className='w-[170px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={bem_fia_ub} alt='' className='w-[170px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={bem_fp_ub} alt='' className='w-[145px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={yayasan_apsai} alt='' className='w-[230px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={eo} alt='' className='w-[430px] pt-[40px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={SD_Bareng3} alt='' className='w-[160px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={AstraStartupCom} alt='' className='w-[430px] pt-[30px] mx-auto'/>
                          <div className='card-body'>
                          </div>
                    </div>
                </Slider>
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
      </div>
      
    </>
  )

  // return (
  //   <RouterProvider
  //     router={router}
  //     future={{ v7_startTransition: true }}
  //   />
  // );

}

export default App;
