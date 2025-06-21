import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const FssaiWhatYouGet = () => {
  return (
    <div className="bg-yellow-50 text-gray-800 py-10 px-4 sm:px-6 md:px-1 font-poppins">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        {/* ✅ Header Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-green-700 mb-2">What you'll get with FSSAI License Assistance</h2>
        </div>

        {/* ✅ Detailed List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Complete assistance with FSSAI Basic, State, or Central license application
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Document preparation and verification (ID proof, address, declaration, etc.)
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Expert consultation to choose the correct license type for your business
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Application filing through official FSSAI portal
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Regular follow-up and tracking until license is approved or issued
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Email and WhatsApp updates at every stage
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Support for corrections, modifications, or renewal (if needed)
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Dedicated support until your license is delivered digitally
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FssaiWhatYouGet;
