import React from "react";
import Image from "next/image";

const SectionThree = () => {
  return (
    <div className="w-full mt-10 p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto container w-11/12">
        
        <div className="flex justify-center items-center mt-5 md:mt-0 md:order-1">
          <div className="relative w-52 h-0 pb-[120%]">
            <Image
              src="/Imaget.jpeg"
              layout="fill"
              objectFit="contain"
              alt="Tonia's image"
              className="absolute inset-0"
            />
          </div>
        </div>

        
        <div className="flex flex-col justify-center order-2 md:order-2">
          <h5 className="text-[#1C1E53] text-sm md:text-base mt-5">About</h5>
          <h2 className="text-[#1C1E53] mt-5 text-xl md:text-2xl lg:text-2xl font-bold">
            About Me
          </h2>
          <p className="text-[#1C1E53] text-sm mt-2 md:text-base">
            Hi there! I’m Tonia, an enthusiastic frontend developer intern with
            a passion for creating engaging and user-friendly web experiences.
            Currently, I’m diving into the world of web development, eager to
            apply my growing skills and contribute to exciting projects.
          </p>

          <h3 className="text-[#1C1E53] mt-5 text-xl md:text-2xl lg:text-2xl font-bold">
            Skills and Learning
          </h3>
          <p className="text-[#1C1E53] text-sm md:text-base mt-2">
            I’m currently honing my skills in:
          </p>
          <ul className="list-disc list-inside text-[#1C1E53] text-sm md:text-base mt-2">
            <li>
              HTML, CSS, Bootstrap & Tailwind: Building clean, responsive web
              pages with a strong emphasis on design and accessibility.
            </li>
            <li>
              JavaScript: Developing interactive features and improving user
              experiences with foundational JavaScript.
            </li>
            <li>
              React & Next.js: React is a JavaScript library for building user
              interfaces with reusable components, while Next.js is a framework
              built on top of React that provides server-side rendering, static
              site generation, and other features to enhance performance and
              SEO.
            </li>
          </ul>

          <h3 className="text-[#1C1E53] mt-5 text-xl md:text-2xl lg:text-2xl font-bold">
            Educational Background
          </h3>
          <p className="text-[#1C1E53] text-sm md:text-base mt-2">
            I have recently completed a six-month program at Tech Studio
            Academy, which has equipped me with the fundamentals of frontend
            development. I’m constantly learning and staying updated with the
            latest industry trends and best practices.
          </p>

          <h3 className="text-[#1C1E53] mt-5 text-xl md:text-2xl lg:text-2xl font-bold">
            Motivation and Goals
          </h3>
          <p className="text-[#1C1E53] text-sm md:text-base mt-2">
            I’m driven by a deep interest in technology and a desire to create
            websites that not only look great but also offer a seamless user
            experience. My goal is to grow my skills further and contribute to
            projects that make a difference.
          </p>

          <h3 className="text-[#1C1E53] mt-5 text-xl md:text-2xl lg:text-2xl font-bold">
            Projects and Experience
          </h3>
          <p className="text-[#1C1E53] text-sm md:text-base mt-2">
            I’ve worked on several projects during my studies, including JobMe
            Project. These projects have allowed me to apply what I’ve learned
            and develop a portfolio that showcases my work.
          </p>

          <h3 className="text-[#1C1E53] mt-5 text-xl md:text-2xl lg:text-2xl font-bold">
            Let’s Connect
          </h3>
          <p className="text-[#1C1E53] text-sm md:text-base mt-2">
            I’m excited about the opportunity to learn from experienced
            developers and contribute to real-world projects. Feel free to
            connect with me on Tonia-Ezinne on LinkedIn or check out my
            portfolio at ... I’d love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
