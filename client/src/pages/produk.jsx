// IMPORT BACKGROUND
import bg_home from '../images/bg-hero1.jpeg'

// IMPORT COMPONENTS
import Header from "../components/header"
import Footer from "../components/footer"

// IMPORT FOTO PRODUCTS
import kol from '../images/products/KOL.jpg'
import arugula from '../images/products/ARUGULA.jpg'
import daun_ketumbar from '../images/products/DAUN-KETUMBAR.jpg'
import daun_mint from '../images/products/DAUN-MINT.jpg'
import daun_parsley from '../images/products/DAUN-PARSLEY.jpg'
import horenzo from '../images/products/HORENZO.jpg'
import iceberg from '../images/products/ICEBERG.jpg'
import jagung from '../images/products/JAGUNG.jpg'
import kale from '../images/products/KALE.jpg'
import KOL_UNGU from '../images/products/KOL-UNGU.jpg'
import LEMON from '../images/products/LEMON.jpg'
import LOLOROSA from '../images/products/LOLOROSA.jpg'
import PAKCOY from '../images/products/PAKCOY.jpg'
import ROMAINE from '../images/products/ROMAINE.jpg'
import ROSEMARY from '../images/products/ROSEMARY.jpg'
import SELADA_KERITING from '../images/products/SELADA-KERITING.jpg'
import SELADA_MERAH from '../images/products/SELADA-MERAH.jpg'
import TIMUN_JEPANG from '../images/products/TIMUN-JEPANG.jpg'
import TOMAT_CHERRY from '../images/products/TOMAT-CHERRY.jpg'
import WORTEL from '../images/products/WORTEL.jpg'

const Products = () => {
    return (
        <>
            <Header />
            <div class
            className="relative bg-cover bg-center h-[630px] flex items-center"
            style={{
                backgroundImage: `url(${bg_home})`,
                backgroundSize: 'cover',
            }}
            >
            <div className="absolute inset-0 bg-green-800 opacity-80 "></div>
                <div className=" mx-auto relative z-10 flex  flex-col items-start justify-center">
                <h1 className="text-8xl md:text-9xl font-bold text-white">Products</h1>
                {/* <h1 className="text-8xl float-left font-bold text-emerald-950">For Indonesia</h1> */}
                </div>
            </div>
            <div className="bg-white w-full px-16 md:px-24 py-24">
            <div className="text-center font-bold leading-[56px] my-auto">
                <h1 className="text-5xl sm:text-7xl md:text-8 xl font-['Inter'] text-[#338755] mb-24">ARTAMART</h1>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-10 justify-center px-50'>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={kol} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>KOL</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={arugula} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>ARUGULA</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={daun_ketumbar} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>DAUN KETUMBAR</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={daun_mint} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>DAUN MINT</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={daun_parsley} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>DAUN PARSLEY</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={horenzo} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>HORENZO</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={iceberg} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>ICEBERG</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={jagung} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>JAGUNG</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={kale} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>KALE</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={KOL_UNGU} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>KOL UNGU</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={LEMON} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>LEMON</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={LOLOROSA} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>LOLOROSA</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={PAKCOY} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>PAKCOY</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={ROMAINE} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>ROMAINE</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={ROSEMARY} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>ROSEMARY</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={SELADA_KERITING} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>SELADA KERITING</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={SELADA_MERAH} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>SELADA MERAH</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={TIMUN_JEPANG} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>TIMUN JEPANG</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={TOMAT_CHERRY} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>TOMAT CHERRY</h5>
                </div>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={WORTEL} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>WORTEL</h5>
                </div>
              </div>
            </div>
            <Footer/>
        </>
    )
}

export default Products