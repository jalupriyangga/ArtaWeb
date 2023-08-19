import bg_home from '../images/bg-hero1.jpeg'
// import CEO from './images/CEO.png'

// FOTO CLIENT
import ayam_cao from '../images/clients/ayam.png'
import bakmie_hokki from '../images/clients/bakmie-hokki.jpeg'
import hydroponic_farm from '../images/clients/hydroponic-farm.jpeg'
import katering from '../images/clients/katering.png'
import kebab from '../images/clients/kebab.png'
import kedai from '../images/clients/kedai.png'
import kober from '../images/clients/kober.png'
import lowcal from '../images/clients/lowcal.png'
import tomo from '../images/clients/tomo.jpg'

// FOTO SUPPORTED BY
import awmm_ub from '../images/clients/awmm-ub.png'
import bem_fia_ub from '../images/clients/bem-fia-ub-22.png'
import bem_fp_ub from '../images/clients/bem-fp-ub-21.png'
import eo from '../images/clients/eo-logo.png'
import GN1000startup from '../images/clients/Logo_Gerakan_Nasional_1000_Startup_Digital.png'
import AstraStartupCom from '../images/clients/Logo-Astra-Startup-Community.png'
import SD_Bareng3 from '../images/clients/sd-bareng-3.png'
import UB from '../images/clients/UB.png'
import yayasan_apsai from '../images/clients/yayasan-apsai.png'

// IMPORT FOTO KONTAK
import green_house from '../images/green_house-kontak.png';

// IMPORT PRODUK
import artamart from '../images/artamart-produk.png'
import iot from '../images/iot-produk.png'
import artagrow from '../images/artagrow-produk.png'

// IMPORT FILES
import '../App.css';
import { useNavigate } from "react-router-dom"

// IMPORT FILES REACT SLICK
import React, { Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// IMPORT COMPONENTS
import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => {
  const navigate = useNavigate()
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
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,        
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
      
        {/* HEADER */}
        <Header />
        {/* END OF HEADER */}
        {/* HOME */}
        <div
          className="relative bg-cover bg-center h-[700px] flex items-center"
          style={{
            backgroundImage: `url(${bg_home})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-green-800 opacity-80"></div>
          <div className=" ml-12 relative z-10 flex  flex-col items-start">
            <h1 className="text-5xl md:7xl float-left font-bold text-white">Growing </h1>
            <h1 className="text-5xl float-left font-bold text-white">The Future of</h1>
            <h1 className="text-5xl float-left font-bold text-white">Agriculture For Indonesia</h1>
            <div className='mt-[20px] h-full'>
              <h1 className="text-1xl float-left text-white text-left font-medium " >Agriculture in Indonesia with sustainable practices, improved quality and quantity of produce, and customer satisfaction. Join us in creating a greener and prosperous future.</h1>
              <h1 className="text-1xl float-left text-white text-left font-medium " >Welcome to Arta Grow Persada.</h1>
            </div>
            <button type="button" class="mt-[20px] focus:outline-none text-green-700 bg-white hover:bg-gray-300 focus:ring-4 focus:ring-green-300 font-bold rounded-full text-1xl py-3 px-7 mr-2 mb-2 dark:bg-white dark:hover:bg-slate-200 dark:focus:ring-green-800">Find Out More</button>            
          </div>
        </div>
        
        {/* ABOUT US */}

        <div className="mt-12 flex w-full h-full items-center flex-col relative">
          <div className="w-[174px] h-10 md:h-[47px] bg-[#33875529] rounded-full flex items-center justify-center">
            <h1 className="text-[18px] md:text-[24px] font-['Inter']  text-[#338755]">ABOUT US </h1>
          </div>
          <div className='w-full  text-center font-medium md:leading-[56px] mt-[40px] '>
            <h1 className="text-[26px] md:text-[48px] font-['Poppins'] mx-12">Agribusiness Startup is <span className='text-[#338755D6]'>Contributing to Sustainable</span> Farming in Indonesia </h1>
          </div>
          <div className='w-full h-full text-center mt-[40px] '>
            <h1 className="text-[15px] md:text-[20px] mx-12 ">Startup agribisnis yang fokus terhadap dunia pertanian dan memiliki dedikasi tinggi untuk berkontribusi dalam pertanian Indonesia</h1>
          </div>

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
        <div className='w-full py-[100px] mt-20 md:mt-[230px] px-10 rounded-tl-[100px] rounded-br-[100px] justify-center' style={{
          background: 'linear-gradient(180deg, #00AF46 0%, #338755 40.1%, #338755 61.46%, #0CAE4D 89.58%) '
        }}>
          {/* CARDS */}
          <div className=" flex w-full h-full items-center flex-col relative">
            <div className='md:w-[768px] text-center font-medium md:leading-[56px]'>
              <h1 className="text-white text-[26px] md:text-[40px] font-['Poppins'] mx-12">Our Product:
              <span className='text-black'> Unleash the Power of Agriculture Excellence</span></h1>
            </div>
            <div className='w-full md:w-[768px] h-full text-center my-[40px] '>
              <h1 className="text-[16px] md:text-[20px] font-['Inter'] text-[#ffffffff] mx-8">Transforming Farms with Cutting-edge Technology and Sustainable Practices</h1>
            </div>
          </div>

          {/* CARDS */}
          <div className='md:grid md:grid-cols-3 gap-4 justify-center'>
            <div class="max-w-md overflow-hidden mx-auto">
              <img className="mt-10 md:mt-0 mx-auto w-60 md:w-96 bg-white rounded-xl shadow-lg" src={artamart} alt="Sunset in the mountains"/>
              <div class="px-20 md:px-6 py-4">
                <div class="font-bold text-lg mb-2 text-[#ffffff]">Partnership</div>
                <div class="font-bold text-2xl mb-2 text-[#ffffff]">Arta Mart</div>
                <p class="text-base text-[#ffffff]">
                  Menyediakan penjualan beragam produk pertanian ke B2B dengan model kemitraan <br /> <br />
                </p>
              </div>
              <div class="px-20 md:px-6 pt-2 pb-2">
                <span class="inline-block bg-[#ffffff] rounded-full px-3 py-1 text-sm font-semibold text-[#338755D6] mr-2 mb-2">AGRICULTURAL</span>
              </div>
              <div class="px-20 md:px-6 pt-2 pb-2">
                <button 
                    data-te-ripple-init
                    data-te-ripple-color="light" className = "hover:opacity-40" 
                    onClick={() => navigate('/produk') }>Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="#000000" 
                    className="w-6 h-6 inline-block ml-1">
                  <path strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="max-w-md overflow-hidden mx-auto">
              <img className="mt-10 md:mt-0 mx-auto w-60 md:w-96  bg-white rounded-xl shadow-lg" src={iot} alt="Sunset in the mountains"/>
              <div class="px-20 md:px-6 py-4">
                <div class="font-bold text-lg mb-2 text-[#ffffff]">Green House</div>
                <div class="font-bold text-2xl mb-2 text-[#ffffff]">IoT System</div>
                <p class="text-base text-[#ffffff]">
                Kebun yang terintegrasi dengan sistem IoT dan website <br /> <br />
                </p>
              </div>
              <div class="px-20 md:px-6 pt-2 pb-2">
                <span class="inline-block bg-[#ffffff] rounded-full px-3 py-1 text-sm font-semibold text-[#338755D6] mr-2 mb-2">...</span>
              </div>
              <div class="px-20 md:px-6 pt-2 pb-2">
                <button>Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="#000000" 
                    className="w-6 h-6 inline-block ml-1">
                  <path strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="max-w-md overflow-hidden mx-auto">
              <img className="mt-10 md:mt-0 mx-auto w-60 md:w-96  bg-white rounded-xl shadow-lg" src={artagrow} alt="Sunset in the mountains"/>
              <div class="px-20 md:px-6 py-4">
                <div class="font-bold text-lg mb-2 text-[#ffffff]">Mobile Application</div>
                <div class="font-bold text-2xl mb-2 text-[#ffffff]">Artagrow Application</div>
                <p class="text-base text-[#ffffff]">
                Aplikasi mobile untuk mendukung aktivitas manajemen pertanian agar lebih mudah dan efisien
                </p>
              </div>
              <div class="px-20 md:px-6 pt-2 pb-2">
                <span class="inline-block bg-[#ffffff] rounded-full px-3 py-1 text-sm font-semibold text-[#338755D6] mr-2 mb-2">Mobile App</span>
              </div>
              <div class="px-20 md:px-6 pt-2 pb-2">
                <button>Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="#000000" 
                    className="w-6 h-6 inline-block ml-1">
                  <path strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
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
        </div>  
        {/* END OF OUR CLIENT & SUPPORTED BY*/}
        <section>
          <div className="mt-[100px] w-full bg-[#8EC4A4] py-[40px] items-center">
            <div className="w-full h-[47px] flex items-center justify-center mb-[50px]">
              <h1 className="text-[50px] font-['Hint Madurai'] text-[#000000]">Contact</h1>
            </div>
            <div className=''>
              <div className='w-9/12 mx-auto rounded-[40px] bg-[#ffffff] flex justify-end'> 
                <div className='flex flex-col gap-12 md:gap-24 mx-auto my-auto justify-center'>
                  <div className='mx-2 py-2 md:px-4 md:py-4 bg-[#338755D6] rounded-full'>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      strokeWidth={1.5} stroke="#ffffff" 
                      className="w-8 h-10 md:w-10 md:h-12 mx-auto">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <div><img src={green_house} alt="" className='w-14 h-14 md:w-20 md:h-20 mx-2 md:mx-auto px-2 py-2 bg-[#338755D6] rounded-full'/></div>
                  <div className='mx-2 py-2 md:px-4 md:py-4 bg-[#338755D6] rounded-full'>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="#ffffff" 
                      className="w-8 h-10 md:w-10 md:h-12 mx-auto">
                      <path 
                        strokeLinecap="round" 
                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>

                  </div>
                  <div className='mx-2 py-2 md:px-4 md:py-4 bg-[#338755D6] rounded-full'>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="#ffffff" 
                      className="w-8 h-10 md:w-10 md:h-12 mx-auto">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  
                </div>
                <div className='w-10/12 rounded-[40px] bg-[#338755] flex flex-col gap-8 text-white text-[20px] md:text-[30px]'> 
                  <div className='ml-10 mt-10 md:ml-14 md:mt-14'><h1 className='font-bold'>Office Location </h1>Jl Sebuku Gang 8 No 8, Blimbing, Malang</div>
                  <div className='ml-10 ml-14 md:ml-14 md:mt-14'><h1 className='font-bold'>Green House Location </h1>Jl Notodiharjo, Bulukerto, Bumuaji, Batu</div>
                  <div className='ml-10 ml-14 md:ml-14 md:mt-14'><h1 className='font-bold'>Email </h1>artasebuku@gmail.com</div>
                  <div className='ml-10 ml-14 mb-14 md:ml-14 md:mt-14'><h1 className='font-bold'>Call</h1>+628783858724</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FOOTER*/}
          <Footer />
        {/* END OF FOOTER */}
      
      
    </>
  )
}

export default Home;
