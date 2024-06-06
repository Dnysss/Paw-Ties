import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import { useModal } from "./ModalContext";

import api from "../../../utils/api";
import useFlashMessage from "../../../hooks/useFlashMessage";
import Input from "../form/Input";
import Select from "../form/Select";
import Message from "../Message";

Modal.setAppElement("#root");

function ModalPets({ handleSubmit, petData }) {
  const [pet, setPet] = useState(petData || {});
  const [preview, setPreview] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();
  const genders = ["Female", "Male"];
  const { isOpen, closeModal } = useModal();

  function handleChange(e) {
    setPet({ ...pet, [e.target.name]: e.target.value });
  }

  function onFileChange(e) {
    setPreview(Array.from(e.target.files));
    setPet({ ...pet, images: [...e.target.files] });
  }

  function handleGender(e) {
    setPet({ ...pet, gender: e.target.options[e.target.selectedIndex].text });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let msgType = "success";

    const formData = new FormData();

    await Object.keys(pet).forEach((key) => {
      if (key === "images") {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append("images", pet[key][i]);
        }
      } else {
        formData.append(key, pet[key]);
      }
    });

    try {
      const response = await api.post("pets/create", formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      });
  
      const data = response.data;
      setFlashMessage(data.message, msgType);
    } catch (error) {
      msgType = "error";
      // Verifique se error.response e error.response.data existem
      if (error.response && error.response.data) {
        setFlashMessage(error.response.data.message, msgType);
      } else {
        // Trate outros tipos de erro (como erros de rede)
        setFlashMessage("An unexpected error occurred", msgType);
      }
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Register Pet"
      className="fixed inset-0 z-50 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-[#002A48]">
              Register Pet
            </h3>

            <button
              type="button"
              onClick={closeModal}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <IoClose className="w-5 h-5" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 overflow-y-auto max-h-96">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Message />
              <div className="flex overflow-x-auto w-full">
                {preview.length > 0
                  ? preview.map((image, index) => (
                      <img
                        className="w-24 h-24 mb-3 ml-2 rounded-lg shadow-lg"
                        src={URL.createObjectURL(image)}
                        alt={pet.name}
                        key={`${pet.name}+${index}`}
                      />
                    ))
                  : pet.images &&
                    pet.images.map((image, index) => (
                      <img
                        className="w-24 h-24 mb-3 rounded-lg shadow-lg"
                        src={pet.images}
                        alt={pet.name}
                        key={`${pet.name}+${index}`}
                      />
                    ))}
              </div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="avatar"
              >
                Upload file
              </label>

              <div>
                <Input
                  type="file"
                  name="avatar"
                  handleOnChange={onFileChange}
                  multiple={true}
                />
              </div>

              <div>
                <Input
                  text="Name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  handleOnChange={handleChange}
                  value={pet.name || ""}
                />
              </div>

              <div>
                <Input
                  text="Weight"
                  type="number"
                  name="weight"
                  placeholder="Weight"
                  handleOnChange={handleChange}
                  value={pet.weight || ""}
                />
              </div>

              <div>
                <Select
                  name="gender"
                  text="Gender"
                  options={genders}
                  handleOnChange={handleGender}
                  value={pet.gender || ""}
                />
              </div>

              <div>
                <Input
                  text="Age"
                  type="number"
                  name="age"
                  placeholder="Age"
                  handleOnChange={handleChange}
                  value={pet.age || ""}
                />
              </div>

              <div>
                <Input
                  text="Color"
                  type="text"
                  name="color"
                  placeholder="Color"
                  handleOnChange={handleChange}
                  value={pet.color || ""}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#002A48] transition-all duration-300 hover:bg-[#001F36] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalPets;
