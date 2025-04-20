import React from "react";
import { ArrowRightCircle, Info } from "lucide-react";
import { motion } from "framer-motion";
import { cursorIcon, cursorIcon2, cursorIcon3 } from "../assets";
import Review from "./ReviewSlider";
import YoutubeVideo from "./YoutubeVideo";
import Title from "./Title";
import { Link } from "react-router-dom";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  },
});

const Hero = () => {
  return (
    <div
      // style={{
      //   backgroundImage:
      //     'url("https://i.pinimg.com/736x/c4/b1/c3/c4b1c336d03c77a1d7b95fa96c9f6fbf.jpg")',
      // }}
      className="h-auto"
    >
      <div className="relative bg-gradient-to-b from-[#E9EFFD] to-white pt-[140px] overflow-hidden flex items-center justify-center px-4">
        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          animate="visible"
          className="absolute top-3/4 left-0 pointer-events-none animate-float hidden md:block"
        >
          <svg width="220" height="111" viewBox="0 0 220 111" fill="#E0F2FE">
            <path d="M122.406 12c0-6.627 5.373-12 12-12H326v55.5H122.406V12zM61.203 55.5h61.203V99c0 6.627-5.373 12-12 12H73.203c-6.627 0-12-5.373-12-12V55.5zM0 12C0 5.373 5.373 0 12 0h37.203c6.627 0 12 5.373 12 12v43.5H12c-6.627 0-12-5.373-12-12V12z" />
          </svg>
        </motion.div>

        <motion.img
          src={cursorIcon}
          alt="Cursor 1"
          variants={fadeIn(1)}
          initial="hidden"
          animate="visible"
          className="absolute top-12 left-70 transform -translate-x-1/2 animate-slow-bounce hidden sm:block"
        />
        {/* <motion.img
          src={cursorIcon2}
          alt="Cursor 2"
          variants={fadeIn(0.8)}
          initial="hidden"
          animate="visible"
          className="absolute bottom-30 left-60 animate-slow-bounce hidden sm:block"
        /> */}
        <motion.img
          src={cursorIcon3}
          alt="Cursor 3"
          variants={fadeIn(0.6)}
          initial="hidden"
          animate="visible"
          className="absolute top-100 right-40 animate-slow-bounce hidden sm:block"
        />

        <section className="max-w-6xl w-full text-center z-10">
          <motion.button
            initial="hidden"
            animate="visible"
            variants={fadeIn(0)}
            className="bg-indigo-600 text-white rounded-full px-5 py-2 text-sm font-medium shadow hover:bg-indigo-700 transition"
          >
            Trusted by 500+ Restaurants & Startups
          </motion.button>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn(0.2)}
            className="mt-6 text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-gray-900"
          >
            Simplify Your{" "}
            <span className="relative inline-block text-indigo-600">
              Business Setup
              <img
                src="https://reactheme.com/products/wordpress/fixora/wp-content/uploads/2025/02/line-04.svg"
                alt="underline"
                className="absolute w-full left-0 bottom-0 translate-y-[10px] pointer-events-none"
              />
            </span>{" "}
            in Minutes
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn(0.6)}
            className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Get licenses, register GST, set up Swiggy/Zomato, and handle
            onboarding — all from one place.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn(1)}
            className="flex flex-row justify-center items-center gap-4 mt-10"
          >
            <Link to={'#video'} className="flex flex-nowrap items-center justify-center gap-2 bg-indigo-600 text-white px-2 py-3 rounded-md font-semibold shadow hover:bg-indigo-700 transition w-full sm:w-auto">
              <ArrowRightCircle className="w-5 h-5" />
              Get Started
            </Link>

            <button className="flex items-center justify-center gap-2 bg-white border-2 border-indigo-600 text-indigo-600 px-2 py-2.5 rounded-md font-semibold shadow hover:bg-indigo-700 hover:text-white transition w-full sm:w-auto">
              <Info className="w-5 h-5" />
              Our Services
            </button>
          </motion.div>
        </section>

        <motion.div
          variants={fadeIn(0.8)}
          initial="hidden"
          animate="visible"
          className="absolute top-30 right-0 rotate-180 pointer-events-none animate-float hidden md:block"
        >
          <svg width="220" height="111" viewBox="0 0 220 111" fill="#E0F2FE">
            <path d="M122.406 12c0-6.627 5.373-12 12-12H326v55.5H122.406V12zM61.203 55.5h61.203V99c0 6.627-5.373 12-12 12H73.203c-6.627 0-12-5.373-12-12V55.5zM0 12C0 5.373 5.373 0 12 0h37.203c6.627 0 12 5.373 12 12v43.5H12c-6.627 0-12-5.373-12-12V12z" />
          </svg>
        </motion.div>
      </div>

      <div className="md:flex justify-center px-[40px] md:px-[80px] items-center">
        <p className="font-semibold pt-10 px-5">
          More Than 100+ Restaurants Partner Features
        </p>
        <Review />
      </div>
    </div>
  );
};

export default Hero;
