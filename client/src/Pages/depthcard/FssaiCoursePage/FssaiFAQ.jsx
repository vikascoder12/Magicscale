import React from 'react';

const FssaiFAQ = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-lime-100 py-16 px-4 sm:px-6 md:px-20 font-poppins">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <details className="group bg-white shadow-md rounded-lg p-5 cursor-pointer">
            <summary className="text-lg font-medium text-gray-800 group-open:text-green-600">
              What documents are required for FSSAI License?
            </summary>
            <p className="text-sm text-gray-600 mt-2">
              You’ll need ID proof, address proof, passport-sized photo, business details, and (in some cases) a declaration form or rent agreement.
            </p>
          </details>

          <details className="group bg-white shadow-md rounded-lg p-5 cursor-pointer">
            <summary className="text-lg font-medium text-gray-800 group-open:text-green-600">
              How long does it take to get the license?
            </summary>
            <p className="text-sm text-gray-600 mt-2">
              Basic licenses are usually issued in 7 days. State and Central licenses may take 15–30 working days depending on your location and application completeness.
            </p>
          </details>

          <details className="group bg-white shadow-md rounded-lg p-5 cursor-pointer">
            <summary className="text-lg font-medium text-gray-800 group-open:text-green-600">
              What type of license do I need — Basic, State, or Central?
            </summary>
            <p className="text-sm text-gray-600 mt-2">
              This depends on your business size, turnover, and whether you're operating in one state or across India. We’ll guide you based on your exact situation.
            </p>
          </details>

          <details className="group bg-white shadow-md rounded-lg p-5 cursor-pointer">
            <summary className="text-lg font-medium text-gray-800 group-open:text-green-600">
              Is the license valid across India?
            </summary>
            <p className="text-sm text-gray-600 mt-2">
              Yes, once issued, your license is valid across India for your registered location. For expansion, you may require modification or a central license.
            </p>
          </details>

          <details className="group bg-white shadow-md rounded-lg p-5 cursor-pointer">
            <summary className="text-lg font-medium text-gray-800 group-open:text-green-600">
              Do you provide renewal and modification services?
            </summary>
            <p className="text-sm text-gray-600 mt-2">
              Yes, we handle renewals, updates, and modifications to your existing license including change of address or business scope.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FssaiFAQ;
