import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image"; // Import your image component
import Link from "next/link"; // Import Link from next/link
import { GoArrowUpRight } from "react-icons/go"; // Import GoArrowUpRight from react-icons

// Define slide components or JSX
const SlideContent1 = () => (
  <div className="flex flex-col items-center">
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
      <h4 className="font-bold text-lg">Ahuse</h4>
      <p className="text-[#282938] mt-2 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros.
      </p>

      <div className="flex gap-1 mt-4">
        <Link href="/#" className="text-[#282938] text-sm font-semibold underline underline-offset-4 hover:bg-gray-200 rounded-md transition-all duration-300 p-1 ease-in-out cursor-pointer">
            View Website
        </Link>
        <GoArrowUpRight className="text-[#282938] mt-2 text-lg font-semibold" />
      </div>
    </div>
  </div>
);

const SlideContent2 = () => (
  <div className="flex flex-col items-center">
    <div className="flex justify-center items-center">
      <Image
        src="/Image1.svg"
        width={350}
        height={350}
        alt="ZIP File Thumbnail"
        className="w-96"
      />
    </div>

    <div className="p-8">
      <h4 className="font-bold text-lg">Ahuse</h4>
      <p className="text-[#282938] mt-2 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros.
      </p>

      <div className="flex gap-1 mt-4">
        <Link href="/#"  className="text-[#282938] text-sm font-semibold underline underline-offset-4 hover:bg-gray-200 rounded-md transition-all duration-300 p-1 ease-in-out cursor-pointer">
            View Website
          
        </Link>
        <GoArrowUpRight className="text-[#282938] mt-2 text-lg font-semibold" />
      </div>
    </div>
  </div>
);

const SlideContent3 = () => (
  <div className="flex flex-col items-center">
    <div className="flex justify-center items-center">
      <Image
        src="/Image.svg"
        width={350}
        height={350}
        alt="ZIP File Thumbnail"
        className="w-96"
      />
    </div>

    <div className="p-8">
      <h4 className="font-bold text-lg">Ahuse</h4>
      <p className="text-[#282938] mt-2 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros.
      </p>

      <div className="flex gap-1 mt-4">
        <Link href="/#" className="text-[#282938] text-sm font-semibold underline underline-offset-4 hover:bg-gray-200 rounded-md transition-all duration-300 p-1 ease-in-out cursor-pointer">
            View Website
          
        </Link>
        <GoArrowUpRight className="text-[#282938] mt-2 text-lg font-semibold" />
      </div>
    </div>
  </div>
);

const data = [SlideContent1, SlideContent2, SlideContent3];

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
            <div className="w-full max-w-md h-auto bg-gray-200 flex items-center justify-center p-4">
              <SlideComponent /> {/* Render the component */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GitPage;
