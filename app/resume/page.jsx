import Head from "next/head";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/GeneralComponents/Footer";
import { Navbar } from "@/components/GeneralComponents/Navbar";
import Title from "@/components/GeneralComponents/Title";

const index = ({}) => {
  return (
    < div className="bg-black">
      <Head>
        <title>AngelFolio | About</title>
        <meta
          name="description"
          content="Angel's Portfolio and Blog about tech, development, and more!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="image" content="https://www.angel1254.com/link-image.png" />
        <meta
          property="og:image"
          content="https://www.angel1254.com/link-image.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex flex-col items-center ">
        <div className="w-full max-w-[50rem] 2xl:max-w-[64rem] flex flex-col justify-start py-2 px-6">
          <Navbar />
          <Title title={"Resume"} />
        </div>
        <div className="w-full max-w-[50rem] 2xl:max-w-[64rem] flex flex-col gap-y-6 justify-start py-2 px-5">
          <section
            id="education"
            className="w-full text-start flex flex-col gap-x-1"
          >
            <h1 className=" text-lg sm:text-2xl font-semibold text-white pl-3 border-b-2 border-gray-400 pb-2">
              EDUCATION
            </h1>
            <div className="flex flex-row w-full">
              <div className="w-10/12 flex flex-row mt-4">
                <div className="h-full flex items-start justify-end pr-2 pt-[10px]">
                  <FontAwesomeIcon className="w-2 h-2" icon={faCircleDot} />
                </div>
                <div className="flex flex-col gap-x-1">
                  <h3 className="sm:text-lg font-semibold">
                    Indian Institute of Information Technology, Guwahati
                  </h3>
                  <p className="block md:hidden text-sm sm:text-base">
                    May 2024
                  </p>
                  {/* <p className='text-xs sm:text-sm font-light'>
                              Herbert Wertheim College of Engineering
                           </p> */}
                  <p className="font-light text-sm sm:text-base">
                    <b className="text-bold">CGPA:</b> 7.27
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-base font-semibold mt-4">
                <p className="text-right hidden md:block">May 2024</p>
              </div>
            </div>
          </section>
          <section
            id="professional_experience"
            className="w-full text-start flex flex-col gap-x-1"
          >
            <h1 className="text-lg sm:text-2xl font-semibold text-white pl-3 border-b-2 border-gray-400 pb-2">
              PERSONAL EXPERIENCE
            </h1>
            <div className="flex flex-row w-full">
              <div className="w-10/12 flex flex-row mt-4">
                <div className="h-full flex items-start justify-end pr-2 pt-[10px]">
                  <FontAwesomeIcon className="w-2 h-2" icon={faCircleDot} />
                </div>
                <div className="flex flex-col gap-x-1">
                  <h3 className="sm:text-lg text-base font-semibold">
                    CodeKro
                  </h3>
                  <p className="block md:hidden sm:text-base text-sm">
                    June 2023 - Aug. 2023
                  </p>
                  <p className="sm:text-base text-sm font-extralight italic">
                    Technologies used: ReactJS, Tailwind CSS, NodeJS, Hono,
                    PostgreSQL, Cloudflare Worker.
                  </p>

                  <ul className="ml-8 list-disc font-extralight sm:text-base text-sm mt-2">
                    <li>A user-frinendly web application to store code. </li>
                    <li>
                      Implemented code storage feature with PostgreSQL backend
                      for efficient data management.
                    </li>
                    <li>
                      Integrated tagging system to categorize code snippets by
                      programming language
                    </li>
                    <li>
                      Designed intuitive user interface with responsive layout
                      for optimal user experience
                    </li>
                    <li>
                      Developed error-handling mechanisms to gracefully manage
                      situations such as invalid user input or API errors.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col text-base font-semibold mt-4">
                <p className="text-right md:block hidden">Feb 2023</p>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-10/12 flex flex-row mt-4">
                <div className="h-full flex items-start justify-end pr-2 pt-[10px]">
                  <FontAwesomeIcon className="w-2 h-2" icon={faCircleDot} />
                </div>
                <div className="flex flex-col gap-x-1">
                  <h3 className="sm:text-lg text-base font-semibold">PayApp</h3>
                  <p className="block md:hidden sm:text-base text-sm">
                    Sept 2023
                  </p>
                  <p className="sm:text-base text-sm font-extralight italic">
                    A Simple web application to transfer money
                  </p>

                  <ul className="ml-8 list-disc font-extralight text-sm sm:text-base mt-2">
                    <li>
                      Developed a money transfer application using Node.js and
                      React.js, with JavaScript for frontend and backend
                      development.
                    </li>
                    <li>
                      Implemented user authentication and signup functionalities
                      to securely manage user accounts.
                    </li>
                    <li>
                      Integrated search feature allowing users to easily find
                      other registered users within the platform.
                    </li>
                    <li>
                      Enabled users to initiate money transfers to other users
                      seamlessly within the application.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col text-base font-semibold mt-4">
                <p className="text-right md:block hidden">Sept 2023</p>
              </div>
            </div>
          </section>
          {/* <section
            id="leadership_roles"
            className="w-full text-start flex flex-col gap-x-1"
          >
            <h1 className="text-lg sm:text-2xl font-semibold text-white pl-3 border-b-2 border-gray-400 pb-2">
              Leadership Roles
            </h1>
            <div className="flex flex-row w-full">
              <div className="w-10/12 flex flex-row mt-4">
                <div className="h-full flex items-start justify-end pr-2 pt-[10px]">
                  <FontAwesomeIcon className="w-2 h-2" icon={faCircleDot} />
                </div>
                <div className="flex flex-col gap-x-1">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Society of Software Developers - Outreach Officer
                  </h3>
                  <p className="text-sm sm:text-base font-extralight italic">
                    Outreach officer for the best comp-sci club on UF 😎
                  </p>
                  <ul className="ml-8 list-disc font-extralight text-sm sm:text-base mt-2">
                    <li>
                      Developed flyers and announcements for club workshops,
                      socials, and meetups.
                    </li>
                    <li>
                      Collaborated with inter-collegiate engineering-related
                      student organizations (namely FIU) to increase SSD member
                      participation in ShellHacks 2023.
                    </li>
                    <li>
                      Leading a Workshop that serves as an introduction to
                      infrastructure and application observability.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section> */}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default index;
