import Footer from "@/components/GeneralComponents/Footer";

const { Navbar } = require("@/components/GeneralComponents/Navbar")

const index = async ()=>{
    return (
        <div>
            <Navbar />
            <div>Hii from blogs page</div>
            <Footer/>
        </div>
    )
}

export default index;