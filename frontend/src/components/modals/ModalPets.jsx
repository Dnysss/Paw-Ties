import React from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import { useModal } from "./ModalContext";

Modal.setAppElement("#root");

function ModalPets() {
  const { isOpen, closeModal } = useModal();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Register Pet"
      className="fixed inset-0 z-50 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full ">
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
            <form className="space-y-4" action="#">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-[#002A48]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-neutral-300 placeholder-gray-400 focus:outline-none focus:border-[#F8D629]"
                  placeholder="Enter Name"
                  required
                />
              </div>
              
              <div>
                <label
                  htmlFor="width"
                  className="block mb-2 text-sm font-medium text-[#002A48]"
                >
                  Width
                </label>
                <input
                  type="text"
                  name="width"
                  id="width"
                  className="text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-neutral-300 placeholder-gray-400 focus:outline-none focus:border-[#F8D629]"
                  placeholder="Enter Width"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-[#002A48]"
                >
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  className="text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-neutral-300 placeholder-gray-400 focus:outline-none focus:border-[#F8D629]"
                  placeholder="Enter Gender"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-[#002A48]"
                >
                  Age
                </label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  className="text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-neutral-300 placeholder-gray-400 focus:outline-none focus:border-[#F8D629]"
                  placeholder="Enter Age"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-[#002A48]"
                >
                  Your email
                </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  className="text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-neutral-300 placeholder-gray-400 focus:outline-none focus:border-[#F8D629]"
                  placeholder="Enter"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-[#002A48]"
                >
                  Your email
                </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  className="text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-neutral-300 placeholder-gray-400 focus:outline-none focus:border-[#F8D629]"
                  placeholder="Enter"
                  required
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