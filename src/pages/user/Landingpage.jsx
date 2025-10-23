import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/PrimaryButton";
import Degolf from "../../assets/images (9).jpeg";
import FordRangerRaptor from "../../assets/car.webp";
import Carwale from "../../assets/virtus-exterior-right-front-three-quarter-10.avif";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleExplore = () => navigate("/listing");
  const handleOrder = () => navigate("/order");

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[85vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617814071593-288a97c8d490?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Discover the Power of <span className="text-blue-400">Volkswagen</span>
          </h1>
          <p className="text-gray-200 text-lg mb-10">
            Experience precision engineering, cutting-edge innovation, and timeless design.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <PrimaryButton label="Explore Cars" onClick={handleExplore} />
            <PrimaryButton label="Order Now" onClick={handleOrder} type="secondary" />
          </div>
        </div>
      </section>

      {/* Car Showcase Section */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Featured Models
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[ 
            { img: Degolf, name: "Volkswagen Golf", price: "$55,000" },
            { img: FordRangerRaptor, name: "Volkswagen Sedan", price: "$45,000" },
            { img: Carwale, name: "Volkswagen Virtus", price: "$50,000" }
          ].map((car, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{car.name}</h3>
                <p className="text-gray-500 mb-4">{`Starting at ${car.price}`}</p>
                <button
                  onClick={handleOrder}
                  className="mt-2 px-6 py-2 bg-blue-900 text-white rounded-full text-sm font-medium hover:bg-blue-800 transition-all"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h3 className="text-3xl font-semibold mb-4">Ready to Experience Volkswagen?</h3>
        <p className="mb-8 text-gray-200">
          Take the next step towards your perfect drive — schedule a test or place your order today.
        </p>
        <PrimaryButton label="Get Started" onClick={handleOrder} />
      </section>
    </div>
  );
};

export default LandingPage;
