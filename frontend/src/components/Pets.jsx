import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../utils/api";

import Nav from "./Nav";
import Footer from "./Footer";
import ScreenSpinner from "./loading/ScreenSpinner";

import imgPet from "./../assets/images/img2.png";

import { FaCircleCheck } from "react-icons/fa6";

function Pets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/pets")
      .then((response) => {
        setPets(response.data.pets);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(() => {
        setLoading(false); // Mesmo em caso de erro, pare o carregamento
      });
  }, []);

  return (
    <>
      <Nav bgColorClass="bg-white" />
      <div className="mb-14">
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-11 rounded-lg space-y-4 md:space-y-0">
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
      <div className="flex justify-center items-center gap-4 mb-12">
        <button
          disabled
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-[#002A48] uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
          Previous
        </button>
        <div className="flex items-center gap-2">
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-[#002A48] text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              1
            </span>
          </button>
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              2
            </span>
          </button>
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              3
            </span>
          </button>
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              4
            </span>
          </button>
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              5
            </span>
          </button>
        </div>
        <button
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Pets;
