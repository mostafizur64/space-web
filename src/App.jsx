import React, { useEffect } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Banner2 from "./Components/Banner2";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import background from "./assets/earth-bg.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          src={background}
          type="video"
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        ></video>
        <Navbar />
        <Hero />
      </div>
      {/* service section start  */}
      <Services />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
}

export default App;
