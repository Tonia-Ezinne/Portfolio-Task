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

      <div className="hidden md:flex flex-col md:flex-row  gap-6 container   mt-5">
        <div className="p-1 rounded-lg ">
          <div className="flex justify-center items-center">
            <Image
              src="/Image3.svg"
              width={450}
              height={350}
              alt="ZIP File Thumbnail"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-bold text-lg">Ahuse</h4>
            <p className="text-[#282938] mt-2 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex gap-2 mt-4">
              <Link
                href="/#"
                className="text-[#282938] text-sm font-semibold underline underline-offset-4 hover:bg-gray-200 rounded-md transition-all duration-300 p-1 ease-in-out"
              >
                View Website
              </Link>
              <GoArrowUpRight className="text-[#282938] text-lg font-semibold" />
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className=" p-1 rounded-lg ">
          <div className="flex justify-center items-center">
            <Image
              src="/Image1.svg"
              width={450}
              height={350}
              alt="ZIP File Thumbnail"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-bold text-lg">Ahuse</h4>
            <p className="text-[#282938] mt-2 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex gap-2 mt-4">
              <Link
                href="/#"
                className="text-[#282938] text-sm font-semibold underline underline-offset-4 hover:bg-gray-200 rounded-md transition-all duration-300 p-1 ease-in-out"
              >
                View Website
              </Link>
              <GoArrowUpRight className="text-[#282938] text-lg font-semibold" />
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className=" p-1 rounded-lg ">
          <div className="flex justify-center items-center">
            <Image
              src="/Image.svg"
              width={450}
              height={350}
              alt="ZIP File Thumbnail"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-bold text-lg">Ahuse</h4>
            <p className="text-[#282938] mt-2 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex gap-2 mt-4">
              <Link
                href="/#"
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
