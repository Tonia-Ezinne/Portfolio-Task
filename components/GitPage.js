import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image"; // Import your image component
import Link from "next/link"; // Import Link from next/link
import { GoArrowUpRight } from "react-icons/go"; // Import GoArrowUpRight from react-icons

// Slide Content for Jobme
const SlideContent1 = () => (
  <div className="flex flex-col  rounded-lg w-full md:w-1/3">
    <div className="flex justify-center items-center h-[350px]">
      <Image
        src="/jobme.jpeg"
        width={450}
        height={350}
        alt="Jobme Thumbnail"
        className="object-cover w-full h-full rounded-md"
      />
    </div>
    <div className="mt-4 flex flex-col h-full">
      <h4 className="font-bold text-lg">Jobme</h4>
      <p className="text-[#282938] mt-4 text-base md:text-lg">
        Jobme is an innovative platform that allows users to easily search for
        job opportunities from the comfort of their home. Built using Next.js,
        Tailwind CSS, JavaScript, HTML, and CSS, Jobme provides a seamless and
        responsive experience to help you find your next career move with ease.
      </p>
      <div className="flex gap-2 mt-11">
        <Link
          href="https://updated-jobme.vercel.app/"
          className="text-[#282938] text-sm font-semibold underline underline-offset-4 hover:bg-gray-200 rounded-md transition-all duration-300 p-1 ease-in-out"
        >
          View Website
        </Link>
        <GoArrowUpRight className="text-[#282938] text-lg font-semibold" />
      </div>
    </div>
  </div>
);

// Slide Content for RealEstate
const SlideContent2 = () => (
  <div className="flex flex-col rounded-lg w-full md:w-1/3">
    <div className="flex justify-center items-center h-[350px]">
      <Image
        src="/real-estate (3).jpeg"
        width={450}
        height={350}
        alt="RealEstate Thumbnail"
        className="object-cover w-full h-full rounded-md"
      />
    </div>
    <div className="mt-4 flex flex-col h-full">
      <h4 className="font-bold text-lg">RealEstate</h4>
      <p className="text-[#282938] mt-4 text-base md:text-lg">
        RealEstate is a comprehensive platform designed to help you buy, sell,
        and rent properties with ease. Whether you're searching for your dream
        home or looking to invest in real estate, our platform offers a seamless
        experience with detailed property listings, Built using Next.js,
        Tailwind CSS, JavaScript, HTML, and CSS, RealEstate ensures a modern,
        fast, and responsive experience across all devices.
      </p>
      <div className="flex gap-2 mt-4">
        <Link
          href="https://realestate-woad-eight.vercel.app/"
          className="text-[#282938] text-sm font-semibold underline underline-offset-4 hover:bg-gray-200 rounded-md transition-all duration-300 p-1 ease-in-out"
        >
          View Website
        </Link>
        <GoArrowUpRight className="text-[#282938] text-lg font-semibold" />
      </div>
    </div>
  </div>
);

// Slide Content for CofeShop
const SlideContent3 = () => (
  <div className="flex flex-col  rounded-lg w-full md:w-1/3">
    <div className="flex justify-center items-center h-[350px]">
      <Image
        src="/cofeshop (3).jpeg"
        width={450}
        height={350}
        alt="CofeShop Thumbnail"
        className="object-cover w-full h-full rounded-md"
      />
    </div>
    <div className="mt-12 flex flex-col h-full">
      <h4 className="font-bold text-lg mt-24">CofeShop</h4>
      <p className="text-[#282938] text-base md:text-lg mt-4">
        Ahuse Coffee Shop is your perfect spot to enjoy freshly brewed coffee,
        delicious pastries, and a cozy ambiance. Our online platform allows you
        to explore our menu, place orders, and discover promotions—all from the
        comfort of your home. Built with Next.js, Tailwind CSS, JavaScript,
        HTML, and CSS, we ensure a smooth and responsive experience across all
        devices.
      </p>
      <div className="flex gap-2 mt-4">
        <Link
          href="https://cofe-shop-og7ug9v9c-tonia-ezinnes-projects.vercel.app/"
          className="text-[#282938] text-sm font-semibold underline underline-offset-4 hover:bg-gray-200 rounded-md transition-all duration-300 p-1 ease-in-out"
        >
          View Website
        </Link>
        <GoArrowUpRight className="text-[#282938] text-lg font-semibold" />
      </div>
    </div>
  </div>
);

const data = [SlideContent1, SlideContent2, SlideContent3];

// Main Carousel Component
const GitPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((SlideComponent, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="w-full max-w-md h-auto flex items-center justify-center p-4">
              <SlideComponent /> {/* Render the component */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GitPage;
