import { motion } from "framer-motion";
import { restaurantLogo } from "../assets";
import Title from "./Title";

export default function AboutPage() {
  return (
    <section id="about" className="relative pt-[60px] pb-28 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-[#EEF3FF] to-white overflow-hidden">
      {/* Decorative background */}
      {/* <Title preTitle={"About"} title={"Us"}/>
       */}

      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-purple-300 opacity-20 blur-[140px] rounded-full z-0" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-indigo-300 opacity-20 blur-[140px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Empowering India’s Foodpreneurs
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              At MagicScale, we simplify everything from cloud kitchen
              onboarding to legal registrations — so you can focus on cooking
              while we handle the chaos.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition">
              Let’s Get You Started
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="h-[400px] w-[600px]"
          >
            <img
              src={restaurantLogo}
              alt="MagicScale illustration"
              className="w-[600px] mt-[-100px] mx-auto"
            />
          </motion.div>
        </div>

        {/* Mission & Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/70 border border-purple-100 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700">
              We’re on a mission to help every foodpreneur in India launch
              faster, smarter, and more profitably. No jargon. No middlemen.
              Just real support from a team that understands your journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/70 border border-purple-100 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              Why Choose MagicScale
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Instant Swiggy/Zomato onboarding</li>
              <li>Expert help with FSSAI, GST, trademark</li>
              <li>Personalised account managers</li>
              <li>Real-time dashboard & updates</li>
            </ul>
          </motion.div>
        </div>

        {/* Impact / Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-tr from-[#f3f6fd] to-white border border-purple-100 rounded-2xl py-10 px-6 shadow-md"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 300+ Kitchens, 12+ Cities, 1 Magic Team
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            We’ve helped brands across India start from zero and scale to lakhs
            in revenue — with a strong backend to support every step.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
