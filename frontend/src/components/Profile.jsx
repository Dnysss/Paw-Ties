import Footer from "./Footer";
import Nav from "./Nav";

import userImg from "./../assets/images/user.png"

function Profile() {
  return (
    <>
      <Nav />
      <div className="p-4 flex justify-center ">
        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-[#002A48]">
          
          <div className="flex flex-col items-center pb-10 pt-4">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={userImg}
              alt="user image"
            />
            <h5 className="mb-1 text-xl font-medium text-white">
              Denys
            </h5>
            
            <label
              class="block mb-2 text-sm font-medium text-white"
              for="user_avatar"
            >
              Upload file
            </label>

            <div>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
              >
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
              >
                Phone
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Phone"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
              >
                Password
              </label>
              <input
                type="password"
                name="pasword"
                id="pasword"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Password"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Passowrd"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
