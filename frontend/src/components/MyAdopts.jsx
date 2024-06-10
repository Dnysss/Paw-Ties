import api from "../../utils/api";

import { useEffect, useState } from "react";

import Footer from "./Footer";
import Nav from "./Nav";
import Message from "./Message";
import ScreenSpinner from "./loading/ScreenSpinner";

import { BiSolidHourglass } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";

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
        {!loading &&
          pets.length > 0 &&
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
                <div className="flex justify-start flex-col items-start text-start">
                  <h4 className="text-base font-semibold text-gray-900 mb-2 w-full sm:w-auto">
                    {pet.name}
                  </h4>
                  <p className="text-sm text-slate-700">
                    <span className="font-bold text-sm">Call to:</span>{" "}
                    {pet.user.phone}
                  </p>
                </div>

                <div className="flex flex-wrap w-full sm:w-auto justify-center p-4 md:p-10 text-blue-950">
                  {pet.available ? (
                    <div className="flex text-center justify-center items-center">
                      <p className="text-sm mr-2">Adoption in process</p>
                      <BiSolidHourglass className="size-5" />
                    </div>
                  ) : (
                    <div className="flex text-center justify-center items-center">
                      <p className="text-sm mr-2">Adoption completed</p>
                      <FaCircleCheck className="size-5" />
                    </div>
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
            <img className="" src={imgMyAdopts} alt="find my adopts" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MyAdopts;
