import { useState, useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

import userImg from "./../assets/images/user.png";
import Message from "./Message";
import Input from "./form/Input";

import api from "../../utils/api";
import useFlashMessage from "../../hooks/useFlashMessage";

function Profile() {
  const [user, setUser] = useState({});
  const [preview, setPreview] = useState();
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/users/checkuser", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, [token]);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function onFileChange(e) {
    const file = e.target.files[0];
    setPreview(file);
    setUser({ ...user, [e.target.name]: file });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let msgType = "success";

    const formData = new FormData();

    Object.keys(user).forEach((key) => {
      formData.append(key, user[key]);
    });
    
    const data = await api
      .patch(`/users/edit/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        msgType = "error";
        return error.response.data;
      });

    setFlashMessage(data.message, msgType);
  }

  return (
    <>
      <Nav bgColorClass="bg-white" />
      <Message />
      <div className="p-4 flex justify-center mb-10">
        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center pb-10 pt-4"
          >
            {(user.image || preview) && (
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={
                  preview
                    ? URL.createObjectURL(preview)
                    : `http://localhost:3000/images/users/${user.image}`
                }
                alt={user.name}
              />
            )}

            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="avatar"
            >
              Upload file
            </label>

            <div className="w-72">
              <Input type="file" name="avatar" handleOnChange={onFileChange} />
            </div>

            <div>
              <Input
                text="Name"
                type="text"
                name="name"
                placeholder="Name"
                handleOnChange={handleChange}
                value={user.name || ""}
              />
            </div>

            <div>
              <Input
                text="E-mail"
                type="email"
                name="email"
                placeholder="name@example.com"
                handleOnChange={handleChange}
                value={user.email || ""}
              />
            </div>

            <div>
              <Input
                text="Phone"
                type="phone"
                name="phone"
                placeholder="Phone"
                handleOnChange={handleChange}
                value={user.phone || ""}
              />
            </div>

            <div>
              <Input
                text="Password"
                type="password"
                name="password"
                placeholder="Password"
                handleOnChange={handleChange}
              />
            </div>

            <div>
              <Input
                text="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                handleOnChange={handleChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full mt-4 text-white bg-[#002A48] transition-all duration-300 hover:bg-[#001F36] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
