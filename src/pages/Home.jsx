import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section - Gradient Modern UI */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
            Secure Digital Certificate <br /> Issuance & Verification
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            A secure and scalable web platform designed to eliminate fake 
            certificates by enabling instant authentication through 
            unique certificate IDs and QR code validation.
          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300">
              Explore Project
            </button>

            <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-indigo-700 transition duration-300">
              View Modules
            </button>
          </div>
        </div>
      </section>

      {/* Project Modules - Card Hover UI */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            System Modules
          </h2>
          <p className="text-gray-500 mt-4">
            Core components powering the digital certification system
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <div className="text-indigo-600 text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-semibold mb-3">Admin Panel</h3>
            <p className="text-gray-600">
              Manage institutions, approve certificate requests, 
              track issued certificates, and control the entire system securely.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <div className="text-purple-600 text-4xl mb-4">🏫</div>
            <h3 className="text-xl font-semibold mb-3">Institution Portal</h3>
            <p className="text-gray-600">
              Upload student data, generate digital certificates, 
              assign unique IDs, and integrate QR code authentication.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <div className="text-pink-600 text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-3">Verification System</h3>
            <p className="text-gray-600">
              Employers and third parties can instantly verify certificate 
              authenticity using ID lookup or QR scanning.
            </p>
          </div>

        </div>
      </section>

      {/* Technology Stack - Dark Modern UI */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Technology Stack
          </h2>
          <p className="text-gray-400 mt-4">
            Modern technologies used in this project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              Frontend
            </h3>
            <p className="text-gray-300">
              Built using React.js and Tailwind CSS to provide a fully 
              responsive and interactive user experience.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">
              Backend
            </h3>
            <p className="text-gray-300">
              Developed with Django REST Framework to manage APIs, 
              authentication, and secure certificate processing.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-pink-500 transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-pink-400">
              Database
            </h3>
            <p className="text-gray-300">
              PostgreSQL/MySQL used for secure storage of certificates, 
              user information, and verification history logs.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
