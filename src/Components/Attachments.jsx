import React from "react";
import { FaUpload } from "react-icons/fa";
const Attachments = ({ formData, changeHandle }) => {
  const renderFileInfo = (file, maxSizeMB, allowedTypes) => {
    if (!file) return null;

    const fileSizeMB = file.size / 1024 / 1024;
    const fileTypeValid = allowedTypes.includes(file.type);

    if (!fileTypeValid) {
      return (
        <p className="mt-4 text-red-600">
          Invalid file type. Please upload a {allowedTypes.join(", ")} file.
        </p>
      );
    }

    if (fileSizeMB > maxSizeMB) {
      return (
        <p className="mt-4 text-red-600">
          File size exceeds {maxSizeMB}MB. Please upload a smaller file.
        </p>
      );
    }

    return <p className="mt-4 text-gray-700">{file.name}</p>;
  };
  return (
    <div>
      <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center pb-6">
        Attachments Section
      </h2>
      <div className="flex items-center justify-center w-full gap-4 max-[1000px]:flex-col">
        <div className="flex flex-col justify-center">
          <label
            htmlFor="video-upload"
            className="p-5 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer text-[#D3900D] shadow-md border-dashed"
          >
            <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
            <span className="text-center">Video Upload</span>
            <p className="text-gray-400 text-[12px] text-center">
              File size no more than 200MB
            </p>
          </label>
          <input
            id="video-upload"
            type="file"
            className="hidden"
            onChange={(e) => changeHandle(e, "video")}
          />
          {renderFileInfo(formData.video, 200, ["video/mp4", "video/avi"])}
        </div>

        <div className="flex flex-col justify-center">
          <label
            htmlFor="image-upload"
            className="p-5 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer text-[#D3900D] shadow-md border-dashed"
          >
            <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
            <span className="text-center">Image Upload</span>
            <p className="text-gray-400 text-[12px] text-center">
              JPG, PNG file Size no more than 10MB
            </p>
          </label>
          <input
            id="image-upload"
            type="file"
            className="hidden"
            onChange={(e) => changeHandle(e, "image")}
          />
          {renderFileInfo(formData.image, 10, ["image/jpeg", "image/png"])}
        </div>

        <div className="flex flex-col justify-center">
          <label
            htmlFor="electricityBill-upload"
            className="p-5 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer text-[#D3900D] shadow-md border-dashed"
          >
            <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
            <span className="text-center">Electricity Bill</span>
            <p className="text-gray-400 text-[12px] text-center">
              JPG, PNG file Size no more than 10MB
            </p>
          </label>
          <input
            id="electricityBill-upload"
            type="file"
            className="hidden"
            onChange={(e) => changeHandle(e, "electricityBill")}
          />
          {renderFileInfo(formData.electricityBill, 10, [
            "image/jpeg",
            "image/png",
          ])}
        </div>
      </div>
    </div>
  );
};

export default Attachments;
