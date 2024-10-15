import React from "react";
import { DiGithubBadge } from "react-icons/di";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import GitPage from "../../components/GitPage";

const SectionFour = () => {
  return (
    <div className="container mx-auto w-11/12 mt-14">
      <div className="flex flex-col p-2 md:flex-row md:justify-between md:items-center">
        <div>
          <h6 className="text-[#282938] text-sm font-semibold">
            Recent Projects
          </h6>
          <h1 className="text-[#282938] mt-2 text-3xl md:text-3xl lg:text-3xl font-bold">
            My Portfolio
          </h1>
        </div>
        <div className="flex items-center bg-[#7E69D3] p-2 rounded-md mt-3 md:mt-0 hover:bg-[#5B4DAC] hover:shadow-sm cursor-pointer transition-all duration-300 ease-in-out">
          <DiGithubBadge className="text-white text-xl md:text-2xl" />
          <a
            href="https://github.com/Tonia-Ezinne"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm md:text-base ml-2"
          >
            Visit My GitHub
          </a>
        </div>
      </div>

      <div className="hidden md:flex flex-col md:flex-row gap-6 container mt-5">
        {/* Project 1: Jobme */}
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
          <div className="mt-4 flex flex-col  h-full">
            <h4 className="font-bold text-lg md:mt-14">Jobme</h4>
            <p className="text-[#282938] mt-4 text-base md:text-lg">
              Jobme is an innovative platform that allows users to easily search
              for job opportunities from the comfort of their home. Built using
              Next.js, Tailwind CSS, JavaScript, HTML, and CSS, Jobme provides a
              seamless and responsive experience to help you find your next
              career move with ease.The platform features a user-friendly
              interface with advanced filters to tailor your job search. It
              keeps you updated on the latest job openings.
            </p>
            <div className="flex gap-2 mt-4 lg:mt-6">
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

        {/* Project 2: RealEstate */}
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
          <div className="mt-4 flex flex-col  h-full">
            <h4 className="font-bold text-lg lg:mt-14">RealEstate</h4>
            <p className="text-[#282938] mt-4 text-base md:text-lg">
              RealEstate is a comprehensive platform designed to help you buy,
              sell, and rent properties with ease. Whether you're searching for
              your dream home or looking to invest in real estate, our platform
              offers a seamless experience with detailed property listings,
              Built using Next.js, Tailwind CSS, JavaScript, HTML, and CSS,
              RealEstate ensures a modern, fast, and responsive experience
              across all devices.
            </p>
            <div className="flex gap-2 mt-6 lg:mt-12">
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

        {/* Project 3: CofeShop */}
        <div className="flex flex-col  rounded-lg w-full md:w-1/3">
          <div className="flex justify-center items-center h-[350px]">
            <Image
              src="/cofeshop (3).jpeg"
              width={450}
              height={350}
              alt="CofeShop Thumbnail"
              className="object-cover w-full h-full  rounded-md"
            />
          </div>
          <div className="mt-12 flex flex-col   h-full">
            <h4 className="font-bold text-lg md:mt-11 lg:mt-32  xl:mt-36">
              CofeShop
            </h4>
            <p className="text-[#282938] text-base md:text-lg mt-4">
              Ahuse Coffee Shop is your perfect spot to enjoy freshly brewed
              coffee, delicious pastries, and a cozy ambiance. Our online
              platform allows you to explore our menu, place orders, and
              discover promotions—all from the comfort of your home. Built with
              Next.js, Tailwind CSS, JavaScript, HTML, and CSS, we ensure a
              smooth and responsive experience across all devices.
            </p>
            <div className="flex gap-2 md:mt-12 ">
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
      </div>

      <div className="block md:hidden mt-10">
        <GitPage />
      </div>
    </div>
  );
};

export default SectionFour;
