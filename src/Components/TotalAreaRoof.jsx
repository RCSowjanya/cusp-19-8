import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";

const TotalAreaRoof = ({ formData, handleChange, handleFileChange }) => {
  return (
    <div>
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
        Total Roof Area (in Sft)
      </h2>
      <div className="flex gap-3 mb-3 max-[1000px]:flex-col">
        <div className="flex items-center border w-full rounded-md  border-[#CDC4B1] bg-[#FFFDF9] quote ">
          <div className="border-r border-r-[#8A6112]  p-2">
            <FaRegUser className="text-[#8A6112]  ml-3" />
          </div>
          <input
            type="number"
            name="length"
            value={formData.length}
            onChange={handleChange}
            placeholder="Enter Length"
            className="w-full px-4 py-5  rounded-md shadow-lg placeholder-[#8A6112]  focus:outline-none focus:ring-0 border-none"
          />
        </div>
        <div className="flex items-center border w-full rounded-md  border-[#CDC4B1] bg-[#FFFDF9] quote ">
          <div className="border-r border-r-[#8A6112]  p-2">
            <FaRegUser className="text-[#8A6112]  ml-3" />
          </div>
          <input
            type="number"
            name="breadth"
            value={formData.breadth}
            onChange={handleChange}
            placeholder="Enter Breadth"
            className="w-full px-4 py-5  rounded-md shadow-lg placeholder-[#8A6112]  focus:outline-none focus:ring-0 border-none"
          />
        </div>
        <div className="flex items-center border w-full rounded-md  border-[#CDC4B1] bg-[#FFFDF9] quote ">
          <div className="border-r border-r-[#8A6112]  p-2">
            <FaRegUser className="text-[#8A6112]  ml-3" />
          </div>
          <input
            type="number"
            name="sft"
            value={formData.sft}
            onChange={handleChange}
            placeholder="Enter Area"
            className="w-full px-4 py-5  rounded-md shadow-lg placeholder-[#8A6112]  focus:outline-none focus:ring-0 border-none"
          />
        </div>
      </div>
      {/*---Roof Layout---*/}
      <div>
        <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-4">
          Roof Layout
        </h2>
        <div className="flex flex-col items-center space-y-3">
          <label
            htmlFor="upload"
            className="cursor-pointer py-8 px-11 text-[#D3900D] rounded-md shadow-md border-dashed border-2 border-[#998B6F]"
          >
            <FaUpload className="mx-auto mb-2 text-[#8A6112] text-center" />
            <span>Upload File</span>
          </label>
          <input
            id="upload"
            type="file"
            className="hidden font-[400] placeholder-[#8A6112]"
            onChange={handleFileChange}
          />
          {formData.file && (
            <p className="mt-4 text-gray-700">{formData.file.name}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalAreaRoof;
