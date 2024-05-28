import Footer from "./Footer";
import Nav from "./Nav";
import { useModal } from "./modals/ModalContext";
import { pets } from "../data";

import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

function MyPets() {
  const { openModal } = useModal();
  const { name, img } = pets;
  return (
    <>
      <Nav bgColorClass="bg-white" />
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-[#002A48]">My Pets</h2>
          <p className="text-sm text-gray-500 mb-6">
            There are no pets registered yet
          </p>
        </div>
        <button
          onClick={openModal}
          className="flex items-center space-x-2 px-4 py-2 border border-[#002A48] text-[#002A48] rounded-3xl hover:bg-[#002A48] hover:text-white transition duration-300"
        >
          <span>Register Pet</span>
        </button>
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

                <div className="flex flex-wrap w-full sm:w-auto justify-center">
                  <button className="flex items-center bg-[#002A48] shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold mr-2 mb-2 sm:mb-0 hover:bg-blue-900 transition duration-300">
                    <div className="mr-1">Edit</div>
                    <MdEditSquare className="w-4 h-4" />
                  </button>

                  <button className="flex items-center bg-red-500 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold mb-2 sm:mb-0 hover:bg-red-400 transition duration-300">
                    <div className="mr-1">Delete</div>
                    <MdDelete className="w-4 h-4" />
                  </button>
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

export default MyPets;