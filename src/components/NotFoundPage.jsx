import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-pink-100 text-center px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate("/ColorFit")}
        className="px-6 py-3 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition"
      >
        Go Back
      </button>
    </div>
  );
}
