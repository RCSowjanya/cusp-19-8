import React, { useState } from "react";
import quote from "../Images/quote.webp";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import LogicsforQuote from "./LogicsforQuote";
import { MdOutlineHouse } from "react-icons/md";
import YourName from "./YourName";
import FullAddress from "./FullAddress";
import ContactDetails from "./ContactDetails";
import TypeofOrganization from "./TypeofOrganization";
import CurrentSanction from "./CurrentSanction";
import TypeofRoof from "./TypeofRoof";
import Attachments from "./Attachments";
import AttachmentsSection from "./AttachmentsSection";
import CapacitytoInstall from "./CapacitytoInstall";
import LocationDetails from "./LocationDetails";

import Installation from "./Installation";
import PeakLoad from "./PeakLoad";
import TotalAreaRoof from "./TotalAreaRoof";

const GetQuote = () => {
  const [isRoofRights, setIsRoofRights] = useState(null); // Track the "Yes" or "No" selection

  const {
    step,
    formData,
    handleBack,
    handleNext,
    handleChange,
    changeHandle,
    handleSubmit,
    validateStep, // Make sure validateStep is included here
    isLastStep,
    setFormData,
    handleFileChange,
    handleOrganizationTypeChange,
    setStep,
    isSubmitted,
    handleRoofTypeChange,
  } = LogicsforQuote();

  const [isEmpanelled, setIsEmpanelled] = useState(true);
  const [needSubsidy, setNeedSubsidy] = useState("No"); // Default to 'No'
  const [roofRights, setRoofRights] = useState(false);
  const [roofRight, setRoofRight] = useState(false);

  // Handle Roof Rights Toggle
  const handleRoofRightToggle = (selectedOption) => {
    setRoofRight(selectedOption);
    if (selectedOption) {
      setStep(25); // If "Yes" is selected, move to step 25
    } else {
      setStep(27); // If "No" is selected, move to step 27
    }
  };

  const handleRoofRightsToggle = (selectedOption) => {
    setRoofRights(selectedOption);
    if (selectedOption) {
      setStep(18); // If "Yes" is selected, move to step 18
    } else {
      setStep(20); // If "No" is selected, move to step 20
    }
  };
  const handleToggle = () => {
    const newSelection = !isEmpanelled;
    setIsEmpanelled(newSelection);
    setStep(newSelection ? 5 : 8); // Adjust step to show the next set of screens based on the selection
  };
  const handleToggleChange = () => {
    const newNeedSubsidy = needSubsidy === "No" ? "Yes" : "No";
    setNeedSubsidy(newNeedSubsidy);
    setStep(newNeedSubsidy === "Yes" ? 15 : 22); // Adjust step based on the new subsidy option
  };

  return (
    <div>
      <div className="relative bg-house h-auto max-[1000px]:mb-11">
        <div className="flex items-start max-[600px]:items-center max-[600px]:flex-col  pt-[5%] ml-[2%] max-[600px]:ml-0">
          <div className=" h-auto flex items-start">
            <img
              src={quote}
              className="w-full h-full object-cover mt-[15%]"
              alt="cusp-quote"
            />
          </div>
          <div className="w-[65%] border max-[600px]:w-full  rounded-xl bg-white border-[#FFAC0B] flex flex-col justify-center py-11 px-4 mt-[5%] shadow-custom">
            {isSubmitted ? (
              <div className="flex justify-center items-center py-[10%]">
                <div className="text-center">
                  <h1 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 ad">
                    Thank You For Your submission
                  </h1>
                  <p className="text-[14px] font-[500]">
                    We have successfully received your submission and our team
                    will review your information shortly. Your inquiry is
                    important to us, and we aim to respond as quickly as
                    possible.
                  </p>
                  <button className="bg-[#0BB68D] text-white px-11 py-2 rounded-md mt-6">
                    Ok
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {step === 0 && (
                  <div>
                    <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 ad">
                      Type of Customer
                    </h2>
                    <div className="flex gap-4 my-[2%] w-full max-[1000px]:flex-col items-center justify-center">
                      <div>
                        <p
                          className="group border-2 border-[#D3900D] hover:bg-[#D3900D] hover:text-white flex gap-3 text-[16px] text-[#D3900D] rounded-full px-16 py-3 cursor-pointer"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              customerType: "Residential",
                            });
                            setStep(11);
                          }}
                        >
                          <MdOutlineHouse
                            size={20}
                            className="text-[#D3900D] group-hover:text-white transition-colors duration-300"
                          />
                          <span className="group-hover:text-white">
                            Residential
                          </span>
                        </p>
                      </div>
                      <div>
                        <p
                          className="group border-2 border-[#D3900D] hover:bg-[#D3900D] hover:text-white flex gap-3 text-[16px] text-[#D3900D] rounded-full px-16 py-3 cursor-pointer"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              customerType: "Commercial",
                            });
                            setStep(1);
                          }}
                        >
                          <MdOutlineHouse
                            size={20}
                            className="text-[#D3900D] group-hover:text-white transition-colors duration-300"
                          />
                          <span className="group-hover:text-white">
                            Commercial
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {formData.customerType === "Residential" && (
                  <div className="mx-7">
                    <div>
                      {step === 11 && (
                        <YourName
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}
                      {step === 12 && (
                        <FullAddress
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}

                      {/*---onGrid and offGrid steps----*/}
                      {step === 13 && (
                        <div>
                          <h2 className="text-[#004A9C]  font-[600] text-[16px] text-center pb-6">
                            Connection Type
                          </h2>
                          <div className="flex gap-6 my-[4%] w-full max-[1000px]:flex-col items-center justify-center">
                            <h4
                              className="flex gap-3 hover:bg-[#D3900D] text-[#D3900D] hover:text-white font-[600] rounded-full px-20 py-2 text-[16px] cursor-pointer"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  connectionType: "Ongrid",
                                });
                                setStep(14); // Start ongrid steps
                              }}
                            >
                              On Grid
                            </h4>
                            <h4
                              className="border border-[#D3900D] rounded-full font-[600] hover:bg-[#D3900D] hover:text-white text-[#D3900D] flex gap-3 px-20 py-2 text-[16px] cursor-pointer"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  connectionType: "Offgrid",
                                });
                                setStep(29); // Start offgrid steps
                              }}
                            >
                              Off Grid
                            </h4>
                          </div>
                        </div>
                      )}

                      {/*-----on Grid steps-start---*/}
                      {step >= 14 && step < 29 && (
                        <div>
                          {step === 14 && (
                            <div>
                              <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
                                Need Subsidy?
                              </h2>
                              <div className="flex items-center justify-center">
                                <label className="flex items-center cursor-pointer">
                                  <div className="relative">
                                    <input
                                      type="checkbox"
                                      checked={needSubsidy}
                                      onChange={handleToggleChange}
                                      className="sr-only"
                                    />
                                    <div className="block bg-gray-200 w-14 h-8 rounded-full"></div>
                                    <div
                                      className={`dot absolute left-1 top-1 text-[#0BB68D] w-6 h-6 rounded-full transition-transform ${
                                        needSubsidy
                                          ? "translate-x-full bg-[#0BB68D]"
                                          : ""
                                      }`}
                                    ></div>
                                  </div>
                                  <span className="ml-3 text-[#004A9C] font-[600] text-[16px]">
                                    {needSubsidy ? "Yes" : "No"}
                                  </span>
                                </label>
                              </div>
                            </div>
                          )}
                          {/*---on Grid Need Subsidy Yes and No steps start here---*/}
                          {/*--On Grid-Need Subsidy Yes Steps start here---*/}
                          {needSubsidy && step === 15 && (
                            <CurrentSanction
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                          {needSubsidy && step === 16 && (
                            <TotalAreaRoof
                              formData={formData}
                              handleChange={handleChange}
                              handleFileChange={handleFileChange}
                            />
                          )}
                          {needSubsidy && step === 17 && (
                            <Installation
                              formData={formData}
                              handleChange={handleChange}
                              handleFileChange={handleFileChange}
                            />
                          )}
                          {/* Roof Rights Toggle */}
                          {needSubsidy && step === 17 && (
                            <div>
                              <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4">
                                Roof Rights
                              </h2>
                              <div className="flex items-center justify-center">
                                <button
                                  onClick={() => handleRoofRightsToggle(true)}
                                  className={`px-8 py-2 font-semibold rounded-full transition-colors ${
                                    roofRights
                                      ? "bg-[#D3900D] text-white"
                                      : "bg-gray-200 text-[#D3900D]"
                                  }`}
                                >
                                  Yes
                                </button>
                                <button
                                  onClick={() => handleRoofRightsToggle(false)}
                                  className={`ml-4 px-8 py-2 font-semibold rounded-full transition-colors ${
                                    !roofRights
                                      ? "bg-[#D3900D] text-white"
                                      : "bg-gray-200 text-[#D3900D]"
                                  }`}
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          )}
                          {/* Roof Rights Yes Steps */}
                          {needSubsidy && roofRights && step === 18 && (
                            <Attachments
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {needSubsidy && roofRights && step === 19 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}

                          {/* Roof Rights No Steps */}
                          {needSubsidy && !roofRights && step === 20 && (
                            <Attachments
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {needSubsidy && !roofRights && step === 21 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                          {/*---on Grid-Need subsidy- No Steps here---*/}
                          {!needSubsidy && step >= 22 && step < 26 && (
                            <div>
                              {step === 22 && (
                                <CurrentSanction
                                  formData={formData}
                                  handleChange={handleChange}
                                />
                              )}
                              {step === 23 && (
                                <TotalAreaRoof
                                  formData={formData}
                                  handleChange={handleChange}
                                  handleFileChange={handleFileChange}
                                />
                              )}
                              {step === 24 && (
                                <Installation
                                  formData={formData}
                                  handleChange={handleChange}
                                  handleFileChange={handleFileChange}
                                />
                              )}
                              {step === 24 && (
                                <div>
                                  <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4">
                                    Roof Rights
                                  </h2>
                                  <div className="flex gap-4 max-[1000px]:flex-col my-[4%] w-full items-center justify-center">
                                    <button
                                      className={`px-8 py-2 font-semibold rounded-full transition-colors ${
                                        roofRight
                                          ? "bg-[#D3900D] text-white"
                                          : "bg-gray-200 text-[#D3900D]"
                                      }`}
                                      onClick={() =>
                                        handleRoofRightToggle(true)
                                      } // "Yes" selected
                                    >
                                      Yes
                                    </button>
                                    <button
                                      className={`ml-4 px-8 py-2 font-semibold rounded-full transition-colors ${
                                        !roofRight
                                          ? "bg-[#D3900D] text-white"
                                          : "bg-gray-200 text-[#D3900D]"
                                      }`}
                                      onClick={() =>
                                        handleRoofRightsToggle(false)
                                      } // "No" selected
                                    >
                                      No
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          {/*---On Grid-No-Need Subsidy-Roof Rights Yes Steps here---*/}
                          {/*---On Grid-No-Need Subsidy-Roof Rights Yes Steps---*/}
                          {!needSubsidy &&
                            roofRight &&
                            step >= 25 &&
                            step < 27 && (
                              <div>
                                {step === 25 && (
                                  <Attachments
                                    formData={formData}
                                    changeHandle={changeHandle}
                                  />
                                )}
                                {step === 26 && (
                                  <CapacitytoInstall
                                    formData={formData}
                                    handleChange={handleChange}
                                  />
                                )}
                              </div>
                            )}

                          {/*---On Grid-No-Need Subsidy-Roof Rights No Steps---*/}
                          {!needSubsidy &&
                            !roofRight &&
                            step >= 27 &&
                            step < 29 && (
                              <div>
                                {step === 27 && (
                                  <Attachments
                                    formData={formData}
                                    changeHandle={changeHandle}
                                  />
                                )}
                                {step === 28 && (
                                  <CapacitytoInstall
                                    formData={formData}
                                    handleChange={handleChange}
                                  />
                                )}
                              </div>
                            )}
                        </div>
                      )}
                      {/*-----on Grid steps-end---*/}
                      {/*----Off Grid steps start----*/}
                      {step >= 29 && (
                        <div>
                          {step === 29 && (
                            <PeakLoad
                              formData={formData.load}
                              handleChange={handleChange}
                            />
                          )}
                          {step === 30 && (
                            <div>
                              <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4">
                                Electricity Connectivity
                              </h2>
                              <div className="flex gap-4 max-[1000px]:flex-col my-[4%] w-full items-center justify-center">
                                <button
                                  className="hover:bg-[#D3900D]    text-[#D3900D] hover:text-white font-[600] rounded-full px-20 py-2 text-[16px] cursor-pointer"
                                  onClick={() => setStep(31)} // Start "Yes" screens at step 35
                                >
                                  Yes
                                </button>
                                <button
                                  className="border border-[#D3900D] rounded-full font-[600] hover:bg-[#D3900D] hover:text-white text-[#D3900D] flex gap-3 px-20 py-2 text-[16px] cursor-pointer"
                                  onClick={() => setStep(34)} // Start "No" screens at step 39
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          )}
                          {/*--- Electricity Connectivity yes screens----*/}
                          {step === 31 && (
                            <TotalAreaRoof
                              formData={formData}
                              handleChange={handleChange}
                              handleFileChange={handleFileChange}
                            />
                          )}
                          {step === 32 && (
                            <Attachments
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {step === 33 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}

                          {/*--- Electricity Connectivity yes screens end----*/}
                          {/*--- Electricity Connectivity No screens----*/}
                          {step === 34 && (
                            <TotalAreaRoof
                              formData={formData}
                              handleChange={handleChange}
                              handleFileChange={handleFileChange}
                            />
                          )}
                          {step === 35 && (
                            <Attachments
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {step === 36 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}

                          {/*--- Electricity Connectivity No screens-end---*/}
                        </div>
                      )}
                      {/*---Off Grid steps end----*/}
                      {/*----Residential steps end----*/}
                    </div>
                  </div>
                )}
                {formData.customerType === "Commercial" && (
                  <div className="mx-7">
                    <div>
                      {step === 1 && (
                        <YourName
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}
                      {step === 2 && (
                        <FullAddress
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}
                      {step === 3 && (
                        <TypeofOrganization
                          formData={formData}
                          handleOrganizationTypeChange={
                            handleOrganizationTypeChange
                          }
                        />
                      )}

                      {step === 4 && (
                        <div>
                          <CurrentSanction
                            formData={formData}
                            handleChange={handleChange}
                          />
                          <div className="flex items-center justify-center space-x-3 mt-9">
                            <h2 className="text-[#004A9C] font-[600] text-[16px] text-center">
                              Need Battery Backup
                            </h2>
                            <div
                              onClick={handleToggle}
                              className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                                isEmpanelled ? "bg-[#0BB68D]" : "bg-gray-300"
                              }`}
                            >
                              <div
                                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                                  isEmpanelled
                                    ? "translate-x-8"
                                    : "translate-x-0"
                                }`}
                              />
                            </div>
                            <span
                              className={`text-[14px] font-semibold ${
                                isEmpanelled
                                  ? "text-[#0BB68D]"
                                  : "text-gray-400"
                              }`}
                            >
                              {isEmpanelled ? "Yes" : "No"}
                            </span>
                          </div>
                        </div>
                      )}

                      {isEmpanelled ? (
                        <div>
                          {step === 5 && (
                            <TypeofRoof
                              formData={formData}
                              handleChange={handleChange}
                              handleRoofTypeChange={handleRoofTypeChange}
                            />
                          )}
                          {step === 6 && (
                            <AttachmentsSection
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {step === 7 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                        </div>
                      ) : (
                        <div>
                          {step === 8 && (
                            <TypeofRoof
                              formData={formData}
                              handleChange={handleChange}
                              handleRoofTypeChange={handleRoofTypeChange}
                            />
                          )}
                          {step === 9 && (
                            <AttachmentsSection
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {step === 10 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex justify-center gap-8 mt-8 w-full">
                  <button
                    className="border-2 border-[#0BB68D] text-[16px] font-[400] rounded-md px-8 py-2 items-center text-[#0BB68D] flex gap-3"
                    onClick={handleBack}
                  >
                    <FiArrowLeftCircle className="" />
                    Back
                  </button>

                  <button
                    className={`border-2 text-[16px] border-[#0BB68D] font-[400] px-8 py-2 flex rounded-md items-center gap-3 ${
                      validateStep()
                        ? "bg-[#0BB68D] text-white"
                        : "bg-gray-300 text-gray-500"
                    }`}
                    onClick={isLastStep ? handleSubmit : handleNext}
                    disabled={!validateStep()}
                  >
                    {isLastStep ? "Submit" : "Next"}
                    <FiArrowRightCircle className="" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
