import '../App.css'
import { useNavigate } from "react-router-dom"

// IMPORT LOGO
import logo from '../images/Frame (1).png'
import textLogo from '../images/text-artagrow.png'

const Header = () => {
    const navigate = useNavigate()

    return (
        <>
            {/* HEADER */}
        <div className='w-full h-[70px] bg-white drop-shadow-2xl flex items-center justify-center'>
          <div className='flex flex-row mr-96 items-center'>
            <img src={logo} className='w-[40px] mr-[10px]' />
            <img src={textLogo} className='h-[30px]' />
          </div>
          <div className='flex flex-row'>
            <button className = 'mr-[40px]' onClick={() => navigate('/')}>Home</button>
            <button className = 'mr-[40px]' onClick={() => navigate('/about')}>About</button>
            <button className = 'mr-[40px]' onClick={() => navigate('/produk')}>Products</button>
            <button className = 'mr-[40px]' onClick={() => navigate('/karir')}>Careers</button>
            <button className = 'mr-[40px]' onClick={() => navigate('/galeri')}>Gallery</button>
            <button className = 'mr-[40px]' onClick={() => navigate('/artikel')}>Blog</button>
          </div>
        </div>
        </>
    )
}

export default Header