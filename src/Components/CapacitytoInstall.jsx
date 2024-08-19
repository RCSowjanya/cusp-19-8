import React from "react";
import { FaRegUser } from "react-icons/fa";
const CapacitytoInstall = ({ formData, handleChange }) => {
  return (
    <div>
      <div>
        <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center pb-6">
          Capacity to Install
        </h2>
        <div className="flex items-center justify-center w-full border quote rounded-md bg-[#FFFDF9]">
          <div className="border-r border-r-[#8A6112] p-2">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="Enter Values in Kw"
            className="px-4 py-5 text-[16px] font-[400] w-[90%] rounded-md  shadow-sm  placeholder-[#8A6112] outline-none focus:outline-none"
          />
        </div>
      </div>
      {/*----auto location----*/}
      <div>
        <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center pb-6 mt-6">
          Location Details
        </h2>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Auto Location"
          className="w-full px-4 py-5 rounded-full   shadow-lg placeholder-[#8A6112] focus:outline-none focus:ring-0 border-none"
        />
      </div>
    </div>
  );
};

export default CapacitytoInstall;
