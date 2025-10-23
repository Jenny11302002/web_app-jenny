import React from "react";

export default function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 text-center border hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-blue-700">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
