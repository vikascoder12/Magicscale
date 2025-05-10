import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import {
  Briefcase,
  UtensilsCrossed,
  FileText,
  ShieldCheck,
} from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Launch",
      price: 7000,
      features: [
        "Limited Account Handling",
        "Basic Swiggy & Zomato Setup",
        "Optional GST Registration",
        "Optional FSSAI Registration",
        "Up to 5 team members",
        "Email Support",
        "Standard Reporting",
        "Limited Integrations",
      ],
    },
    {
      name: "Growth Pro",
      price: 10000,
      features: [
        "Dedicated Account Handling",
        "Full Swiggy & Zomato Setup & Optimization",
        "GST Registration Included",
        "FSSAI Registration Included",
        "Up to 25 team members",
        "Priority Email & Chat Support",
        "Advanced Reporting & Analytics",
        "Enhanced Integrations",
      ],
      highlighted: true,
      servicesIncluded: [
        {
          title: "Account Handling",
          icon: <Briefcase className="h-5 w-5 text-indigo-500 mr-2" />,
        },
        {
          title: "Swiggy & Zomato Setup",
          icon: <UtensilsCrossed className="h-5 w-5 text-orange-500 mr-2" />,
        },
        {
          title: "GST Assistance",
          icon: <FileText className="h-5 w-5 text-emerald-500 mr-2" />,
        },
        {
          title: "FSSAI Assistance",
          icon: <ShieldCheck className="h-5 w-5 text-blue-500 mr-2" />,
        },
      ],
    },
    {
      name: "Enterprise Scale",
      price: 12000,
      features: [
        "Comprehensive Account Handling & Reporting",
        "Advanced Swiggy & Zomato Management & Growth Strategies",
        "Complete GST Management (Registration & Filing)",
        "Priority FSSAI Compliance & Renewals",
        "Unlimited team members",
        "24/7 Premium Support & Dedicated Manager",
        "Customizable Reporting & BI Tools",
        "Unlimited Integrations & API Access",
      ],
    },
  ];

  // Ensure all plans have the same number of features
  const maxFeatures = Math.max(...plans.map((plan) => plan.features.length));

  const updatedPlans = plans.map((plan) => ({
    ...plan,
    features: [
      ...plan.features,
      ...Array(maxFeatures - plan.features.length).fill("unavailable"),
    ],
  }));

  return (
    <div id="services" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-indigo-700 sm:text-4xl">
            Scale Your F&B Business with Our Expert Plans
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Choose a plan tailored to your growth and operational needs.
          </p>
          <p className="mt-1 text-sm text-gray-500">
            All prices are approximate and exclude applicable taxes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updatedPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg shadow-md overflow-hidden ${
                plan.highlighted
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-800 hover:shadow-xl transition-shadow duration-300"
              }`}
            >
              <div className="px-6 py-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-left mb-4">
                    {plan.name}
                  </h3>
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center">
                      <span className="text-2xl font-bold">
                        ₹{plan.price.toLocaleString("en-IN")}
                      </span>
                      <span className="ml-1 text-sm text-gray-500 dark:text-gray-300">
                        /month
                      </span>
                    </div>
                  </div>

                  {plan.highlighted && plan.servicesIncluded && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-left">
                        Core Services Included:
                      </h4>
                      <ul className="list-none space-y-2">
                        {plan.servicesIncluded.map((service) => (
                          <li key={service.title} className="flex items-start">
                            {service.icon}
                            <span>{service.title}</span>
                          </li>
                        ))}
                      </ul>
                      <hr className="my-4 border-gray-300 dark:border-gray-700" />
                    </div>
                  )}

                  <ul className="list-none space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        {feature === "unavailable" ? (
                          <FaTimes className={`w-5 h-5 mr-2 text-gray-400`} />
                        ) : (
                          <FaCheck
                            className={`w-5 h-5 mr-2 ${
                              plan.highlighted
                                ? "text-indigo-200"
                                : "text-indigo-500"
                            }`}
                          />
                        )}
                        <span>
                          {feature === "unavailable"
                            ? "Not Available"
                            : feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 text-center">
                  <a href="https://wa.me/919311330885" target="_blank">
                    {" "}
                    <button
                      className={`w-full py-3 rounded-md font-semibold ${
                        plan.highlighted
                          ? "bg-white text-indigo-600 hover:bg-indigo-100"
                          : "bg-indigo-500 text-white hover:bg-indigo-700"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                    >
                      Get Started
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Need a custom plan?{" "}
            <a
              href="https://wa.me/919311330885"
              target="_blank"
              className="font-semibold text-indigo-600 hover:underline"
            >
              Contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
