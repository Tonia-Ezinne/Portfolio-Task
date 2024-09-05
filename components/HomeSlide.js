import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaMobileAlt } from "react-icons/fa"; // Import your icons
import Image from "next/image"; // Import your image component if needed

// Define slide components or JSX
const SlideContent1 = () => (
  <div
    className="bg-[#F5FCFF] p-5  rounded-lg flex flex-col items-center"
  >
    <div className="w-16 h-16 flex justify-center items-center rounded-md bg-white">
      <FaMobileAlt className="text-[#282938] text-4xl" />
    </div>
    <h2 className="text-[#282938] text-xl font-bold mt-5 text-center">
      Responsive Design
    </h2>
    <p className="text-[#282938] text-lg mt-2 text-center">
      Responsive design ensures that your website looks great and functions well
      on all devices, from smartphones to large desktop monitors, by adapting
      its layout and content dynamically based on screen size.
    </p>
  </div>
);

const SlideContent2 = () => (
  <div className="bg-[#F5FCFF] p-5 rounded-lg flex flex-col items-center">
    <div className="w-16 h-16 flex justify-center items-center rounded-md bg-white">
      <Image
        src="/tag 1.svg"
        width={48} // Adjust width to your desired size
        height={48} // Adjust height to maintain aspect ratio
        alt="Tonia's image"
        className="object-cover"
      />
    </div>
    <h2 className="text-[#282938] text-xl font-bold mt-5 text-center">
      Front-End frameworks
    </h2>
    <p className="text-[#282938] text-lg mt-2 text-center">
      Front-end frameworks streamline web development by providing pre-built
      components and tools, allowing developers to create interactive and
      responsive user interfaces more efficiently and consistently.
    </p>
  </div>
);

const SlideContent3 = () => (
  <div className="bg-[#F5FCFF] p-5 rounded-lg flex flex-col items-center">
    <div className="w-16 h-16 flex justify-center items-center rounded-md bg-white">
      <Image
        src="/carbon.svg"
        width={48} // Adjust width to your desired size
        height={48} // Adjust height to maintain aspect ratio
        alt="Tonia's image"
        className="object-cover"
      />
    </div>
    <h2 className="text-[#282938] text-xl font-bold mt-5 text-center">
      Testing and Debugging
    </h2>
    <p className="text-[#282938] text-lg mt-2 text-center">
      Effective testing and debugging are crucial for ensuring software
      reliability and performance, as they help identify and resolve issues
      before deployment, leading to a smoother user experience and fewer
      post-release problems.
    </p>
  </div>
);

const SlideContent4 = () => (
  <div className="bg-[#F5FCFF] p-5 rounded-lg flex flex-col items-center">
    <div className="w-16 h-16 flex justify-center items-center rounded-md bg-white">
      <Image
        src="/carbon.svg"
        width={48} // Adjust width to your desired size
        height={48} // Adjust height to maintain aspect ratio
        alt="Tonia's image"
        className="object-cover"
      />
    </div>
    <h2 className="text-[#282938] text-xl font-bold mt-5 text-center">
      Testing and Debugging
    </h2>
    <p className="text-[#282938] text-lg mt-2 text-center">
      Effective testing and debugging are crucial for ensuring software
      reliability and performance, as they help identify and resolve issues
      before deployment, leading to a smoother user experience and fewer
      post-release problems.
    </p>
  </div>
);

const data = [SlideContent1, SlideContent2, SlideContent3, SlideContent4];

const HomeSlide = () => {
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

export default HomeSlide;
