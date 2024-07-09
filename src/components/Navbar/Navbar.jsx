import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import resume from "../../assets/alauddin-resume.pdf";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="h-[15vh]" id="navbar">
      <div className="container flex items-center place-content-between h-full text-2xl">
        <div className="logo font-semibold">Alauddin</div>
        <ul className="hidden md:flex gap-5">
          <a href={resume} className="hover-border">
            Resume
          </a>
          <a href="#about" className="hover-border">
            About Me
          </a>
          <a href="#experiences" className="hover-border">
            Experiences
          </a>
        </ul>
        <div
          className="text-3xl md:hidden cursor-pointer transition-all ease-in-out delay-1000"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose /> : <FaBars />}
        </div>
        {isOpen && (
          <div
            className={`md:hidden top-[15vh] absolute h-[85vh] py-10 px-24 right-0 text-gray bg-white z-10 transition-all ease-in-out delay-0`}
          >
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray"
            >
              Resume
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray mt-1"
            >
              About Me
            </a>
            <a
              href="#experiences"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray mt-1"
            >
              Experiences
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
