// IMPORT BACKGROUND
import bg_home from '../images/bg-hero1.jpeg'

// IMPORT COMPONENTS
import Header from "../components/header"
import Footer from "../components/footer"

// IMPORT FOTO PRODUCTS
import kol from '../images/products/KOL.jpg'

const Karir = () => {
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
                <h1 className="text-9xl font-bold text-white">Careers</h1>
                {/* <h1 className="text-8xl float-left font-bold text-emerald-950">For Indonesia</h1> */}
                </div>
            </div>
            <div className="bg-white w-full px-24 py-24">
            <div className="text-center font-bold leading-[56px] my-auto">
                <h1 className="text-7xl font-['Inter'] text-[#338755] mb-24">ARTAMART</h1>
              </div>
              <div className='grid grid-cols-4 gap-10 justify-center px-50'>
                <div>
                    <img className='w-full mx-auto border-b-8 border-r-4 border-l-4 border-t-2 border-gray-700 border-opacity-50 border-blur-25  shadow-lg rounded-2xl shadow-lg' src={kol} alt="" />
                    <h5 className='mt-3 text-[#338755] text-xl font-semibold'>KOL</h5>
                </div>
                
              </div>
            </div>
            <Footer/>
        </>
    )
}

export default Karir