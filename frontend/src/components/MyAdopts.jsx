import api from "../../utils/api";
import { useEffect, useState } from "react";

import Footer from "./Footer";
import Nav from "./Nav";
import Message from "./Message";
import ScreenSpinner from "./loading/ScreenSpinner";

import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

import useFlashMessage from "../../hooks/useFlashMessage";

import imgMyAdopts from "./../assets/images/img2.png";

function MyAdopts() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/pets/myadoptions", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
        setTimeout(() => {
          setLoading(false); // Dados carregados, parar o spinner
        }, 1000);
      })
      .catch(() => {
        setLoading(false); // Parar o spinner mesmo se houver erro
        setFlashMessage("Error loading pets", "error");
      });
  }, [token, setFlashMessage]);

  return (
    <>
      <Nav bgColorClass="bg-white" />
      <div className="flex flex-col mx-auto max-w-screen-xl md:flex-row justify-between items-center bg-white p-6 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-[#002A48]">My Adopts</h2>
        </div>
      </div>

      <Message />

      <div className="container mx-auto p-4 px-10 min-h-svh max-w-[1300px]">
        {pets.length > 0 &&
          pets.map((pet) => (
            <div
              key={pet._id}
              className="flex flex-col items-center rounded-2xl transition-all duration-500 md:flex-row mb-10 border-b-4 border-[#002A48] shadow-lg bg-yellow-300"
            >
              <div className="flex items-center justify-center  md:w-44 h-44">
                <img
                  src={pet.images[0]}
                  className="w-24 h-24 rounded-full shadow-lg"
                  alt={pet.name}
                />
              </div>

              <div className="p-4 flex flex-wrap items-center justify-between w-full text-center">
                <h4 className="text-base font-semibold text-gray-900 mb-2 w-full sm:w-auto">
                  {pet.name}
                </h4>

                <div className="flex flex-wrap w-full sm:w-auto justify-center">
                  {pet.available ? (
                    <p>Adoption in process</p>
                  ) : (
                    <p>Adoption completed</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        {loading && (
          <div className="flex items-center p-44 justify-center text-center bg-white bg-opacity-75 z-50">
            <ScreenSpinner />
          </div>
        )}
        {!loading && pets.length === 0 && (
          <div className="flex justify-center items-center flex-col p-20">
            <p className="text-sm text-gray-500 mb-6">
              There are no pets registered yet
            </p>
            <img src={imgMyAdopts} alt="" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MyAdopts;
