import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../utils/api";

import Nav from "./Nav";
import Footer from "./Footer";
import ScreenSpinner from "./loading/ScreenSpinner";

import imgPet from "./../assets/images/img2.png";

import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Pets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPets(currentPage);
  }, [currentPage]);

  async function fetchPets(page) {
    setLoading(true);
    try {
      const response = await api.get(`/pets`, {
        params: { page, limit: 10 },
      });

      setPets(response.data.pets);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (err) {
      setLoading(false); // Mesmo em caso de erro, pare o carregamento
    }
  }

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <Nav bgColorClass="bg-white" />
      <div className="mb-14">
        <div className="flex flex-col mx-auto max-w-screen-xl md:flex-row justify-between items-center bg-white p-11 rounded-lg space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-[#002A48]">
              Take A Look At Some Of Our Pets
            </h2>
          </div>
        </div>
        <div className="container mx-auto px-10">
          {loading && (
            <div className="flex items-center p-44 justify-center text-center bg-white bg-opacity-75 z-50">
              <ScreenSpinner />
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {!loading &&
              pets.map((pet) => (
                <div
                  key={pet._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={pet.images[0]}
                    className="w-full h-48 object-cover"
                    alt={pet.name}
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-[#002A48]">
                      {pet.name}
                    </h2>
                    <p className="text-gray-500">Gênero: {pet.gender}</p>
                    <p className="text-gray-500">Idade: {pet.age}</p>
                    <p className="text-gray-500">{pet.width}</p>
                    {pet.available ? (
                      <Link to={`/pet/${pet._id}`}>
                        <button
                          type="button"
                          className="text-white bg-[#002A48] transition-all duration-300 hover:bg-[#001F36] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-blue-800 mt-4"
                        >
                          More info
                        </button>
                      </Link>
                    ) : (
                      <div className="flex justify-center items-center text-center mt-6 text-emerald-800">
                        <p className="mr-1 text-lg font-semibold ">Adopted</p>
                        <FaCircleCheck className="size-5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {!loading && pets.length === 0 && (
          <div className="flex justify-center items-center flex-col p-20">
            <p className="text-sm text-gray-500 mb-6">
              There are no pets registered yet
            </p>
            <img src={imgPet} alt="no pets" />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center gap-4 mb-24">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-[#002A48] uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <FaArrowLeft />
          Previous
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all ${
                currentPage === index + 1
                  ? "bg-[#002A48] text-white"
                  : "text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
              }`}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {index + 1}
              </span>
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Next
          <FaArrowRight />
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Pets;
