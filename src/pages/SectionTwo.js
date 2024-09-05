import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import Image from "next/image";
import HomeSlide from "../../components/HomeSlide";

const SectionTwo = () => {
  return (
    <div className="w-11/12 container mx-auto">
      <div className="mt-10 text-start">
        <h5 className="text-lg font-semibold text-[#282938]">My Skills</h5>
        <h1 className="text-2xl mt-2 font-semibold md:text-3xl text-[#282938]">
          My Expertise
        </h1>
      </div>

      {/* Grid for larger screens */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
        {/* Skill 1 */}
        <div className="bg-[#F5FCFF] p-5 rounded-lg">
          <div className="w-12 h-12 flex justify-center items-center rounded-md bg-white">
            <FaMobileAlt className="text-[#282938] text-4xl" />
          </div>
          <h2 className="text-[#282938] text-xl font-bold mt-5">
            Responsive Design
          </h2>
          <p className="text-[#282938] text-lg mt-2">
            Responsive design ensures that your website looks great and
            functions well on all devices, from smartphones to large desktop
            monitors, by adapting its layout and content dynamically based on
            screen size.
          </p>
        </div>

        {/* Skill 2 */}
        <div className="bg-[#F5FCFF] p-5 rounded-lg">
          <div className="w-12 h-12 flex justify-center items-center rounded-md bg-white">
            <Image
              src="/tag 1.svg"
              width={36} // Adjust width to your desired size
              height={36} // Adjust height to maintain aspect ratio
              alt="Tag"
              className="object-cover"
            />
          </div>
          <h2 className="text-[#282938] text-xl font-bold mt-5">
            Front-End Frameworks
          </h2>
          <p className="text-[#282938] text-lg mt-2">
            Front-end frameworks streamline web development by providing
            pre-built components and tools, allowing developers to create
            interactive and responsive user interfaces more efficiently and
            consistently.
          </p>
        </div>

        {/* Skill 3 */}
        <div className="bg-[#F5FCFF] p-5 rounded-lg">
          <div className="w-12 h-12 flex justify-center items-center rounded-md bg-white">
            <Image
              src="/carbon.svg"
              width={36} // Adjust width to your desired size
              height={36} // Adjust height to maintain aspect ratio
              alt="Carbon"
              className="object-cover"
            />
          </div>
          <h2 className="text-[#282938] text-xl font-bold mt-5">
            Testing and Debugging
          </h2>
          <p className="text-[#282938] text-lg mt-2">
            Effective testing and debugging are crucial for ensuring software
            reliability and performance, as they help identify and resolve
            issues before deployment, leading to a smoother user experience and
            fewer post-release problems.
          </p>
        </div>

        {/* Skill 4 */}
        <div className="bg-[#F5FCFF] p-5 rounded-lg">
          <div className="w-12 h-12 flex justify-center items-center rounded-md bg-white">
            <Image
              src="/carbon.svg"
              width={36} // Adjust width to your desired size
              height={36} // Adjust height to maintain aspect ratio
              alt="Tonia's image"
              className="object-cover"
            />
          </div>
          <h2 className="text-[#282938] text-xl font-bold mt-5">
            Testing and Debugging
          </h2>
          <p className="text-[#282938] text-lg mt-2">
            &quot;Effective testing and debugging are crucial for ensuring
            software reliability and performance, as they help identify and
            resolve issues before deployment, leading to a smoother user
            experience and fewer post-release problems.&quot;
          </p>
        </div>
      </div>

      {/* Carousel for smaller screens */}
      <div className="block md:hidden ">
        <HomeSlide />
      </div>
    </div>
  );
};

export default SectionTwo;
