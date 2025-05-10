import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import Video from "../components/Video";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Video />
      <Services />
      {/* <Testimonial /> */}
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
