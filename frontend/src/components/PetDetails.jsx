import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { petCarousel } from "./../data";

import img1 from "./../assets/images/heart.png";
import img2 from "./../assets/images/catDog.png";
import Nav from "./Nav";
import Footer from "./Footer";

function PetDetails() {
  return (
    <>
      <Nav bgColorClass="bg-white" />
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200 mt-5 mb-16">
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
            <div className="mt-6 flex items-center bg-red-200 p-2 rounded-lg">
              <p className="flex items-center space-x-2 mr-7 ">
                <img
                  src={img1}
                  className="inline-block p-2 bg-green-100 rounded-full h-9 w-9"
                />
                <span className="text-sm">100% health guarantee for pets</span>
              </p>
              <p className="flex items-center space-x-2">
                <img
                  src={img2}
                  className="inline-block p-2 bg-green-100 rounded-full h-9 w-9"
                />
                <span className="text-sm">
                  100% guarantee of pet identification
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PetDetails;
