import React, { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const JoinusForm = () => {
  const [isEmpanelled, setIsEmpanelled] = useState(false);
  const [formData, setFormData] = useState({
    empanelledBoards: "",
    combinedCapacity: "",
    largestProjectCapacity: "",
    productBrands: "",
    geographicalRegions: "",
    totalEmployees: "",
    totalCrews: "",
    referenceSiteDetails: "",
  });

  const [errors, setErrors] = useState({});

  const handleToggle = () => {
    setIsEmpanelled(!isEmpanelled);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.empanelledBoards) {
      newErrors.empanelledBoards = "This field is required.";
    }
    if (!formData.combinedCapacity) {
      newErrors.combinedCapacity = "This field is required.";
    }
    if (!formData.largestProjectCapacity) {
      newErrors.largestProjectCapacity = "This field is required.";
    }
    if (!formData.productBrands) {
      newErrors.productBrands = "This field is required.";
    }
    if (!formData.geographicalRegions) {
      newErrors.geographicalRegions = "This field is required.";
    }
    if (!formData.totalEmployees) {
      newErrors.totalEmployees = "This field is required.";
    }
    if (!formData.totalCrews) {
      newErrors.totalCrews = "This field is required.";
    }
    if (!formData.referenceSiteDetails) {
      newErrors.referenceSiteDetails = "This field is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission or navigation
      window.location.href = "/JoinUsUploads";
    }
  };

  return (
    <div>
      {/*---bg-image----*/}
      <div className="w-full h-full">
        <div className="aboutbg flex items-center">
          <h2 className="text-4xl text-white font-bold rounded-md bg-[rgba(13,13,13,0.5)] p-4 w-auto">
            Join Us
          </h2>
        </div>
      </div>
      {/*---bg-image close---*/}
      {/*---form---*/}
      <div className="bg-[#e3d5d5] flex justify-center py-[4%] items-center max-[1000px]:px-[2%]">
        <div className="px-[3%] bg-white shadow-lg max-w-3xl h-full mx-auto py-[2%]">
          <Link to="/JoinUs">
            <button className="py-2 px-4 flex gap-2 text-[#0BB68D] text-[16px] font-[500]">
              <FiArrowLeftCircle className="mt-1" />
              Back
            </button>
          </Link>
          <h2 className="ad text-[24px] font-[600] text-[#004A9C] text-center">
            Partner With CUSP
          </h2>
          <p className="text-[#121416] font-[400] text-[16px] text-center py-4">
            CUSP has a large user base, providing you a wider audience.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-1">
              <span className="text-[14px] font-semibold text-[#004A9C] mr-7">
                Empanelled with Electricity Board
                <span className="text-[#004A9C]">*</span>
              </span>
              <div
                onClick={handleToggle}
                className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                  isEmpanelled ? "bg-[#0BB68D]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full p-0.5 shadow-md transform ${
                    isEmpanelled ? "translate-x-6" : ""
                  } transition-transform duration-300`}
                />
              </div>
              <span
                className={`text-[14px] font-semibold ${
                  isEmpanelled ? "text-[#0BB68D]" : "text-gray-400"
                }`}
              >
                {isEmpanelled ? "Yes" : "No"}
              </span>
            </div>
            <div>
              <label
                htmlFor="empanelledBoards"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Name Of Electricity Boards Empanelled With
                <span className="text-[#004A9C]">*</span>
              </label>
              <div className="relative">
                <select
                  id="empanelledBoards"
                  value={formData.empanelledBoards}
                  onChange={handleChange}
                  className="ad p-3 text-[16px] cursor-pointer block w-full placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                  style={{ color: "#757575" }}
                >
                  <option value="">
                    Empanelled boards (multi-select drop-down)
                  </option>
                  <option value="state1">ProprietorShip</option>
                  <option value="state2">Unregistered PartnerShip</option>
                  <option value="state3">LLP</option>
                  <option value="state4">Incorporated Entity</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <MdOutlineKeyboardArrowDown
                    size={24}
                    className="text-[#757575]"
                  />
                </div>
                {errors.empanelledBoards && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.empanelledBoards}
                  </p>
                )}
              </div>
            </div>

            {/* Dropdown Fields in Flex */}
            <div className="flex gap-2 max-[600px]:space-y-2 max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="combinedCapacity"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Combined Capacity Of total installations done till date
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="combinedCapacity"
                  type="number"
                  value={formData.combinedCapacity}
                  onChange={handleChange}
                  placeholder="Enter Combined Capacity  KW"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {errors.combinedCapacity && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.combinedCapacity}
                  </p>
                )}
              </div>

              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="largestProjectCapacity"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Installation capacity of the largest project worked on
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="largestProjectCapacity"
                  type="number"
                  value={formData.largestProjectCapacity}
                  onChange={handleChange}
                  placeholder="Enter Installation Capacity  KW"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {errors.largestProjectCapacity && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.largestProjectCapacity}
                  </p>
                )}
              </div>
            </div>

            {/* List of products */}
            <div>
              <label
                htmlFor="productBrands"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                List of product brands <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="productBrands"
                type="text"
                value={formData.productBrands}
                onChange={handleChange}
                placeholder="Brand1,Brand2,Brand3"
                className="ad mt-1 p-3 text-[16px] block w-full placeholder-[#757575]  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                style={{ color: "#757575" }}
              />
              {errors.productBrands && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.productBrands}
                </p>
              )}
            </div>

            {/* Geographical regions */}
            <div>
              <label
                htmlFor="geographicalRegions"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Geographical regions covered{" "}
                <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="geographicalRegions"
                type="text"
                value={formData.geographicalRegions}
                onChange={handleChange}
                placeholder="region1,region2,region3"
                className="ad mt-1 p-3 text-[16px] block w-full placeholder-[#757575]  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                style={{ color: "#757575" }}
              />
              {errors.geographicalRegions && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.geographicalRegions}
                </p>
              )}
            </div>

            {/* Employees and Crews */}
            <div className="flex gap-2 max-[600px]:space-y-2 max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="totalEmployees"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Total Employees <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="totalEmployees"
                  type="number"
                  value={formData.totalEmployees}
                  onChange={handleChange}
                  placeholder="Total Employees"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {errors.totalEmployees && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.totalEmployees}
                  </p>
                )}
              </div>

              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="totalCrews"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Total Installation Crews{" "}
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="totalCrews"
                  type="number"
                  value={formData.totalCrews}
                  onChange={handleChange}
                  placeholder="Enter Total Crews"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {errors.totalCrews && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.totalCrews}
                  </p>
                )}
              </div>
            </div>

            {/* Reference site details */}
            <div>
              <label
                htmlFor="referenceSiteDetails"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Reference site details <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="referenceSiteDetails"
                type="text"
                value={formData.referenceSiteDetails}
                onChange={handleChange}
                placeholder="Enter site details"
                className="ad mt-1 p-3 text-[16px] block w-full placeholder-[#757575]  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                style={{ color: "#757575" }}
              />
              {errors.referenceSiteDetails && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.referenceSiteDetails}
                </p>
              )}
            </div>

            {/* submit Button */}
            <div className="flex gap-5">
              <div className="w-1/2 max-[600px]:w-full">
                <Link to="/JoinUs">
                  <button className="px-4 py-3 border border-[#0BB68D] text-[#0BB68D] w-full rounded-md shadow-sm  focus:outline-none ">
                    Previous
                  </button>
                </Link>
              </div>
              <div className="w-1/2 max-[600px]:w-full">
                <button className="px-4 py-3 bg-[#0BB68D] text-white w-full rounded-md shadow-sm">
                  Next
                </button>
              </div>
            </div>
          </form>
          {/*---form---*/}
        </div>
      </div>
    </div>
  );
};

export default JoinusForm;
