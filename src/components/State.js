import React from "react";
import phone from "../images/illustration-phones.svg";
import circle from "../images/bg-pattern-circles.svg";

const State = () => {
  return (
    <section className="state px-5  py-10 md:text-left text-center relative z-10 md:grid md:grid-cols-2  xl:px-52 ">
      <div className="">
        <div>
          <img src={circle} alt="circle" className="state-img circle" />
        </div>
        <div>
          <img src={phone} alt="phone" className="state-img" />
        </div>
      </div>
      <div className="pt-80 px-5 md:py-20">
        <h2 className="text-center text-3xl lg:text-3xl 2xl:text-4xl mb-5 md:text-left">
          State of the Art Infrastructure
        </h2>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity.This ensures your site will load
          instantly, no matter where reader are, keeping your site competitive.
        </p>
      </div>
    </section>
  );
};

export default State;
