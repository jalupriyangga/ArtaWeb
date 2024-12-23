import bg_home from '../images/bg-hero1.jpeg'
import CEO from '../images/CEO.png'
import vision from '../images/icon/growth.png'
import palm from '../images/icon/palm.png'
import harvest from '../images/icon/harvest (1).png'
import service from '../images/icon/public-service.png'

// IMPORT FILES
import '../App.css';
import { useState, useEffect, useRef } from "react";

// IMPORT FILES REACT SLICK
import React, { Component } from "react";
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
              <h1 className="text-7xl md:text-9xl font-bold text-white">About Us</h1>
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
            <div className="my-auto md:flex w-full items-center md:flex-col relative">
              <div className="text-center font-bold leading-[56px] mt-[0px]">
                <h1 className="text-[40px] md:text-[70px] font-['Inter'] text-[#338755]">WHO ARE WE?</h1>
              </div>
              <div className='md:w-[768px] lg:w-full lg:pl-10 text-center font-medium leading-[56px] mt-[40px] '>
              <div className='md:flex md:flex-row mt-[15px] items-center md:mx-10'>
                    <div className='mx-auto justify-center justify-items-center flex' >
                    <img
                      className="h-[300px] w-[300px] md:h-[300px] md:w-[400px] rounded-3xl object-cover object-center shadow-2xl shadow-green-500/70"
                      src= {bg_home}
                      alt="foto meeting"
                    />
                    </div>
                    <h1 className="font-['Poppins'] text-center md:text-left mx-auto md:ml-[42px] mt-6 w-full leading-normal text-[20px] md:text-[30px] font-normal text-black flex ">
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
          <div className='w-full  pt-[95px] pb-[105px] mb-[20px] px-4 md:px-[100px] rounded-tl-[100px] rounded-br-[100px] ' style={{
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
            <h1 className="font-['Poppins'] text-[30px] md:text-[42px] font-semibold text-white">
              Vision & Mission
            </h1>
          </div>
          <div class="md:grid md:grid-cols-2 gap-4 justify-center w-full mb-[20px] mx-auto">
            <div className='w-full flex flex-col justify-start mt-[30px]'>
                <h1 className="font-['Poppins'] text-[24px] md:text-[32px] font-semibold text-white">
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
              <h1 className="font-['Poppins'] text-[24px] md:text-[32px] font-semibold text-white">
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
              <div className='md:w-[500px] py-[10px] px-[40px] rounded-tl-[100px] rounded-bl-[100px] justify-center' style={{
                background: '#000000'
              }}>
                <div className='w-full flex items-center justify-center'>
                  <h1 className="font-['Poppins']  text-[30px] md:text-[42px] font-semibold text-[#ffffff]">
                    OUR VALUES
                  </h1>
                </div>
              </div>
            </div> 
            
            {/* CONTENT OUR VALUES */}
            <div class="grid grid-cols-3 gap-4 justify-center w-full lg:w-[1000px] mt-[100px] mb-[100px] mx-auto">
              <img src={keberlanjutan} alt='' className='w-[50px] md:w-[100px] mx-auto'/>
              <img src={negosiasi} alt='' className='w-[50px] md:w-[100px] mx-auto'/>
              <img src={harga} alt='' className='w-[50px] md:w-[100px] mx-auto'/>
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
              <img src={pengiriman} alt='' className='w-[50px] md:w-[100px] mx-auto'/>
              <img src={mudah_akses} alt='' className='w-[50px] md:w-[100px] mx-auto'/>
              <img src={kualitas} alt='' className='w-[50px] md:w-[100px] mx-auto'/>
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
              <div className='md:w-[500px] py-[10px] px-[40px]  rounded-tr-[100px] rounded-br-[100px] justify-center' style={{
                background: '#ffffff'
              }}>
                <div className='w-full flex items-center justify-center'>
                  <h1 className="font-['Poppins']  text-[30px] md:text-[42px] font-semibold text-[#338755]">
                    OUR TEAM
                  </h1>
                </div>
              </div>
            </div>   
            {/* CONTENT OUR TEAM */}
            <div class="grid grid-cols-2 lg:grid-cols-4 w-full">
              <img src={hayu} alt='' className='w-full  mx-auto px-auto'/>
              <img src={ridho} alt='' className='w-full  mx-auto px-auto'/>
              <img src={clau} alt='' className='w-full mx-auto px-auto'/>
              <img src={ana} alt='' className='w-full  mx-auto px-auto'/>
            </div>
          </div>
        </div>    
        {/* FOOTER*/}
        <Footer />
        {/* END OF FOOTER */}
      </div>
      
    </>
  )
}

export default About;
