import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import api from "../../utils/api";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data.pets);
    });
  }, []);

  return (
    <div className="mb-14">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-11 rounded-lg space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">Whats new?</p>
          <h2 className="text-lg font-bold text-[#002A48]">
            Take A Look At Some Of Our Pets
          </h2>
        </div>
        <Link to="/pets">
          <button className="flex items-center space-x-2 px-4 py-2 border border-[#002A48] text-[#002A48] rounded-3xl hover:bg-[#002A48] hover:text-white transition duration-300">
            <span>View more</span>
            <MdKeyboardArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
      {pets.length > 0 && (
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pets.slice(0, 8).map((pet) => (
              <div
                key={pet._id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={pet.images[0]}
                  alt={pet.name}
                  className="w-full h-48 object-cover"
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
                    <p className="text-sm text-gray-500">Adopted</p>
                  )}
                </div>
              </div>
            ))}
            {pets.length === 0 && (
              <p>
                There are no pets registered or available for adoption at this
                time.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
