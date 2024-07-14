import Footer from "@/components/GeneralComponents/Footer";

import { Navbar } from "@/components/GeneralComponents/Navbar";
import Title from "@/components/GeneralComponents/Title";

const index = async ()=>{
    return (
        <div className="bg-black text-white">
            <Navbar />
            <Title title={"My Blogs"} />
            <div>Hii from blogs page</div>
            <Footer/>
        </div>
    )
}

export default index;