import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../utils/api";

import Nav from "./Nav";
import Footer from "./Footer";
import ScreenSpinner from "./loading/ScreenSpinner";

import imgPet from "./../assets/images/img2.png";


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
            {!loading && pets.map((pet) => (
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
                  <Link to={`/pet/${pet._id}`}>
                    <button
                      type="button"
                      className="text-white bg-[#002A48] transition-all duration-300 hover:bg-[#001F36] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-blue-800 mt-4"
                    >
                      More info
                    </button>
                  </Link>
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
            <img src={imgPet} alt="no pets" className="" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Pets;
