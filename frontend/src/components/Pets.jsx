import Footer from "./Footer";
import Nav from "./Nav";
import { useModal } from "./modals/ModalContext";

function Pets() {
  const { openModal } = useModal();

  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-blue-900">My Pets</h2>
          <p className="text-sm text-gray-500 mb-6">
            There are no pets registered yet
          </p>
        </div>
        <button onClick={openModal} className="flex items-center space-x-2 px-4 py-2 border border-blue-900 text-blue-900 rounded-3xl hover:bg-blue-900 hover:text-white transition duration-300">
          <span>Register Pet</span>
        </button>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-svh max-w-[1200px]">
            
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pets;
