import React, { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { GrCloudUpload } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const JoinUsUploads = () => {
  const [gstCertificate, setGstCertificate] = useState(null);
  const [pan, setPan] = useState(null);
  const [tan, setTan] = useState(null);
  const [empanelmentCertificate, setEmpanelmentCertificate] = useState(null);
  const [referenceSitePictures, setReferenceSitePictures] = useState([]);

  const handleFileUpload = (event, setter) => {
    const file = event.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      // Check if file size is <= 2MB
      setter(file);
    } else {
      alert("Max file size should be 2MB.");
    }
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFilesUpload = (event, setter) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file.size <= 2 * 1024 * 1024); // 2MB limit
    setter((prevFiles) => [...prevFiles, ...validFiles]); // Append new files to existing ones
  };

  const renderUploadedFile = (file) => (
    <div className="mt-4 text-center">
      <p className="text-[14px] font-semibold text-[#004A9C]">Uploaded File:</p>
      <p className="text-[12px] text-[#757575]">{file.name}</p>
    </div>
  );

  const renderUploadedFiles = (files) => (
    <div className="mt-4 text-center">
      <p className="text-[10px] font-semibold text-[#004A9C]">
        Uploaded Files:
      </p>
      <ul className="list-disc list-inside text-[9px] text-[#757575]">
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );

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
          <form className="space-y-6">
            {/*---GST Certificate----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="gst-certificate"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    GST Certificate
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="gst-certificate"
                  accept=".png, .jpeg, .jpg, .pdf"
                  onChange={(e) => handleFileUpload(e, setGstCertificate)}
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {gstCertificate && renderUploadedFile(gstCertificate)}
              </div>
            </div>
            {/*---PAN----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="pan"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    PAN
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="pan"
                  accept=".png, .jpeg, .jpg, .pdf"
                  onChange={(e) => handleFileUpload(e, setPan)}
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {pan && renderUploadedFile(pan)}
              </div>
            </div>
            {/*---TAN-----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="tan"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    TAN
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="tan"
                  accept=".png, .jpeg, .jpg, .pdf"
                  onChange={(e) => handleFileUpload(e, setTan)}
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {tan && renderUploadedFile(tan)}
              </div>
            </div>
            {/*---Empanelment Certificate----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="certificate"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    Empanelment Certificate
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="certificate"
                  accept=".png, .jpeg, .jpg, .pdf"
                  onChange={(e) =>
                    handleFileUpload(e, setEmpanelmentCertificate)
                  }
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {empanelmentCertificate &&
                  renderUploadedFile(empanelmentCertificate)}
              </div>
            </div>
            {/*---Reference Site Pictures----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="reference-sites"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    Reference Site Pictures
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="reference-sites"
                  accept=".png, .jpeg, .jpg, .pdf"
                  multiple
                  onChange={(e) =>
                    handleFilesUpload(e, setReferenceSitePictures)
                  }
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {referenceSitePictures.length > 0 &&
                  renderUploadedFiles(referenceSitePictures)}
              </div>
            </div>
            {/* Bottom: Upload Instructions */}
            <div className="text-[10px] text-[#757575] w-full">
              <p className="whitespace-nowrap">
                Please upload in PNG, JPEG, JPG, PDF formats only. Max file size
                should be 2MB
                <span className="text-[#004A9C]">*</span>.
              </p>
            </div>
          </form>
          {/*----check box----*/}
          <div className="flex items-center space-x-2 my-4 ">
            <div
              onClick={handleCheckboxChange}
              className={`flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-md cursor-pointer ${
                isChecked ? "bg-[#0BB68D]" : "bg-white"
              }`}
            >
              {isChecked && (
                <FaCheck
                  className={`text-white ${isChecked ? "block" : "hidden"}`}
                />
              )}
            </div>
            <label className="text-gray-400 text-[14px]">
              By checking this, you will accept our{" "}
              <span className="text-[#0BB68D]">Terms & Conditions</span> and{" "}
              <span className="text-[#0BB68D]">Privacy Policy</span>.
            </label>
          </div>
          {/*----buttons----*/}
          <div className="flex gap-5 py-5">
            <div className="w-1/2 max-[600px]:w-full">
              <Link to="/">
                <button className="px-4 py-3 border border-[#0BB68D] text-[#0BB68D] w-full rounded-md shadow-sm  focus:outline-none ">
                  Previous
                </button>
              </Link>
            </div>
            <div className="w-1/2 max-[600px]:w-full">
              <Link to="/">
                <button className="px-4 py-3 bg-[#0BB68D] text-white w-full rounded-md shadow-sm">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsUploads;
