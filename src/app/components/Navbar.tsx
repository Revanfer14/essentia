import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="border-b-2 border-gray-400 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-blue-800 mr-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6667 8L16 2L5.33333 8V24L16 30L26.6667 24V8Z"
                stroke="#0A4B9F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-blue-800">Essentia</h1>
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="border border-blue-700 text-blue-700 hover:bg-blue-50 font-medium py-2 px-6 rounded"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
