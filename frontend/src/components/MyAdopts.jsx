import Footer from "./Footer";
import Nav from "./Nav";
import { pets } from "./../data";

import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

function MyAdopts() {
  return (
    <>
      <Nav bgColorClass="bg-white" />
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-[#002A48]">My Adopts</h2>
          <p className="text-sm text-gray-500 mb-6">
            There are no pets registered yet
          </p>
        </div>
      </div>

      <div className="container mx-auto p-4 min-h-svh max-w-[1300px]">
        {pets.map((pet, index) => {
          return (
            <div
              key={index}
              className="relative flex flex-col items-center border border-solid border-gray-200 rounded-2xl transition-all duration-500 md:flex-row shadow-md mb-10"
            >
              <div className="block overflow-hidden md:w-52 h-48">
                <img
                  src={pet.img}
                  alt="Card image"
                  className="h-full rounded-2xl object-cover"
                />
              </div>

              <div className="p-4 flex flex-wrap items-center justify-between w-full text-center">
                <h4 className="text-base font-semibold text-gray-900 mb-2 w-full sm:w-auto">
                  {pet.name}
                </h4>

                <div className="flex flex-col w-full sm:w-auto justify-center mr-6">
                  <p className="text-gray-500 mb-3">Adoption in progress</p>
                  <p className="text-sm">
                    <span className="text-gray-900 font-semibold">Call to:</span> 9999-9999
                  </p>
                  <p className="text-sm">
                    <span className="text-gray-900 font-semibold">Contact:</span> example@gmail.com
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default MyAdopts;
