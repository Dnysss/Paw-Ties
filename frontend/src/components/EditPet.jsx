import api from "../../utils/api";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Footer from "./Footer";
import Nav from "./Nav";
import Message from "./Message";
import Input from "./form/Input";
import Select from "./form/Select";

import useFlashMessage from "../../hooks/useFlashMessage";

function EditPet() {
  const [pet, setPet] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const [preview, setPreview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const genders = ["Female", "Male"];
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPet(response.data.pet);
        setIsLoading(false);
      });
  }, [token, id]);

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

    const data = await api
      .patch(`pets/${pet._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  }
  function handleChange(e) {
    setPet({ ...pet, [e.target.name]: e.target.value });
  }

  function onFileChange(e) {
    setPreview(Array.from(e.target.files));
    setPet({ ...pet, images: [...e.target.files] });
  }

  return (
    <>
      <Nav bgColorClass="bg-white" />
      <Message />

      <div className="flex justify-center mb-10">
        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-200">
            <h3 className="text-xl font-semibold text-[#002A48]">Update Pet</h3>
          </div>

          {!isLoading && (
            <form onSubmit={handleSubmit} className="p-4 md:p-5">
              <div className="flex overflow-x-auto w-full p-4">
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

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-4 text-white bg-[#002A48] transition-all duration-300 hover:bg-[#001F36] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Update
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EditPet;
