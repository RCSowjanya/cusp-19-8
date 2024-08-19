import React from "react";
import { FaRegUser } from "react-icons/fa";
const PeakLoad = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="">
        <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4">
          Peak Load
        </h2>
        <div className="flex  gap-5 w-full max-[1000px]:flex-col ">
          <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote ">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="text"
              name="equipmentName"
              value={formData.equipmentName}
              onChange={handleChange}
              placeholder="Equipment Name"
              className="w-full px-4 py-5 font-[400] rounded-md text-[16px] shadow-lg placeholder-[#8A6112] outline-none"
            />
          </div>

          <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote ">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="Watt Capacity of"
              className="px-4 py-5 text-[16px] font-[400] w-full  rounded-md  shadow-sm  placeholder-[#8A6112] outline-none focus:outline-none"
            />
          </div>
        </div>
        <div className="flex  gap-5 w-full max-[1000px]:flex-col  mt-5">
          <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote ">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="operation"
              value={formData.operation}
              onChange={handleChange}
              placeholder="Hours of Operation/Day"
              className="px-4 py-5 text-[16px] font-[400] w-full  rounded-md  shadow-sm  placeholder-[#8A6112] outline-none focus:outline-none"
            />
          </div>

          <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote ">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="equipments"
              value={formData.equipments}
              onChange={handleChange}
              placeholder="No.of Equipment"
              className="px-4 py-5 text-[16px] font-[400]  rounded-md  shadow-sm  placeholder-[#8A6112] outline-none focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeakLoad;
