import React from "react";
import { FaRegUser } from "react-icons/fa";

const CurrentSanction = ({ formData, handleChange }) => {
  return (
    <div className="w-full">
      {/*----current sanction load and consumption over last month----*/}
      <div className="flex gap-3 w-full items-start max-[1000px]:flex-col">
        <div className="w-full  max-[1000px]:mb-3">
          <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
            Current sanction Load
          </h2>
          <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="load"
              value={formData.load}
              onChange={handleChange}
              placeholder="Enter Load"
              className="w-full px-4 py-5 rounded-md shadow-lg placeholder-[#8A6112] focus:outline-none focus:ring-0 border-none"
            />
          </div>
        </div>
        {/*---current sanction load completed---*/}
        {/*---consumption over last month----*/}
        <div className="w-full">
          <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
            Consumption Over Last Month
          </h2>
          <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="consumption"
              value={formData.consumption}
              onChange={handleChange}
              placeholder="Enter Values in Units"
              className="w-full px-4 py-5 rounded-md shadow-lg placeholder-[#8A6112] focus:outline-none focus:ring-0 border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentSanction;
