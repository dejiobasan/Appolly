import React from "react";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
  ArrowDownTrayIcon,
  HandThumbUpIcon,
  StarIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SliderImage from "../../assets/Images/Sliders/SliderImage.png";
import SliderImage2 from "../../assets/Images/Sliders/SliderImage2.png";
import SliderImage3 from "../../assets/Images/Sliders/SliderImage3.png";
import SliderImage4 from "../../assets/Images/Sliders/SliderImage4.png";
import Brand from "../../assets/Images/Brand.png";
import AppScreenshot from "../../assets/Images/AppScreenshot.png";
import GooglePlay from "../../assets/Images/GooglePlay.png";
import AppStore from "../../assets/Images/AppStore.png";

const AppInterface = () => {
  return (
    <div className="relative flex flex-1 flex-col min-h-screen space-y-12 mx-auto p-6">
      <div className="flex flex-col items-center justify-center relative z-10 px-4 pt-12">
        <h1 className="text-2xl font-bold text-black mt-2">
          CHECKOUT OUR APP INTERFACE LOOK
        </h1>
        <p className="text-sm text-black text-center mt-4 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center relative z-10 px-4">
        <ArrowLeftCircleIcon className="hidden lg:block h-20 w-20 text-[#5c4efc]" />
        <img
          src={AppScreenshot}
          alt="App"
          className="w-120 md:w-160 lg:w-280 h-auto relative z-10 mx-auto mt-8 lg:mt-0"
        />
        <ArrowRightCircleIcon className="hidden lg:block h-20 w-20 text-[#5c4efc]" />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center relative z-10 lg:space-x-4 space-x-2">
        <div className="flex flex-col items-start justify-center relative z-10 px-4">
          <h2 className="lg:text-2xl text-lg font-bold text-black">DOWNLOAD APP NOW</h2>
          <p className="text-sm text-black mt-4 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
          <div className="flex flex-row items-center justify-start mt-8 space-x-4">
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
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col items-center bg-[#5c4efc] rounded-md shadow-lg lg:p-8 p-2">
              <ArrowDownTrayIcon className="md:h-8 md:w-8 h-5 w-5 text-white" />
              <h2 className="md:text-lg text-md md:font-bold font-semibold text-white mt-2">
                59865
              </h2>
              <p className="text-sm text-white text-center mt-2 max-w-xs">
                DOWNLOAD
              </p>
            </div>
            <div className="flex flex-col items-center bg-[#5c4efc] rounded-md shadow-lg lg:p-8 p-2">
              <HandThumbUpIcon className="md:h-8 md:w-8 h-5 w-5  text-white" />
              <h2 className="md:text-lg text-md md:font-bold font-semibold text-white mt-2">
                29852
              </h2>
              <p className="text-sm text-white text-center mt-2 max-w-xs">
                LIKE
              </p>
            </div>
            <div className="flex flex-col items-center bg-[#5c4efc] rounded-md shadow-lg lg:p-8 p-2">
              <StarIcon className="md:h-8 md:w-8 h-5 w-5 text-white" />
              <h2 className="md:text-lg text-md md:font-bold font-semibold text-white mt-2">
                1500
              </h2>
              <p className="text-sm text-white text-center mt-2 max-w-xs">
                5 STAR RATING
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={Brand}
            alt="Brand"
            className="w-60 md:w-120 lg:w-150 h-auto relative z-10 mx-auto mt-8 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AppInterface;
