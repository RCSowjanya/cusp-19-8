import React from "react";
import { FaUpload } from "react-icons/fa";

const AttachmentsSection = ({ formData, changeHandle }) => {
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
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
        Attachments Section
      </h2>
      <div className="grid max-[600px]:grid-cols-1 grid-cols-3 gap-4 justify-center">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <label
            htmlFor="roofLayout-upload"
            className="border border-[#8A6112] p-5 rounded-xl flex flex-col cursor-pointer text-[#D3900D] shadow-md border-dashed text-center"
          >
            <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
            <span>Upload Roof Layout</span>
            <p className="text-gray-400 text-[12px]">
              JPG, PNG file Size no more than 10MB
            </p>
          </label>
          <input
            id="roofLayout-upload"
            type="file"
            className="hidden"
            onChange={(e) => changeHandle(e, "roofLayout")}
          />
          {renderFileInfo(formData.roofLayout, 10, ["image/jpeg", "image/png"])}
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <label
            htmlFor="video-upload"
            className="border border-[#8A6112] p-5 rounded-xl flex flex-col cursor-pointer text-[#D3900D] shadow-md border-dashed text-center"
          >
            <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
            <span>Video Upload</span>
            <p className="text-gray-400 text-[12px]">
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

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <label
            htmlFor="image-upload"
            className="border border-[#8A6112] p-5 rounded-xl flex flex-col cursor-pointer text-[#D3900D] shadow-md border-dashed text-center"
          >
            <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
            <span>Image Upload</span>
            <p className="text-gray-400 text-[12px]">
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

        {/* Item 4 */}
        <div className="flex flex-col items-center">
          <label
            htmlFor="electricityBill-upload"
            className="border border-[#8A6112] p-5 rounded-xl flex flex-col cursor-pointer text-[#D3900D] shadow-md border-dashed text-center"
          >
            <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
            <span>Electricity Bill</span>
            <p className="text-gray-400 text-[12px]">
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

        {/* Item 5 */}
        <div className="flex flex-col items-center">
          <label
            htmlFor="gstCertificate-upload"
            className="border border-[#8A6112] p-5 rounded-xl flex flex-col cursor-pointer text-[#D3900D] shadow-md border-dashed text-center"
          >
            <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
            <span>GST Certificate</span>
            <p className="text-gray-400 text-[12px]">
              JPG, PNG file Size no more than 10MB
            </p>
          </label>
          <input
            id="gstCertificate-upload"
            type="file"
            className="hidden"
            onChange={(e) => changeHandle(e, "gstCertificate")}
          />
          {renderFileInfo(formData.gstCertificate, 10, [
            "image/jpeg",
            "image/png",
          ])}
        </div>

        {/* Item 6 */}
        <div className="flex flex-col items-center">
          <label
            htmlFor="identityProof-upload"
            className="border border-[#8A6112] py-5 rounded-xl flex flex-col cursor-pointer text-[#D3900D] shadow-md border-dashed text-center"
          >
            <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
            <span>Identity Proof</span>
            <p className="text-gray-400 text-[12px]">
              Please Upload Aadhar, Pan, or any Govt Id
            </p>
          </label>
          <input
            id="identityProof-upload"
            type="file"
            className="hidden"
            onChange={(e) => changeHandle(e, "identityProof")}
          />
          {renderFileInfo(formData.identityProof, 10, [
            "image/jpeg",
            "image/png",
          ])}
        </div>
      </div>
    </div>
  );
};

export default AttachmentsSection;
