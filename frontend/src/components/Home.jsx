import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import api from "../../utils/api";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FullScreenSpinner from "./loading/FullScreenSpinner";

import imgHome from "./../assets/images/img1.png";

import { FaCircleCheck } from "react-icons/fa6";

function Home() {
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

  if (loading) {
    return <FullScreenSpinner />;
  }

  return (
    <div className="mb-14">
      <div className="flex mx-auto max-w-screen-xl flex-col md:flex-row justify-between items-center bg-white p-11 rounded-lg space-y-4 md:space-y-0">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
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
                    <div className="flex justify-center items-center text-center mt-6 text-emerald-800">
                      <p className="mr-1 text-lg font-semibold ">Adopted</p>
                      <FaCircleCheck className="size-5" />
                    </div>
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
      {pets.length === 0 && (
        <div className="flex justify-center items-center flex-col p-20">
          <p className="text-sm text-gray-500 mb-6">
            There are no pets registered yet
          </p>
          <img src={imgHome} alt="no pets" className="" />
        </div>
      )}
    </div>
  );
}

export default Home;
