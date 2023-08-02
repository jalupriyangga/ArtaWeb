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


// IMPORT PRODUCT CARD
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ 
//         ...style, 
//         display: "block",
//         background: "grey",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ 
//         ...style, display: "block", width: '50px', height: '50px', background: "grey", fontsize: "30px", color: "blue", zIndex: 99, marginTop: "100px"
//       }}
//       onClick={onClick}
//     />
//   );
// }
// const ArrowLeft = (props) => (
//   <button
//       {...props}
//       className={s.prev}/>
// );
// const ArrowRight = (props) => (
//   <button
//       {...props}
//       className={s.next}/>
// );


function galeri () {
  var settings = {
    arrow: true,
    // nextArrow: <ArrowRight />,
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
          slidesToShow: 1,
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
            <h1 className='mr-[40px] font-bold'>Gallery</h1>
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
        
        <div className='w-full  pt-[95px] pb-[95px] px-[100px] items-center justify-center drop-shadow-2xl' style={{
            background: 'linear-gradient(180deg, #ABF5AA 0%, #e8f4ea 48.1%, #e8f4ea 60.46%, #ABF5AA 89.58%) '
          }}>
            <div className='rounded-2xl w-full py-[30px] items-center justify-center mb-[50px]' style={{background: '#ffffff'}}>
                  {/* OUR GARDEN */}
                  <div class="flex flex-row justify center">
                    <div className="w-[full] h-full ml-[50px]">
                      <h1 className="text-[48px] font-['Hint Madurai'] text-[#000000] leading-1">Our <br />Garden <br /></h1>
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
                    <div className="w-[full] h-full ml-[50px]">
                      <h1 className="text-[48px] font-['Hint Madurai'] text-[#000000] leading-1">Our Green <br />House</h1>
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
                    <div className="w-[full] h-full ml-[50px]">
                      <h1 className="text-[48px] font-['Hint Madurai'] text-[#000000] leading-1">Our Agritech<br />Dedication</h1>
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
                    <div className="w-[full] h-full ml-[50px]">
                      <h1 className="text-[48px] font-['Hint Madurai'] text-[#000000] leading-1">Our<br />Achievement</h1>
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
                    <div className="w-[full] h-full ml-[50px]">
                      <h1 className="text-[48px] font-['Hint Madurai'] text-[#000000] leading-1">Our Plant<br />Product</h1>
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
      {/* </div> */}
      
    </>
  )
}

export default galeri;

