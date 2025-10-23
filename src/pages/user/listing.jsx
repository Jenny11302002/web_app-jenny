import React from "react";
import Navbar from "../../components/Navbar";
import Degolf from "../../assets/images (9).jpeg";
import FordRangerRaptor from "../../assets/car.webp";
import Carwale from "../../assets/virtus-exterior-right-front-three-quarter-10.avif"; 

const ListingPage = () => {
  const cars = [
    { name: "Volkswagen Golf", price: "$55,000", image: Degolf },
    { name: "Volkswagen Sedan", price: "$45,000", image: FordRangerRaptor },
    { name: "Volkswagen Virtus", price: "$50,000", image: Carwale },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-10">
        <h2 className="text-center text-4xl font-bold text-blue-900 mb-8">
          Volkswagen Car Listings
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{car.name}</h3>
              <p className="text-gray-600 mb-4">{car.price}</p>
              <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
