import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { PiArrowSquareOutBold } from "react-icons/pi";

import logo from "./../assets/images/logo.png"

function Footer() {
  return (
    <section className="pt-16 pb-7 bg-[#F8D629] rounded-t-3xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between pb-14 border-b border-[#002A48] gap-8">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18" src={logo} alt="Paw Ties Logo" />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-3 rounded-full bg-white text-[#002A48] group transition-all duration-500 hover:bg-[#002A48] hover:text-white focus-within:outline-0 focus-within:bg-amber-500 focus-within:text-white"
            >
              <FaFacebookF className="w-5 h-5"/>
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white text-[#002A48] group transition-all duration-500 hover:bg-[#002A48] hover:text-white focus-within:outline-0 focus-within:bg-amber-500 focus-within:text-white"
            >
             <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white text-[#002A48] group transition-all duration-500 hover:bg-[#002A48] hover:text-white focus-within:outline-0 focus-within:bg-amber-500 focus-within:text-white"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white text-[#002A48] group transition-all duration-500 hover:bg-[#002A48] hover:text-white focus-within:outline-0 focus-within:bg-amber-500 focus-within:text-white"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="py-14 flex flex-col lg:flex-row justify-between gap-8 border-b border-[#002A48]">
          <div className="w-full max-lg:mx-auto flex flex-col sm:flex-row max-lg:items-center max-lg:justify-between gap-6 md:gap-12 lg:gap-24">
            <div className="">
              <h6 className="text-lg font-medium text-[#002A48] mb-7 max-lg:text-center">
                Pagedone
              </h6>
              <ul className="flex flex-col max-lg:items-center gap-6">
                <li>
                  <a
                    href="#"
                    className="text-base font-normal max-lg:text-center text-[#002A48] whitespace-nowrap transition-all duration-300 hover:text-white focus-within:outline-0 focus-within:text-amber-400"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-normal max-lg:text-center text-[#002A48] whitespace-nowrap transition-all duration-300 hover:text-white focus-within:outline-0 focus-within:text-amber-400"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-normal max-lg:text-center text-[#002A48] whitespace-nowrap transition-all duration-300 hover:text-white focus-within:outline-0 focus-within:text-amber-400"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-normal max-lg:text-center text-[#002A48] whitespace-nowrap transition-all duration-300 hover:text-white focus-within:outline-0 focus-within:text-amber-400"
                  >
                    Pro Version
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="text-lg font-medium text-[#002A48] mb-7 max-lg:text-center">
                Products
              </h6>
              <ul className="flex flex-col gap-6 max-lg:items-center">
                <li>
                  <a
                    href="#"
                    className="text-base font-normal text-[#002A48] whitespace-nowrap transition-all duration-300 hover:text-white focus-within:outline-0 focus-within:text-amber-400"
                  >
                    Icons Assets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-normal text-[#002A48] whitespace-nowrap transition-all duration-300 hover:text-white focus-within:outline-0 focus-within:text-amber-400"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-normal text-[#002A48] whitespace-nowrap transition-all duration-300 hover:text-white focus-within:outline-0 focus-within:text-amber-400"
                  >
                    Components Library
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="text-lg font-medium text-[#002A48] mb-7 max-lg:text-center">
                Resources
              </h6>
              <ul className="flex flex-col gap-6 max-lg:items-center">
                <li>
                  <a
                    href="#"
                    className="text-base font-normal text-[#002A48] whitespace-nowrap transition-all duration-300 hover:text-white focus-within:outline-0 focus-within:text-amber-400"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-normal text-[#002A48] whitespace-nowrap transition-all duration-300 hover:text-white focus-within:outline-0 focus-within:text-amber-400"
                  >
                    Quick Start
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-normal text-[#002A48] whitespace-nowrap transition-all duration-300 hover:text-white focus-within:outline-0 focus-within:text-amber-400"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-normal text-[#002A48] whitespace-nowrap transition-all duration-300 hover:text-white focus-within:outline-0 focus-within:text-amber-400"
                  >
                    User Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 pt-7">
          <span className="text-sm font-normal text-[#002A48]">
            <a  className="">
              ©pagedone
            </a>{" "}
            2023, All rights reserved.
          </span>
          <div className="relative  text-[#002A48] focus-within:text-gray-900 ">
            <div className="absolute inset-y-0 right-6 flex items-center pl-3 pointer-events-none ">
                <PiArrowSquareOutBold />
            </div>
            <button
              type="button"
              id="default-search"
              className="block w-full lg:min-w-[448px] pr-12 pl-6 py-3 text-base font-normal shadow-xs text-[#002A48] bg-transparent border border-gray-700 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed transition-all duration-500 "
            >
              Have a question? talk to us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
