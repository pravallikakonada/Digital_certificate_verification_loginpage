import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Project Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            CertiVerify
          </h2>
          <p className="text-sm leading-6">
            A secure Digital Certificate Issuance & Verification System 
            designed to provide trusted and tamper-proof certification 
            for institutions and users.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">About</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400">Services</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-400">Login</Link>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Features
          </h3>
          <ul className="space-y-2 text-sm">
            <li>✔ Secure Certificate Issuance</li>
            <li>✔ Instant Verification</li>
            <li>✔ QR Code Validation</li>
            <li>✔ Role-Based Access</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <p className="text-sm">Email: support@certiverify.com</p>
          <p className="text-sm mt-2">Phone: +91 9876543210</p>
          <p className="text-sm mt-2">Location: India</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} CertiVerify. All rights reserved.
        <br />
        Developed by Pravallika
      </div>
    </footer>
  );
};

export default Footer;
