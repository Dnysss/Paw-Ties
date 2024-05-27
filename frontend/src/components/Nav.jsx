import logo from "./../assets/images/logo.png"
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#F8D629]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-9 sm:h-10 md:h-12 lg:h-12 xl:h-12" alt="Paw Ties Logo" />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <TiThMenu className="w-5 h-5 text-[#002A48] "/>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto text-[#002A48]`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:hover:bg-transparent md:border-0 text-[#002A48]  md:p-0  md:dark:hover:bg-transparent transition-all duration-300 hover:text-[#001F36]"
                aria-current="page"
              >
                Adopt
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:hover:bg-transparent md:border-0 text-[#002A48] md:p-0 md:dark:hover:bg-transparent transition-all duration-300 hover:text-[#001F36]"
              >
                My Adopts
              </a>
            </li>
            <li>
              <Link
                to="/mypets"
                className="block py-2 px-3 md:hover:bg-transparent md:border-0 text-[#002A48]  md:p-0 md:dark:hover:bg-transparent transition-all duration-300 hover:text-[#001F36]"
              >
                My Pets
                
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block py-2 px-3 md:hover:bg-transparent md:border-0 text-[#002A48] md:p-0 md:dark:hover:bg-transparent transition-all duration-300 hover:text-[#001F36]"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

