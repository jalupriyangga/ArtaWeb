import logo from './images/Frame (1).png'
import textLogo from './images/text-artagrow.png'
import bg_home from './images/bg-hero1.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
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
          <h1 className='mr-[40px]'>Products</h1>
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
          backgroundSize : 'cover',
        }}
      >
        <div className="absolute inset-0 bg-green-800 opacity-60"></div>
        <div className=" ml-[200px] relative z-10 flex  flex-col items-start">
          <h1 className="text-7xl float-left font-bold text-white">Growing </h1>
          <h1 className="text-7xl float-left font-bold text-white">The Future of</h1>
          <h1 className="text-7xl float-left font-bold text-white">Agriculture For Indonesia</h1>
          <div className='mt-[20px] h-full w-[700px]'>
            <h1 className="text-1xl float-left text-white text-left font-medium " >Agriculture in Indonesia with sustainable practices, improved quality and quantity of produce, and customer satisfaction. Join us in creating a greener and prosperous future.</h1>
            <h1 className="text-1xl float-left text-white text-left font-medium " >Welcome to Arta Grow Persada.</h1>
          </div>
          <button type="button" class="mt-[20px] focus:outline-none text-green-700 bg-white hover:bg-gray-300 focus:ring-4 focus:ring-green-300 font-bold rounded-full text-1xl py-3 px-7 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Find Out More</button>
          {/* <h1 className="text-8xl float-left font-bold text-emerald-950">For Indonesia</h1> */}
        </div>
      </div>

    </div>
  );
}

export default App;
