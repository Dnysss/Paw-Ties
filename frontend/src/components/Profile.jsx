import Footer from "./Footer";
import Nav from "./Nav";

import userImg from "./../assets/images/user.png";

function Profile() {
  return (
    <>
      <Nav bgColorClass="bg-white" />
      <div className="p-4 flex justify-center mb-10">
        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow-lg">
          <form className="flex flex-col items-center pb-10 pt-4">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={userImg}
              alt="user image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">Denys</h5>

            <label
              class="block mb-2 text-sm font-medium text-gray-900"
              for="user_avatar"
            >
              Upload file
            </label>

            <div>
              <input
                className="block w-72 text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-300 focus:outline-none border-gray-600 placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                class="block mb-2 text-sm font-semibold text-gray-900 mt-2"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#002A48]"
                placeholder="name@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="name"
                class="block mb-2 text-sm font-semibold text-gray-900 mt-2"
              >
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#002A48]"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                class="block mb-2 text-sm font-semibold text-gray-900 mt-2"
              >
                Phone
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#002A48]"
                placeholder="Phone"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                class="block mb-2 text-sm font-semibold text-gray-900 mt-2"
              >
                Password
              </label>
              <input
                type="password"
                name="pasword"
                id="pasword"
                class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#002A48]"
                placeholder="Password"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                class="block mb-2 text-sm font-semibold text-gray-900 mt-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#002A48]"
                placeholder="Enter Passowrd"
                required
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
