import { Navbar } from "@/components/GeneralComponents/Navbar";
import Title from "@/components/GeneralComponents/Title";
import Footer from "@/components/GeneralComponents/Footer";

const index = ()=>{
    return (
        <div className="bg-black text-white h-screen" >
            <Navbar />
            <div>
                <Title title={"My Projects"} />
            </div>
            <div>hii from  project page</div>
            <Footer />
        </div>
    )
}

export default index;