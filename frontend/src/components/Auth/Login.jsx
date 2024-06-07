import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Nav from "./../Nav";
import Footer from "./../Footer";
import Input from "../form/Input";
import Message from "../Message";

import { Context } from "../../../context/UserContext";

import { IoPawSharp } from "react-icons/io5";

function Login() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { login } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await login(user);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Nav bgColorClass="bg-white" />
      <Message />
      <div className="flex justify-center items-center py-32">
        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center pb-5 pt-4"
          >
            <h3 className="text-2xl font-bold text-[#002A48] my-2.5">Login</h3>
            <div>
              <Input
                text="E-mail"
                type="email"
                name="email"
                placeholder="name@example.com"
                handleOnChange={handleChange}
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
              <button
                type="submit"
                className={`w-full mt-4 text-white bg-[#002A48] transition-all duration-300 hover:bg-[#001F36] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                  loading ? "cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <IoPawSharp className="animate-spin mx-auto" />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
          <div className="flex items-center text-center justify-center text-gray-400 text-sm mb-5">
            <p className="mr-1">Don't have an account yet?</p>
            <Link
              className="text-blue-900 font-bold hover:text-indigo-900"
              to="/register"
            >
              Register.
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
