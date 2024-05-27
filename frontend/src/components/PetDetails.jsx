import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import { petCarousel } from "./../data";

import img1 from "./../assets/images/heart.png";
import img2 from "./../assets/images/catDog.png";

function PetDetails() {
    console.log('petCarousel:', petCarousel);

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          {petCarousel && petCarousel.length > 0 ? (
            <>
              <Carousel
                showArrows
                showThumbs={false}
                className="rounded-lg shadow-lg overflow-hidden"
              >
                {petCarousel.map((item, index) => (
                  <div key={index} className="h-[500px] w-full">
                    <img
                      src={item.img}
                      alt={`Pet ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Carousel>
              <div className="flex mt-4 space-x-2 justify-center">
                {petCarousel.map((item, index) => (
                  <img
                    key={index}
                    src={item.img}
                    alt={`Pet ${index + 1}`}
                    className="w-16 h-16 object-cover rounded-md cursor-pointer"
                  />
                ))}
              </div>
            </>
          ) : (
            <p>No images available</p>
          )}
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">
              Shiba Inu Sepia
            </h2>
            <button className="mt-4 py-2 px-6 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition">
              Contact us
            </button>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>
                <strong>Gender:</strong> Female
              </li>
              <li>
                <strong>Age:</strong> 2 Months
              </li>
              <li>
                <strong>Weight:</strong> 8kg
              </li>
              <li>
                <strong>Color:</strong> Apricot & Tan
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="flex items-center space-x-2">
              <img src={img1} className="inline-block p-2 bg-green-100 rounded-full h-9 w-9" />
              <span>100% health guarantee for pets</span>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              <img src={img2} className="inline-block p-2 bg-green-100 rounded-full h-9 w-9" />
              <span>100% guarantee of pet identification</span>
            </p>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetDetails;
