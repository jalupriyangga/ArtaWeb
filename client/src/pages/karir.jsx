// IMPORT BACKGROUND
import bg_home from '../images/bg-hero1.jpeg'

// IMPORT COMPONENTS
import Header from "../components/header"
import Footer from "../components/footer"

// IMPORT FILES
import React, { Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../karir.css';

// FOTO CLIENT
import lowongan1 from '../images/career/backend.png'
import lowongan2 from '../images/career/editor.png'
import lowongan3 from '../images/career/frontend.png'
import lowongan4 from '../images/career/fullstack.png'
import lowongan5 from '../images/career/IoT.png'
import lowongan6 from '../images/career/marketing_research.png'
import lowongan7 from '../images/career/mar.strategy.png'
import lowongan8 from '../images/career/Sosmed.png'
import lowongan9 from '../images/career/supervisor.png'

const Karir = () => {
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
              slidesToScroll: 2,
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
            <Header />
            <div
            className="relative bg-cover bg-center h-[630px] flex items-center"
            style={{
                backgroundImage: `url(${bg_home})`,
                backgroundSize: 'cover',
            }}
            >
            <div className="absolute inset-0 bg-green-800 opacity-80 "></div>
                <div className=" mx-auto relative z-10 flex  flex-col items-start justify-center">
                <h1 className="text-9xl font-bold text-white">Career</h1>
                {/* <h1 className="text-8xl float-left font-bold text-emerald-950">For Indonesia</h1> */}
                </div>
            </div>
            <div className="mt-[55px] mb-[55px] flex w-full h-full items-center flex-col ">
                <div className=" h-[47px] bg-[#338755] rounded-full flex items-center justify-center text-center px-8 py-4">
                    <h1 className="text-[40px] font-['Inter']  text-[#ffffff] w-full">LOWONGAN KERJA</h1>
                </div>
            </div>
            <div className='mb-20 justify-center'>
                <Slider {...settings}>
                    <div className='relative items-center align-middle justify-center'>
                        <img src={lowongan1} alt='' className='w-11/12 rounded-2xl mx-auto'/>
                    </div>
                    <div className='Card'>
                        <img src={lowongan2} alt='' className='w-11/12 rounded-2xl'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={lowongan3} alt='' className='w-11/12  rounded-2xl'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={lowongan4} alt='' className='w-11/12 rounded-2xl'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={lowongan5} alt='' className='w-11/12 rounded-2xl'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={lowongan6} alt='' className='w-11/12 rounded-2xl'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={lowongan7} alt='' className='w-11/12 rounded-2xl'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={lowongan8} alt='' className='w-11/12 rounded-2xl'/>
                          <div className='card-body'>
                          </div>
                    </div>
                    <div className='Card'>
                        <img src={lowongan9} alt='' className='w-11/12 rounded-2xl'/>
                          <div className='card-body'>
                          </div>
                    </div>
                </Slider>
                </div>
            <Footer/>
        </>
    )
}

export default Karir