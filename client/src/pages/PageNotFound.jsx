// IMPORT COMPONENTS
import Header from "../components/header"
import Footer from "../components/footer"

const Notfound = () => {
    return (
        <>
            <Header />
            <div className="bg-white w-full">
            <div className="text-center font-bold leading-[56px] my-auto">
                <h1 className="text-[70px] font-['Inter'] text-[#338755] my-[350px]">Page Not Found</h1>
              </div>
            </div>
            <Footer/>
        </>
    )
}

export default Notfound