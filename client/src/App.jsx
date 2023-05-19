import logo from './images/Frame (1).png'
import textLogo from './images/text-artagrow.png'
import bg_home from './images/bg-hero1.jpeg'
import CEO from './images/CEO.png'
import vision from './images/icon/growth.png'
import palm from './images/icon/palm.png'
import harvest from './images/icon/harvest (1).png'
import service from './images/icon/public-service.png'

import './App.css';
import { useState } from 'react';

function App() {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  return (
    <>

      <div>
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
        <div className='w-full pb-[250px] mb-[500px] mt-[230px] px-[312px] rounded-tl-[100px] rounded-br-[100px] ' style={{
          background: 'linear-gradient(180deg, #00AF46 0%, #338755 40.1%, #338755 61.46%, #0CAE4D 89.58%) '
        }}>
          <div className='w-full flex mt-[250px] items-center justify-center '>
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
          </div>

        </div>
        </div>
      
    </>
  )
}

export default App;
