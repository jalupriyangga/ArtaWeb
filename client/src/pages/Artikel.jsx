import bg_home from '../images/bg-hero1.jpeg'

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
import '../Artikel.css';

// IMPORT FILES REACT SLICK
import React, { Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// IMPORT COMPONENTS
import Header from "../components/header"
import Footer from "../components/footer"

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
            </div>
          </div>
        </div>
        {/* ABOUT US */}
        <div class = 'container' className='bg-[#8EC4A4] h-full pb-20'>
                <div class ='Header' className="w-full h-[47px] flex items-center justify-center py-16">
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
                              <br />Jack Ma Investasi di Startup Pertanian China <br /><br />
                              </div>
                            </div>
                          </div>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={menko_luhut_binsar_pandjaitan} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                                <br />Luhut Ungkap Startup RI Terbanyak Nomor 6 di Dunia <br />
                              </div>
                            </div>
                          </div>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={petani} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                                Startup Pertanian Dikucuri Pendanaan Awal Rp30 Miliar <br /><br />
                              </div>
                            </div>
                          </div>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={seminar_nasional} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                                Perkuat Ekonomi Bangsa, Kementan Dorong Munculnya Startup Basis Pertanian
                              </div>
                            </div>
                          </div>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={Tani_Center_milik_Semaai} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                                Startup Pertanian Semaai Raih Rp45 Miliar dari Investor AS & Singapura
                              </div>
                            </div>
                          </div>
                          <div className='bg-white border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-xl rounded-2xl shadow-xl py-6'>
                            <div className='relative items-center align-middle justify-center'>
                              <img src={teknologi_bantu_stabilisasi_harga_pangan} alt='' className='w-11/12  mx-auto border-4'/>
                              <div className="pt-6 px-6 text-center text-[#338755D6] md:block text-3xl">
                                <br />Bukan Cuaca, Startup Ini Bongkar Masalah Harga Pangan di RI <br />
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
