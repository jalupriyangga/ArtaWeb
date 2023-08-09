import logo from '../images/Frame (1).png'
import textLogo from '../images/text-artagrow.png'
import bg_home from '../images/bg-hero1.jpeg'
import CEO from '../images/CEO.png'
import vision from '../images/icon/growth.png'
import palm from '../images/icon/palm.png'
import harvest from '../images/icon/harvest (1).png'
import service from '../images/icon/public-service.png'

// FOTO CLIENT
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
// import SD_Bareng3 from './images/clients/sd-bareng-3.png'
// import UB from './images/clients/UB.png'
// import yayasan_apsai from './images/clients/yayasan-apsai.png'

// IMPORT FILES
import '../App.css';
import { useState, useEffect, useRef } from "react";

// IMPORT FILES REACT SLICK
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// IMPORT WHO ARE WE?
import bggradient from '../images/whoarewe/Home.svg'

// IMPORT OUR TEAM
import ridho from '../images/our-team/ridho.png'
import clau from '../images/our-team/clau.png'
import hayu from '../images/our-team/hayu.png'
import ana from '../images/our-team/ana.png'

// IMPORT OUR VALUES
import harga from '../images/our-value/harga.png'
import keberlanjutan from '../images/our-value/keberlanjutan.png'
import kualitas from '../images/our-value/kualitas.png'
import mudah_akses from '../images/our-value/mudah-akses.png'
import negosiasi from '../images/our-value/negoisasi.png'
import pengiriman from '../images/our-value/pengiriman.png'

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


function About() {
  // const [showVideo, setShowVideo] = useState(false);

  // const handlePlayVideo = () => {
  //   setShowVideo(true);
  // };

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
              <h1 className="text-9xl font-bold text-white">About Us</h1>
              {/* <h1 className="text-8xl float-left font-bold text-emerald-950">For Indonesia</h1> */}
            </div>
          </div>
        </div>

        {/* WHO WE ARE? */}
        <div
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
        </div>
        
        <div className="mt-[55px] flex w-full items-center flex-col relative">

          {/* Vidio youtube */}
          {/* {showVideo ? (
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
          )} */}
          <div className='w-full  pt-[95px] pb-[105px] mb-[20px] px-[100px] rounded-tl-[100px] rounded-br-[100px] ' style={{
            background: 'linear-gradient(180deg, #00AF46 0%, #338755 40.1%, #338755 61.46%, #0CAE4D 89.58%) '
          }}>
            
          {/* <div className='w-full flex mt-[250px] items-center justify-center '> */}
          {/* <div className="mt-[250px] flex w-full h-full items-center flex-col relative">
            <div className='w-[1026px]  text-center font-medium leading-[56px] mt-[40px] '>
              <h1 className="text-white text-[48px] font-['Poppins']">Our Product:
              <span className='text-black'> Unleash the Power of Agriculture Excellence</span></h1>
            </div>
            <div className='w-[814px] h-full text-center mt-[40px] '>
              <h1 className="text-[20px] font-['Inter'] text-[#ffffffff] ">Transforming Farms with Cutting-edge Technology and <br />Sustainable Practices</h1>
            </div>
          </div> */}
          
          {/* VISION AND MISSION */}
          {/* <div className='w-full flex mt-[20px] items-center justify-center '>
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
          
          {/* VISION & MISSION */}
          <div className='w-full flex  items-center justify-center '>
            <h1 className="font-['Poppins']  text-[42px] font-semibold text-white">
              Vision & Mission
            </h1>
          </div>
          <div class="grid grid-cols-2 gap-4 justify-center w-full mb-[20px] mx-auto">
            <div className='w-full flex flex-col justify-start mt-[30px]'>
                <h1 className="font-['Poppins'] text-[32px] font-semibold text-white">
                  Our Vision
                </h1>
                <div className='flex flex-row mt-[15px] items-center'>
                  <div className='w-[150px] ml-[14px]' >
                    <img src={vision} className='w-[137px]' />
                  </div>
                  <h1 className="font-['Poppins'] ml-[42px]  w-[599px] leading-[34px] text-[20px] font-normal text-white mr-[40px]">
                    Menjadi perusahaan Agritech no 1 di Indonesia dan berperan dalam mewujudkan kesejahteraan petani kecil
                  </h1>
                </div>
            </div>
            <div className='w-full flex flex-col justify-start mt-[30px]'>
              <h1 className="font-['Poppins'] text-[32px] font-semibold text-white">
                Our Mission
              </h1>
              <div className='flex flex-row mt-[15px] items-center'>
                <div className='w-[100px] ml-[14px]' >
                  <img src={palm} className='w-[137px]' />
                </div>
                <h1 className="font-['Poppins'] ml-[42px]  w-[599px] leading-[34px]  text-[20px] font-normal text-white">
                Menciptakan ekosistem pertanian yang berkelanjutan.
                </h1>
              </div>
              <div className='flex flex-row mt-[15px] items-center'>
                <div className='w-[100px] ml-[14px]' >
                  <img src={harvest} className='w-[137px]' />
                </div>
                <h1 className="font-['Poppins'] ml-[42px]  w-[599px] leading-[34px]  text-[20px] font-normal text-white">
                Meningkatkan kualitas dan kuantitas hasil pertanian dan memberikan akses pasar pasti bagi petani Indonesia.
                </h1>
              </div>
              <div className='flex flex-row mt-[15px] items-center'>
                <div className='w-[100px] ml-[14px]' >
                  <img src={service} className='w-[137px]' />
                </div>
                <h1 className="font-['Poppins'] ml-[42px]  w-[599px] leading-[34px]  text-[20px] font-normal text-white">
                Mengutamakan kepuasan konsumen dalam pelayanan dan kualitas produk hasil pertanian
                </h1>
              </div>
            </div>
          </div>
        </div>

        

        {/* OUR VALUES */}
        <div className="flex w-full items-center flex-col relative">
          <div className='w-full justify-center pt-[65px] pb-[65px] rounded-tl-[100px]' style={{
            background: 'linear-gradient(180deg, #338755 0%, #00AF46 40.1%, #00AF46 61.46%, #0CAE4D 89.58%) '
          }}>

            <div className="flex w-full h-full items-start" class='absolute -top-[40px] end-0 '>
              <div className='w-[500px] pb-[10px] pt-[10px] rounded-tl-[100px] rounded-bl-[100px] justify-center' style={{
                background: '#000000'
              }}>
                <div className='w-full flex items-center justify-center'>
                  <h1 className="font-['Poppins']  text-[42px] font-semibold text-[#ffffff]">
                    OUR VALUES
                  </h1>
                </div>
              </div>
            </div> 
            
            {/* CONTENT OUR VALUES */}
            <div class="grid grid-cols-3 gap-4 justify-center w-[1000px] mt-[100px] mb-[100px] mx-auto">
              <img src={keberlanjutan} alt='' className='w-[100px] mx-auto'/>
              <img src={negosiasi} alt='' className='w-[100px] mx-auto'/>
              <img src={harga} alt='' className='w-[100px] mx-auto'/>
              <h1 className="font-['Poppins'] text-[20px] font-semibold text-white mx-auto text-center">
                  Keberlanjutan & <br />
                  Konsistensi
              </h1>
              <h1 className="font-['Poppins'] text-[20px] font-semibold text-white mx-auto text-center">
                  Negosiasi Harga
              </h1>
              <h1 className="font-['Poppins'] text-[20px] font-semibold text-white mx-auto text-center">
                  Harga Stabil & <br />
                  Terjangkau
              </h1>
              <img src={pengiriman} alt='' className='w-[100px] mx-auto'/>
              <img src={mudah_akses} alt='' className='w-[100px] mx-auto'/>
              <img src={kualitas} alt='' className='w-[100px] mx-auto'/>
              <h1 className="font-['Poppins'] text-[20px] font-semibold text-white mx-auto text-center">
                  Layanan Pengiriman
              </h1>
              <h1 className="font-['Poppins'] text-[20px] font-semibold text-white mx-auto text-center">
                Kemudahan Akses
              </h1>
              <h1 className="font-['Poppins'] text-[20px] font-semibold text-white mx-auto text-center">
                Kualitas Produk <br />
                Terjamin & Berkualitas
              </h1>
            </div>
          </div>

          {/* OUR TEAM */}
          <div className='flex w-full flex-col relative' style={{
            background: '#ffffff'
          }}>
            <div className="flex w-full items-start" class='absolute -top-[40px] start-0 '>
              <div className='w-[500px] pb-[10px] pt-[10px] rounded-tr-[100px] rounded-br-[100px] justify-center' style={{
                background: '#ffffff'
              }}>
                <div className='w-full flex items-center justify-center'>
                  <h1 className="font-['Poppins']  text-[42px] font-semibold text-[#338755]">
                    OUR TEAM
                  </h1>
                </div>
              </div>
            </div>   
            {/* CONTENT OUR TEAM */}
            <div class="grid grid-cols-4 w-full">
              <img src={hayu} alt='' className='w-[400px] h-[655px] mx-auto px-auto'/>
              <img src={ridho} alt='' className='w-[400px] h-[655px] mx-auto px-auto'/>
              <img src={clau} alt='' className='w-[400px] h-[655px] mx-auto px-auto'/>
              <img src={ana} alt='' className='w-[400px] h-[655px] mx-auto px-auto'/>
              <div class="grid grid-cols-4 w-full justify-center absolute bottom-[80px] items-center">
                <div className="bg-[#ffffff] rounded-full items-center justify-center mx-auto">
                  <h1 className='font-bold text-center text-[#338755] mx-[20px] my-[10px] text-[15px]'>Hayu Pranitis</h1>
                </div>
                <div className="bg-[#ffffff] rounded-full items-center justify-center mx-auto">
                  <h1 className='font-bold text-center text-[#338755] mx-[20px] my-[10px] text-[15px]'>Ridho Ramadhan A.H</h1>
                </div>
                <div className="bg-[#ffffff] rounded-full items-center justify-center mx-auto">
                  <h1 className='font-bold text-center text-[#338755] mx-[20px] my-[10px] text-[15px]'>Claudya Ariesa Memorys</h1>
                </div>
                <div className="bg-[#ffffff] rounded-full items-center justify-center mx-auto">
                  <h1 className='font-bold text-center text-[#338755] mx-[20px] my-[10px] text-[15px]'>Hidayati Nur Chasanah</h1>
                </div>
              </div>
            </div>
          </div>
        </div>    

        

        {/* OUR CLIENT & SUPPORTED BY */}
          {/* <div className="mt-[0px] flex-none w-full h-[700px] bg-[#ffffffff] pt-[40px]">
            <div> */}
              {/* OUR CLIENTS TITLE */}
              {/* <div className="w-full h-[47px] flex items-center justify-center mb-[30px]">
                <h1 className="text-[48px] font-['Hint Madurai'] text-[#338755]">Our Clients</h1>
              </div> */}
                {/* OUR CLIENTS SLIDER */}
                {/* <Slider {...settings}>
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
                </Slider> */}
                {/* <br /> <br /><br /> */}
                {/* SUPPORTED BY TITLE */}
                {/* <div className="w-full h-[47px] flex items-center justify-center mb-[30px]">
                  <h1 className="text-[48px] font-['Hint Madurai'] text-[#338755]">Supported By</h1>
                </div> */}
                {/* SUPPORTED BY SLIDER */}
                {/* <Slider {...settings2}>
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
          </div> */}
        {/* END OF OUR CLIENT & SUPPORTED BY*/}
        
        {/* FOOTER*/}
        <Footer />
        {/* END OF FOOTER */}
      </div>
      
    </>
  )
}

export default About;
