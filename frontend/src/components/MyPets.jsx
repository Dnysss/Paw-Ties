import Footer from "./Footer";
import Nav from "./Nav";
import Message from "./Message";

import { useModal } from "./modals/ModalContext";

import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import useFlashMessage from "../../hooks/useFlashMessage";

import api from "../../utils/api";

function MyPets() {
  const [pets, setPets] = useState([]);
  const { openModal } = useModal();
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/pets/mypets", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      });
  }, [token]);

  async function removePet(id) {
    let msgType = "success";

    const data = await api
      .delete(`/pets/${id}`, {
        headers: {
          Authorization: `Bere ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedPets = pets.filter((pet) => pet._id != id);
        setPets(updatedPets);

        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  }

  return (
    <>
      <Nav bgColorClass="bg-white" />
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-[#002A48]">My Pets</h2>
          {pets.length === 0 && (
            <p className="text-sm text-gray-500 mb-6">
              There are no pets registered yet
            </p>
          )}
        </div>
        <button
          onClick={openModal}
          className="flex items-center space-x-2 px-4 py-2 border border-[#002A48] text-[#002A48] rounded-3xl hover:bg-[#002A48] hover:text-white transition duration-300"
        >
          <span>Register Pet</span>
        </button>
      </div>

      <Message />

      <div className="container mx-auto p-4 px-10 min-h-svh max-w-[1300px]">
        {pets.map((pet) => {
          return (
            <div
              key={pet._id}
              className="flex flex-col items-center rounded-2xl transition-all duration-500 md:flex-row mb-10 border-b-4 border-[#002A48] shadow-lg bg-yellow-300"
            >
              <div className="flex items-center justify-center  md:w-44 h-44">
                <img
                  src={pet.images[0]}
                  className="w-24 h-24 rounded-full shadow-lg"
                  alt="Bonnie image"
                />
              </div>

              <div className="p-4 flex flex-wrap items-center justify-between w-full text-center">
                <h4 className="text-base font-semibold text-gray-900 mb-2 w-full sm:w-auto">
                  {pet.name}
                </h4>

                <div className="flex flex-wrap w-full sm:w-auto justify-center">
                  {pet.available ? (
                    <>
                      {pet.adopter && (
                        <Link
                          to="/"
                          className="flex items-center bg-[#002A48] shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold mr-2 mb-2 sm:mb-0 hover:bg-blue-900 transition duration-300"
                        >
                          <div className="mr-1">Conclir adoção</div>
                          <FaCheckCircle className="w-4 h-4" />
                        </Link>
                      )}
                      <button className="flex items-center bg-[#002A48] shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold mr-2 mb-2 sm:mb-0 hover:bg-blue-900 transition duration-300">
                        <div className="mr-1">Edit</div>
                        <MdEditSquare className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          removePet(pet._id);
                        }}
                        className="flex items-center bg-red-500 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold mb-2 sm:mb-0 hover:bg-red-400 transition duration-300"
                      >
                        <div className="mr-1">Delete</div>
                        <MdDelete className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <p>Pet already adopted</p>
                  )}
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
