import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const SwiggyWhatYouGet = () => {
  return (
    <div className="bg-yellow-50 text-gray-800 py-10 px-6 md:px-1 font-poppins">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* ✅ Header Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-orange-600 mb-2">What you'll get with Swiggy onboarding</h2>
        </div>

        {/* ✅ Detailed List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Full Swiggy Registration — PAN, GST, FSSAI setup assistance
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Menu Upload with categories, pricing, and dish images
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Restaurant Logo, Banner, QR Code, and Menu Card Design
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Payment Integration (Cashfree, Razorpay, UPI setup)
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Delivery Activation — Radius, Partner enablement & dashboard setup
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Listing Optimization — SEO, location tags, photo gallery
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              WhatsApp Support for document collection & live chat
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Expert guidance to get faster Swiggy approval
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SwiggyWhatYouGet;
