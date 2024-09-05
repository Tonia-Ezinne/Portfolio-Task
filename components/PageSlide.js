import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LiaStarSolid } from "react-icons/lia";
import Image from "next/image"; // Import your image component if needed
import { FaMobileAlt } from "react-icons/fa"; // Import your icons if needed

const Stars = ({ count, size, color }) => (
  <div className="flex gap-1 mb-3">
    {Array.from({ length: count }, (_, index) => (
      <LiaStarSolid key={index} size={size} className={color} />
    ))}
  </div>
);

const SlideContent1 = () => (
  <div
    className="bg-[#F5FCFF] p-6 rounded-lg flex flex-col items-start text-start"
    style={{
      borderBottom: "4px solid #5E3BEE", // Apply custom bottom border color
      borderTop: "2px solid #006B6A", // Optional: if you want to keep the top border
      borderLeft: "2px solid #006B6A", // Optional: if you want to keep the left border
      borderRight: "2px solid #006B6A", // Optional: if you want to keep the right border
    }}
  >
    <Stars count={5} size={20} color="text-[#006B6A]" />
    <p className="text-[#1C1E53] mb-4">
      The new website design is both visually stunning and incredibly
      user-friendly, reflecting a deep understanding of our brand and our
      customers&apos; needs. {/* Escape apostrophe */}
    </p>
    <div className="flex gap-4 items-center">
      <Image
        src="/Avatar Image (5).svg"
        width={60}
        height={60}
        alt="Avatar Image"
        className="rounded-full object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold">Bliss Lian</h3>
        <p>Starbucks</p>
      </div>
    </div>
  </div>
);


const SlideContent2 = () => (
  <div className="border-2 border-[#006B6A]  bg-[#F5FCFF] p-6 rounded-lg flex flex-col items-start text-start">
    <Stars count={5} size={20} color="text-[#006B6A]" />
    <p className="text-[#1C1E53] mb-4">
      Thanks to the front-end developer&apos;s expertise, our site loads quickly
      and seamlessly across all devices, which has significantly improved user
      engagement and satisfaction. {/* Escape apostrophe */}
    </p>
    <div className="flex gap-4 items-center">
      <Image
        src="/Avatar Image (7).svg"
        width={60}
        height={60}
        alt="Avatar Image"
        className="rounded-full object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold">Naps Russell</h3>
        <p>Louis Vuitton</p>
      </div>
    </div>
  </div>
);

const SlideContent3 = () => (
  <div className="border-2 border-[#006B6A]  bg-[#F5FCFF] p-6 rounded-lg flex flex-col items-start text-start">
    <Stars count={5} size={20} color="text-[#006B6A]" />
    <p
      className="text-[#1C1E53] mb-4"
    >
      Their attention to detail and commitment to responsive design have
      transformed our online presence, making it easier for our users to
      navigate and interact with our content.{" "}
      {/* Ensure no apostrophes are unescaped */}
    </p>
    <div className="flex gap-4 items-center">
      <Image
        src="/Avatar Image (1).svg"
        width={60}
        height={60}
        alt="Avatar Image"
        className="rounded-full object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold">Rossy Russell</h3>
        <p>McDonald&apos;s</p> {/* Escape apostrophe */}
      </div>
    </div>
  </div>
);

const data = [SlideContent1, SlideContent2, SlideContent3];

const PageSlide = () => {
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
            <div className="w-full max-w-lg bg-gray-200 flex items-center justify-center p-6">
              <SlideComponent /> {/* Render the component */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PageSlide;
