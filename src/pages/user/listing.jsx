import Navbar from "../../components/Navbar";
import FordMustangGT from "../../assets/1 ford.avif";
import FordRangerRaptor from "../../assets/2car.jpg";
import FordEverestTitanium from "../../assets/car3.jpg"; // removed extra space

const ListingPage = () => {
  const cars = [
    { 
      name: "Ford Mustang GT", 
      price: "$55,000", 
      image: FordMustangGT 
    },
    { 
      name: "Ford Ranger Raptor", 
      price: "$45,000", 
      image: FordRangerRaptor 
    },
    { 
      name: "Ford Everest Titanium", 
      price: "$50,000", 
      image: FordEverestTitanium 
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-10">
        <h2 className="text-center text-4xl font-bold text-blue-900 mb-8">
          Ford Car Listings
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
