import React from "react";
import { FaArrowRight } from "react-icons/fa6";


export const Insights = () => {
  return (
    <div className="bg-black p-4 rounded-lg mt-4">
      <h1 className="text-white text-[20px] font-bold">Insights</h1>
      <div className="flex lg:flex-col justify-between gap-4 overflow-x-auto">
          <div>
            <h2 className="text-white font-semibold mt-2">Founders</h2>
            <div className="flex gap-2">
              <h2 className="text-4xl font-bold text-white">13.49K</h2>
              <p className="text-green-400 text-sm">
                +000% <br /> <span className="text-gray-400">(000)</span>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-white font-semibold mt-2">Investors</h2>
            <div className="flex gap-2">
              <h2 className="text-4xl font-bold text-white">6.09K</h2>
              <p className="text-green-400 text-sm">
                +000% <br /> <span className="text-gray-400">(000)</span>
              </p>
            </div>
          </div>
      </div>
      <div className="flex justify-end items-center gap-2 border border-t-gray-700 my-2">
        <p className="text-white my-4 text-[10px]">View Detailed Insights</p>
        <FaArrowRight className="text-white text-[10px]" />
      </div>
    </div>
  );
};

export default Insights;
