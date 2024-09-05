import React from "react";
import Image from "next/image";
import Link from "next/link";

const SectionOne = () => {
  return (
    <div className=" bg-[#F5FCFF]">
      <div className="grid grid-cols-1 p-1 container mx-auto w-11/12 md:grid-cols-2 gap-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center md:items-start">
          <h5 className="text-[#1C1E53] text-sm md:text-base mt-5">
            Hey, I am Tonia
          </h5>
          <h2 className="text-[#1C1E53] mt-5 text-2xl md:text-3xl lg:text-4xl font-bold">
            I create and optimize the visual and interactive aspects of a
            website or web application
          </h2>
          <p className="text-[#1C1E53] text-sm md:text-base mt-5">
            "My expertise is centered on frontend development, allowing me to
            create engaging, responsive, and visually appealing user interfaces
            that meet a wide range of client needs."
          </p>
          <div className="mt-5">
            <Link href="/" className="inline-block">
              <button className="bg-[#5E3BEE] text-white px-4 py-2 rounded md:px-3 md:py-2 hover:bg-[#4a2dc0] focus:outline-none focus:ring-2 focus:ring-[#4a2dc0] transition-all duration-300 ease-in-out cursor-pointer">
                <h6 className="text-sm md:text-base">Get In Touch</h6>
              </button>
            </Link>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center mt-5 md:mt-0">
          <Image
            src="/myimage.jpeg"
            width={200} // Adjust width to your desired size
            height={200} // Adjust height to maintain aspect ratio
            alt="Tonia's image"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
