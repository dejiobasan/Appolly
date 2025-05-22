import Navbar from "../Navbar";
import shapeBG from "../../assets/Images/BackgroundImage.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${shapeBG})` }}
      ></div>
      <div className="max-w-7xl w-full mx-auto z-10">
        <div className="flex flex-row items-center space-x-7 p-10 bg-opacity-80">
          <EnvelopeIcon className="h-6 w-6 text-white" />
          <h1 className="text-white">info@youremail.com</h1>
          <PhoneIcon className="h-6 w-6 text-white" />
          <h2 className="text-white">(480) 555-0103</h2>
          <Facebook className="h-6 w-6 text-white fill-white" />
          <Instagram className="h-6 w-6 text-white" />
          <Twitter className="h-6 w-6 text-white fill-white" />
          <Youtube className="h-6 w-6 text-white" />
        </div>
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-white p-8 rounded-[18px] border-[18px] border-[#7572FF]">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A3AFF] leading-tight mb-4">
            A GREAT APP MAKES YOUR LIFE BETTER
          </h1>
          <p className="text-gray-700 text-base mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <h2 className="font-semibold text-black mb-2">DOWNLOAD APP NOW</h2>

          <div className="flex gap-4">
            <img
              src="/google-play-badge.png"
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
            <img
              src="/app-store-badge.png"
              alt="App Store"
              className="h-12 cursor-pointer"
            />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Hero;
