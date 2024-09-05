import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F5FCFF]">
      {/* Top Section: Logo and Navigation Links */}
      <div className="container w-11/12 mx-auto py-5 flex flex-col lg:flex-row lg:justify-between gap-5">
        {/* Logo Section */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          <Link href="/" className="flex items-center">
            <Image src="/image 1.svg" width={40} height={40} alt="logo" />
            <h1 className="text-[#394149] hover:text-[#5E3BEE] text-lg md:text-2xl font-semibold ml-2 ">
              ToniaDev
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <Link
            href="/gallery"
            className="text-[#394149] text-lg font-semibold"
          >
            Home
          </Link>
          <Link href="/prices" className="text-[#394149] text-lg font-semibold">
            Portfolio
          </Link>
          <Link href="/about" className="text-[#394149] text-lg font-semibold">
            About Me
          </Link>
          <Link
            href="/contact"
            className="text-[#394149] text-lg font-semibold"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="text-[#394149] text-lg font-semibold"
          >
            Testimonials
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 lg:mt-0">
          <FaFacebookF className="text-[#394149] text-2xl" />
          <FaInstagram className="text-[#394149] text-2xl" />
          <FaTwitter className="text-[#394149] text-2xl" />
          <FaLinkedin className="text-[#394149] text-2xl" />
        </div>
      </div>

      {/* Bottom Section: Footer Text and Additional Links */}
      <div className="container w-11/12 mx-auto py-5 flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="text-center lg:text-left">
          <p className="text-lg font-semibold">
            I made with <span className="text-red-500">❤️</span> by Airdokan
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <Link href="#" className="text-[#394149] text-lg font-semibold">
            Privacy Policy
          </Link>
          <Link href="#" className="text-[#394149] text-lg font-semibold">
            Terms of Service
          </Link>
          <Link href="#" className="text-[#394149] text-lg font-semibold">
            Cookies Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
