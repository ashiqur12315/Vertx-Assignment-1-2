import React from "react";
import Flag from "react-world-flags"; // Import Flag component
import { FaArrowRight } from "react-icons/fa6";

export const Demographics = () => {
  return (
    <>
      <div className="md:flex gap-3 mt-4">
        <div className="md:w-[70%]">
          <img
            src="/public/demo.PNG"
            alt="Demographics"
            className="rounded-lg"
          />
        </div>

        <div className="space-y-4 md:w-[30%] mt-5">
          <div className="flex gap-4 items-center justify-between">
            <Flag code="IN" className="w-10 h-10" />
            <div className="w-full">
              <div className="flex justify-between w-full">
                <h1 className="text-[1rem] text-white font-semibold">India</h1>
                <p className="text-white text-sm mt-1">40%</p>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div
                  className="bg-blue-600 h-full rounded-full"
                  style={{ width: "40%" }}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center justify-between">
            <Flag code="US" className="w-10 h-10" />
            <div className="w-full">
              <div className="flex justify-between w-full">
                <h1 className="text-[1rem] text-white font-semibold">USA</h1>
                <p className="text-white text-sm mt-1">25%</p>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div
                  className="bg-yellow-800 h-full rounded-full"
                  style={{ width: "25%" }}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <Flag code="CA" className="w-10 h-10" />
            <div className="w-full">
              <div className="flex justify-between w-full">
                <h1 className="text-[1rem] text-white font-semibold">CANADA</h1>
                <p className="text-white text-sm mt-1">25%</p>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div
                  className="bg-yellow-500 h-full rounded-full"
                  style={{ width: "10%" }}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <Flag code="AE" className="w-10 h-10" />
            <div className="w-full">
              <div className="flex justify-between w-full">
                <h1 className="text-[1rem] text-white font-semibold">UAE</h1>
                <p className="text-white text-sm mt-1">25%</p>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div
                  className="bg-green-500 h-full rounded-full"
                  style={{ width: "7%" }} // Adjusted loading bar for India
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 border border-t-gray-700 my-2">
        <p className="text-white my-4 text-[10px]">View Detailed Insights</p>
        <FaArrowRight className="text-white text-[10px]" />
      </div>
    </>
  );
};

export default Demographics;
