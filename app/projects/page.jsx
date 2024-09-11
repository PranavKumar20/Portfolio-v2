import { Navbar } from "@/components/GeneralComponents/Navbar";
import Title from "@/components/GeneralComponents/Title";
import Footer from "@/components/GeneralComponents/Footer";

const index = () => {
    return (
        <div className="bg-black text-white h-screen flex flex-col items-center " >
            <div className="w-full max-w-[50rem] 2xl:max-w-[64rem]">
                <Navbar />
                <div>
                    <Title title={"My Projects"} />
                </div>
                <div>hii from  project page</div>
                <Footer />
            </div>
        </div>
    )
}

export default index;