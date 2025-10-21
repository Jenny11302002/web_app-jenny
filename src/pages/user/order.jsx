import Navbar from "../../components/Navbar";

const OrderPage = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Order Your Ford Today</h2>
        <p className="text-gray-600 mb-8">Choose your model and our team will contact you for the next steps.</p>
        <form className="max-w-md mx-auto bg-white shadow-md p-6 rounded-2xl">
          <input type="text" placeholder="Full Name" className="w-full mb-4 p-2 border rounded-lg" />
          <input type="email" placeholder="Email Address" className="w-full mb-4 p-2 border rounded-lg" />
          <select className="w-full mb-4 p-2 border rounded-lg">
            <option>Select Ford Model</option>
            <option>Mustang GT</option>
            <option>Ranger Raptor</option>
            <option>Everest Titanium</option>
          </select>
          <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
