import React from "react";

import { pets } from "./../data";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";

function Pets() {
  const { name, width, age, gender, img } = pets;
  return (
    <>
      <Nav bgColorClass="bg-white" />
      <div className="mb-14">
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-11 rounded-lg space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">Whats new?</p>
            <h2 className="text-lg font-bold text-[#002A48]">
              Take A Look At Some Of Our Pets
            </h2>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pets.map((pet) => (
              <div
                key={pet.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img src={pet.img} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-[#002A48]">
                    {pet.name}
                  </h2>
                  <p className="text-gray-500">Gênero: {pet.gender}</p>
                  <p className="text-gray-500">Idade: {pet.age}</p>
                  <p className="text-gray-500">{pet.width}</p>
                  <Link to="/details">
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
      </div>
      <Footer />
    </>
  );
}

export default Pets;
