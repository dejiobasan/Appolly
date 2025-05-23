import React from "react";
import Reviews from "../../assets/Images/Review.png";
import shapeBG from "../../assets/Images/BackgroundImage.png";
import  { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

const HappyCustomer = () => {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${shapeBG})` }}
      ></div>
      <div className="flex flex-col items-center justify-center relative z-10 px-4">
        <h1 className="lg:text-4xl md:text-2xl text-lg text-white md:font-bold lg:mb-8 mb-4">
          OUR HAPPY CUSTOMERS
        </h1>
        <p className="md:text-sm text-xs text-center text-white lg:max-w-xl max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center relative z-10 px-4">
        <img
          src={Reviews}
          alt="Reviews"
          className="w-120 md:w-160 lg:w-280 h-auto relative z-10 mx-auto mt-8 lg:mt-0"
        />
        <EllipsisHorizontalIcon className="lg:block h-30 w-30 text-white" />
      </div>
    </div>
  );
};

export default HappyCustomer;
