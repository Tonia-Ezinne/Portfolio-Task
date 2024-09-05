import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className="sticky top-0 z-50 bg-[#FFFFFFCC] py-1 lg:py-2 shadow-lg"
      ref={menuRef}
    >
      <nav className=" container mx-auto w-11/12 flex items-center justify-between px-4 lg:px-1">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center py-4 px-2"
          onClick={handleLinkClick}
        >
          <Image src="/image 1.svg" width={40} height={40} alt="logo" />
          <h1 className="text-[#394149] hover:text-[#5E3BEE] text-lg md:text-2xl font-semibold ml-2">
            ToniaDev
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
          <Link
            href="/"
            className="py-4 px-2 text-black hover:text-[#5E3BEE] transition duration-300  font-semibold lg:text-lg"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/joblisting"
            className="py-4 px-2 text-black hover:text-[#5E3BEE] transition duration-300 font-semibold lg:text-lg"
            onClick={handleLinkClick}
          >
            Portfolio
          </Link>
          <Link
            href="/about-me"
            className="py-4 px-2 text-black hover:text-[#5E3BEE] transition duration-300 font-semibold lg:text-lg"
            onClick={handleLinkClick}
          >
            About Me
          </Link>
          <Link
            href="/testimonials"
            className="py-4 px-2 text-black hover:text-[#5E3BEE] transition duration-300 font-semibold lg:text-lg"
            onClick={handleLinkClick}
          >
            Testimonials
          </Link>
        </div>

        {/* Contact Link */}
        <div className="hidden lg:flex items-center w-26  border border-[#5E3BEE] hover:bg-[#1C1E53] rounded">
          <Link
            href="/contact"
            className="py-4 px-2 text-[#5E3BEE] text-center hover:text-[white] transition duration-300  rounded font-semibold lg:text-lg"
            onClick={handleLinkClick}
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-end w-full px-4">
          <button
            className="outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-500 hover:text-gray-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-[#FFFFFFCC] py-2 shadow-lg`}
      >
        <Link
          href="/"
          className="block py-2 px-4 text-sm text-[#1C1E53] hover:text-[#5E3BEE] transition duration-300"
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          href="/joblisting"
          className="block py-2 px-4 text-sm text-[#1C1E53] hover:text-[#5E3BEE] transition duration-300"
          onClick={handleLinkClick}
        >
          Portfolio
        </Link>
        <Link
          href="/about-me"
          className="block py-2 px-4 text-sm text-[#1C1E53] hover:text-[#5E3BEE] transition duration-300"
          onClick={handleLinkClick}
        >
          About Me
        </Link>
        <Link
          href="/testimonials"
          className="block py-2 px-4 text-sm text-[#1C1E53] hover:text-[#5E3BEE] transition duration-300"
          onClick={handleLinkClick}
        >
          Testimonials
        </Link>
        <Link
          href="/contact"
          className="block py-2 px-4 text-sm text-[#1C1E53] hover:text-[#5E3BEE] transition duration-300"
          onClick={handleLinkClick}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
