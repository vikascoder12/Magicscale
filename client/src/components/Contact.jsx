import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#E9EFFD] to-white pt-[140px] pb-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-indigo-300 opacity-20 blur-[120px] rounded-full z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-300 opacity-20 blur-[120px] rounded-full z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have a question or need help getting started? Drop us a line, and
            our team will get back to you soon.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-indigo-600" />
              <span className="text-gray-800">+91 9311330885</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-indigo-600" />
              <span className="text-gray-800">support@magicscale.in</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-600" />
              <span className="text-gray-800">
                Near Airforce camp , rajokari , new delhi - 110038
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 text-start rounded-2xl shadow-lg border border-indigo-100 backdrop-blur-md"
        >
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell us about your needs..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
