import React from "react";
import back from "../images/bg-pattern-intro-desktop.svg";

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay px-5 flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-4xl text-white mb-5 md:text-5xl lx:text-6xl 2xl:text-7xl">A modern publishing platform</h1>
          <p className="text-white">Grow your audience and build your onlirn brand</p>
          <ul className="flex items-center">
            <li className="mx-1 my-5">
              <button className=" btn bg-white  rounded-full py-2 px-4">Start for free</button>
            </li>
            <li className="mx-1 my-5">
              <button className="border borser-white py-2  px-4 text-white rounded-full">Learn More</button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Showcase;
