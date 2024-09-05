import React from "react";
import { DiGithubBadge } from "react-icons/di";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const SectionFour = () => {
  return (
    <div className="container mx-auto w-11/12 mt-14">
      <div>
        <h6 className="text-[#282938] text-sm font-semibold">
          Recent Projects
        </h6>
        <div className="grid md:grid-cols-2 md:gap-80 mt-4">
          <div>
            <h1 className="text-[#282938] mt-2  text-4xl md:mt-7 md:text-3xl lg:text-4xl font-bold">
              My Portfolio
            </h1>
          </div>
          {/* GitHub Section */}
          <div className="flex items-center border-2 md:ml-14  lg:ml-40  bg-[#7E69D3] lg:p-2 gap-1  rounded-md md:w-32 w-36 h-12 md:h-14 lg:w-36 mt-3 hover:bg-[#5B4DAC] hover:shadow-sm cursor-pointer transition-all duration-300 ease-in-out">
            <DiGithubBadge className="text-white text-xl" />
            <a
              href="https://github.com/[YourGitHubUsername]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm"
            >
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 md:space-y-10 md:gap-7 md:grid md:grid-cols-3 ">
        <div>
          <div className="">
            <div className="flex justify-center items-center md:mt-10">
              <Image
                src="/Image3.svg"
                width={350}
                height={350}
                alt="ZIP File Thumbnail"
                className="w-96"
              />
            </div>

            <div className="p-8">
              <h4 className=" font-bold text-lg ">Ahuse</h4>
              <p className="text-[#282938] mt-2 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              <div className="flex gap-1 mt-4 ">
                <Link href="/#">
                  <button className="text-[#282938] text-sm font-semibold  underline underline-offset-4 hover:bg-gray-200  rounded-md transition-all duration-300 p-1 ease-in-out cursor-pointer">
                    View Website
                  </button>
                </Link>
                <GoArrowUpRight className="text-[#282938] mt-2 text-lg font-semibold" />
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div>
          <div className="">
            <div className="flex justify-center items-center ">
              <Image
                src="/Image1.svg"
                width={350}
                height={350}
                alt="ZIP File Thumbnail"
                className="w-96"
              />
            </div>

            <div className="p-8 ">
              <h4 className=" font-bold text-lg ">Ahuse</h4>
              <p className="text-[#282938] mt-2 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              <div className="flex gap-1 mt-4 ">
                <Link href="/#">
                  <button className="text-[#282938] text-sm font-semibold  underline underline-offset-4 hover:bg-gray-200  rounded-md transition-all duration-300 p-1 ease-in-out cursor-pointer">
                    View Website
                  </button>
                </Link>
                <GoArrowUpRight className="text-[#282938] mt-2 text-lg font-semibold" />
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div>
          <div className="">
            <div className="flex justify-center items-center ">
              <Image
                src="/Image.svg"
                width={350}
                height={350}
                alt="ZIP File Thumbnail"
                className="w-96"
              />
            </div>

            <div className="p-8 ">
              <h4 className=" font-bold text-lg ">Ahuse</h4>
              <p className="text-[#282938] mt-2 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              <div className="flex gap-1 mt-4 ">
                <Link href="/#">
                  <button className="text-[#282938] text-sm font-semibold  underline underline-offset-4 hover:bg-gray-200  rounded-md transition-all duration-300 p-1 ease-in-out cursor-pointer">
                    View Website
                  </button>
                </Link>
                <GoArrowUpRight className="text-[#282938] mt-2 text-lg font-semibold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
