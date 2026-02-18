import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        
        {/* Project Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            DigiCert System
          </h2>
          <p className="text-sm leading-6">
            A secure digital platform for issuing and verifying certificates 
            with real-time authentication and QR-based validation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-indigo-400 transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-indigo-400 transition">
                Register
              </Link>
            </li>
            <li>
              <Link to="/verify" className="hover:text-indigo-400 transition">
                Verify Certificate
              </Link>
            </li>
          </ul>
        </div>

        {/* Modules */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Modules
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Admin Dashboard</li>
            <li>Institution Panel</li>
            <li>Certificate Generator</li>
            <li>Verification System</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <p className="text-sm">Email: support@digicert.com</p>
          <p className="text-sm mt-2">Phone: +91 98765 43210</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <span className="hover:text-indigo-400 cursor-pointer">🌐</span>
            <span className="hover:text-indigo-400 cursor-pointer">🔗</span>
            <span className="hover:text-indigo-400 cursor-pointer">📘</span>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-6 text-sm">
        © {new Date().getFullYear()} Digital Certification Issuance and Verification System. 
        All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
