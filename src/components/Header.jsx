import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          
          {/* Colorful Logo Icon */}
          <div className="bg-white p-2 rounded-xl shadow-md">
            <svg
              className="w-8 h-8 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Certificate */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"
              />
              {/* Verification Check */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17l2 2 4-4"
              />
            </svg>
          </div>

          {/* Logo Text */}
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              DigiCertify
            </h1>
            <p className="text-xs text-gray-200 -mt-1">
              Secure Certificate System
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-white">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-yellow-300 transition">
            Services
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>

          {/* Login Button Highlight */}
          <Link
            to="/login"
            className="bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition duration-300 shadow-md"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 6L18 18M6 18L18 6"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-6 font-medium text-gray-700">
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-indigo-600">
              About
            </Link>
            <Link to="/services" className="hover:text-indigo-600">
              Services
            </Link>
            <Link to="/contact" className="hover:text-indigo-600">
              Contact
            </Link>
            <Link
              to="/login"
              className="bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-purple-600 transition"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
