import Navbar from "../Navbar";

import shapeBG from "../../assets/Images/BackgroundImage.png";
import AppImage from "../../assets/Images/Mobile.png";
import GooglePlay from "../../assets/Images/GooglePlay.png";
import AppStore from "../../assets/Images/AppStore.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${shapeBG})` }}
      ></div>
      <div className="lg:max-w-7xl md:max-w-2xl w-full mx-auto z-10">
        <div className="hidden md:flex flex-row items-center lg:p-10 p-7 bg-opacity-80">
          <EnvelopeIcon className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
          <h1 className="text-white lg:ml-2 lg:text-lg ml-4 mr-6 text-sm">
            info@youremail.com
          </h1>
          <PhoneIcon className="lg:h-6 lg:w-6 h-4 w-4 ml-8 text-white" />
          <h2 className="text-white lg:ml-2 lg:text-lg ml-4 text-sm">
            (480) 555-0103
          </h2>
          <div className="flex items-center space-x-6 ml-auto">
            <Facebook className="lg:h-6 lg:w-6 h-4 w-4 text-white fill-white" />
            <Instagram className="lg:h-6 lg:w-6 h-4 w-4 text-white " />
            <Twitter className="lg:h-6 lg:w-6 h-4 w-4 text-white fill-white" />
            <Youtube className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
          </div>
        </div>
        <Navbar />
        <div className="lg:max-w-7xl max-w-2xl mx-auto lg:px-6 px-2 grid grid-cols-2 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-center lg:mt-16 ml-8 mt-30 mb-30">
          <div className="relative lg:p-8 p-6 border-[18px] border-[#7572FF] lg:w-[570px] lg:h-[535px] w-[375px] h-[381px] overflow-visible mx-auto">
            <div className="bg-white relative shadow-lg lg:p-6 p-4 lg:w-[570px] lg:h-[432px] w-[356px] h-[318px] top-0 right-0 lg:-translate-x-24 -translate-x-16 -translate-y-2">
              <h1 className="lg:text-5xl text-3xl lg:font-bold font-semibold text-[#4A3AFF] leading-tight lg:mb-6 mb-4">
                A GREAT APP MAKES YOUR LIFE BETTER
              </h1>
              <p className="text-gray-700 text-base lg:mb-12 mb-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <h2 className="font-semibold text-black lg:mb-2 mb-4 lg:text-2xl text-xl">
                DOWNLOAD APP NOW
              </h2>
              <div className="flex lg:gap-4 gap-8 ml-0">
                <img
                  src={GooglePlay}
                  alt="Google Play"
                  className="lg:h-12 h-8 cursor-pointer"
                />
                <img
                  src={AppStore}
                  alt="App Store"
                  className="lg:h-12 h-8 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:mt-10 mt-6 ml-20">
            <img
              src={AppImage}
              alt="App Screenshot"
              className="h-[423px] lg:h-[725px] w-auto max-w-full lg:ml-0 ml-10 lg:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
