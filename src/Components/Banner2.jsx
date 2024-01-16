import React from "react";
import sateliteImg from "../assets/satelite2.jpg";
const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-1 relative z-50 ">
      <div className="container mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
            <p data-aos="fade-up" className="text-sky-800 uppercase">
              Our Mission
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-5xl uppercase"
            >
              Rapidcast
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              molestiae reprehenderit expedita corporis, non doloremque.
              Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos molestiae reprehenderit
              expedita corporis, non doloremque. Consequatur consectetur
              quisquam qui sunt.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-button"
            >
              Lean More
            </button>
          </div>
          <div className="" data-aos="zoom-in">
            <img
              src={sateliteImg}
              alt="banner"
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
