import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />

      <section className="bg-gray-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Digital Certificate Issuance & Verification System
        </h1>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          A secure and reliable platform to issue, manage, and verify digital 
          certificates online. Built using React and Django to ensure 
          transparency, security, and easy access for institutions and users.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
            Issue Certificate
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-800">
            Verify Certificate
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Key Features</h2>

        <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Secure Certificate Issuance
            </h3>
            <p className="text-gray-600">
              Institutions can generate and distribute digital certificates 
              securely with unique identification codes.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Instant Verification
            </h3>
            <p className="text-gray-600">
              Employers and organizations can verify certificate authenticity 
              instantly using certificate ID or QR code.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              User-Friendly Dashboard
            </h3>
            <p className="text-gray-600">
              Admin and users get an easy-to-use dashboard to manage and 
              track certificates efficiently.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
