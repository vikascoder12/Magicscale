import React from 'react';
import { useNavigate } from 'react-router-dom';
// import fssaiImg from '../../../assets/zomato3.png';
import fssaiImg from "../../../assets/fssai.png";
import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
import FssaiFAQ from './FssaiFAQ';
import FssaiWhatYouGet from './FssaiWhatYouGet';

const FssaiLicenseCourse = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-green-50 text-gray-900 min-h-screen py-10 px-4 sm:px-6 md:px-16 font-[Poppins]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
        {/* ✅ Left Section */}
        <div className="w-full md:w-[66%] space-y-6 md:pr-8">
          <p className="text-sm text-green-700">Legal Services {'>'} FSSAI License</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Get Your FSSAI License with Expert Guidance
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
          </p>

          {/* ✅ Highlight Section */}
          <div className="bg-green-100 text-green-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Expert Service
              </div>
              <p className="text-sm">
                Fast processing, consultation, and 100% document support.
                <span className="ml-2 underline cursor-pointer hover:text-green-700">See License Plans</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 text-sm">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-yellow-500">4.9</span> ★
                <span className="text-gray-600 hidden sm:inline">(190+ reviews)</span>
              </div>
              <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
                <span className="font-semibold">500+</span> licenses issued
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Powered by <span className="text-green-700 font-semibold">MagicScale Legal Team</span>
          </p>
          <p className="text-sm text-gray-500">Last updated 06/2025 • Hindi & English</p>

          {/* ✅ Features Section */}
          <div className="mt-10">
            <FssaiWhatYouGet />

            <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />,
                title: "Online Filing & Tracking",
                desc: "Get real-time updates and license status from our dashboard."
              },
              {
                icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
                title: "All Docs Managed",
                desc: "We handle your forms, photos, ID proofs, and declarations."
              },
              {
                icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
                title: "PAN India Service",
                desc: "Apply from anywhere — all states & cities covered."
              },
              {
                icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
                title: "Quick & Hassle-Free",
                desc: "End-to-end support for new, renew, and modification cases."
              }].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
                  {item.icon}
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <FssaiFAQ />
        </div>

        {/* ✅ Right: Sticky Checkout Bar */}
        <div className="w-full md:w-[34%]">
          <div className="md:sticky md:top-20 mt-10 md:mt-0">
            <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto md:mx-0">
              <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover" />
              <h2 className="text-3xl font-bold mb-1">₹999</h2>
              <p className="text-sm text-gray-600 mb-3">Complete FSSAI License Assistance</p>

              <button
                onClick={() => navigate('/checkout/fssai')}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Go to Cart
              </button>

              <button
                onClick={() => navigate('/checkout/fssai')}
                className="w-full border mt-2 border-green-600 text-green-700 py-2 rounded-lg hover:bg-green-50"
              >
                Buy Now
              </button>

              <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

              <ul className="text-sm mt-5 text-gray-700 space-y-2">
                <li>✔ Basic, State, or Central license</li>
                <li>✔ All form submissions handled</li>
                <li>✔ Phone and WhatsApp support</li>
                <li>✔ Fastest approval process</li>
              </ul>

              <div className="mt-6">
                <label className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="w-full border px-3 py-2 rounded text-sm mb-2"
                />
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FssaiLicenseCourse;
