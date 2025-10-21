const Card = ({ icon, title, description, onClick }) => (
  <div 
    onClick={onClick} 
    className="cursor-pointer bg-white shadow-md hover:shadow-xl transition-all duration-300 p-6 rounded-2xl text-center hover:-translate-y-1"
  >
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
