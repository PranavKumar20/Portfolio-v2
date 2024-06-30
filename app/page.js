"use client";
import { IntroComponent } from "@/components/HomePageComponents/IntroComponent";
import LastStarredRepo from "@/components/HomePageComponents/LastStarredRepo";
import { Navbar } from "@/components/GeneralComponents/Navbar";
import  Footer  from "@/components/GeneralComponents/Footer";
import Title from "@/components/GeneralComponents/Title";
import LatestBlogCard from "@/components/HomePageComponents/LatestBlogCard";
import LatestProjectCard from "@/components/HomePageComponents/LatestProjectCard";
import WorkComponent from "@/components/HomePageComponents/WorkComponent";


export default function Home() {
  return (
    <main className="w-full flex justify-center bg-black text-white h-full ">
      <div className="w-full max-w-[50rem] 2xl:max-w-[64rem] flex flex-col px-2">
        <div className="px-4">
          <Navbar />
        </div>
        <div className="py-2 px-4" >
          <Title title={'Home'} />
        </div>
        <div className="flex flex-col md:flex-row" >
          <div className="w-full md:w-1/2 mr-4 sm:mr-0 " >
            <IntroComponent />
          </div>
          <div className="flex flex-col md:w-1/2 md:ml-4 mt-2 md:mt-0 " >
            <div className="w-full">
              <WorkComponent />
            </div>
            <div className=" h-48 md:h-full mt-2 md:mt-48">
              <LastStarredRepo />
            </div>
          </div>
        </div>
        <div className="py-2 flex w-full" >
          <div className="w-1/2 mr-2 " >
            <div className="text-2xl font-semibold py-4" >Recent Projects</div>
            <div className=" w-full flex h-48 mb-2 bg-[#101010] rounded-md">
              <LatestProjectCard />
            </div>
            <div className=" w-full flex h-48 bg-[#101010] rounded-md">
              <LatestProjectCard />
            </div>
          </div>
          <div className="w-1/2 ml-2 " >
            <div className="text-2xl font-semibold py-4" >Most Recent Blog</div>
            <div className=" w-full flex h-48 bg-[#101010] rounded-md">
              <LatestBlogCard />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
