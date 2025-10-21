import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/PrimaryButton";
import Card from "../../components/card";
import FordMustangGT from "../../assets/1 ford.avif";
import FordRangerRaptor from "../../assets/2car.jpg";
import FordEverestTitanium from "../../assets/car3.jpg"; // removed extra space

const LandingPage = () => {
  const handleExplore = () => alert("Redirecting to Ford Car Listing Page...");
  const handleOrder = () => alert("Redirecting to Ford Order Page...");

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4 text-blue-900">
          Discover the Power of Ford
        </h1>
        <p className="text-gray-600 mb-8">
          Built for performance, strength, and innovation.
        </p>
        <div className="space-x-4">
          <PrimaryButton label="Explore Ford Cars" onClick={handleExplore} />
          <PrimaryButton label="Order Your Ford" onClick={handleOrder} type="secondary" />
        </div>
      </section>

      {/* Ford Models Showcase Section */}
      <section className="grid md:grid-cols-3 gap-6 p-10 bg-white">
        <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all p-4">
          <img
            src={FordMustangGT}
            alt="Ford Mustang GT"
            className="w-full h-56 object-cover rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold text-center mb-2">Ford Mustang GT</h3>
          <p className="text-center text-gray-600">Starting at $55,000</p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all p-4">
          <img
            src={FordRangerRaptor}
            alt="Ford Ranger Raptor"
            className="w-full h-56 object-cover rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold text-center mb-2">Ford Ranger Raptor</h3>
          <p className="text-center text-gray-600">Starting at $45,000</p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all p-4">
          <img
            src={FordEverestTitanium}
            alt="Ford Everest Titanium"
            className="w-full h-56 object-cover rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold text-center mb-2">Ford Everest Titanium</h3>
          <p className="text-center text-gray-600">Starting at $50,000</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
