import React from "react";
import { FaRegUser } from "react-icons/fa";
import ContactDetails from "../Components/ContactDetails";
const YourName = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="">
        <h2 className="text-[#004A9C] ad font-[600] text-[16px] text-center pb-6">
          Your Name
        </h2>
        <div className="flex items-center w-full border quote  rounded-md bg-[#FFFDF9]">
          <div className="border-r border-r-[#8A6112] p-2">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className=" px-4 py-5 text-[16px] font-[400]  rounded-md  shadow-sm  placeholder-[#8A6112] outline-none focus:outline-none"
            placeholder="Please Enter your name"
            required
          />
        </div>
      </div>
      {/*---contact details---*/}
      <div className="mt-5">
        <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-4">
          Contact Details
        </h2>
        <div className="flex gap-5 max-[1000px]:flex-col w-full">
          <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote ">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Mobile number"
              className="w-full px-4 py-5 text-[16px] font-[400]  rounded-md  shadow-lg placeholder-[#8A6112] outline-none focus:outline-none"
            />
          </div>
          <div className="flex items-center border border-[#CDC4B1] w-full rounded-md bg-[#FFFDF9] quote ">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full px-4 py-5 text-[16px] font-[400]  rounded-md  shadow-sm  placeholder-[#8A6112] outline-none focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourName;
