import { RiHome2Fill } from "react-icons/ri";
import Navbar from "./Navbar";
import shapeBG from "../assets/Images/BackgroundImage.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const BlogDetails = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="relative flex  flex-col h-3/4">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${shapeBG})` }}
        ></div>
        <div className="lg:max-w-7xl md:max-w-2xl max-w-full w-full mx-auto md:z-10 z-20">
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
        </div>
        <div className="flex flex-col items-center justify-center h-[300px] text-center z-20 relative">
          <h1 className="text-white font-bold  text-4xl">BLOG</h1>
          <p className="text-white text-lg mt-4">
            <RiHome2Fill className="inline-block mr-2" />
            Home / Blog / Blog Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
