import Footer from "@/components/GeneralComponents/Footer";

import { Navbar } from "@/components/GeneralComponents/Navbar";
import Title from "@/components/GeneralComponents/Title";

const index = async () => {
    return (
        <div className="bg-black text-white h-screen flex flex-col items-center">
            <div className="w-full max-w-[50rem] 2xl:max-w-[64rem]">
                <Navbar />
                <Title title={"My Blogs"} />
                <div>Hii from blogs page</div>
                <Footer />
            </div>
        </div>
    )
}

export default index;