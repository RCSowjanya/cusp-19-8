import React, { useState } from "react";
import contactbg from "../Images/contactus-bg.webp";
import cuspbg from "../Images/cusp-contact.webp";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};

    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full Name is required";
    }

    if (!formData.subject.trim()) {
      formErrors.subject = "Subject is required";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }

    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
      formErrors.phone = "Phone number is invalid (format: 123-456-7890)";
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form or perform any desired action
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div>
      <div className="relative bg-contact">
        <img src={contactbg} className="w-full h-auto" alt="contact-bg" />
        <div className="absolute top-0 min-[700px]:top-[10%] left-[10%]">
          <h2 className="text-[48px] font-[600] text-white max-[1000px]:text-[20px]">
            Get in touch with us
          </h2>
          <p className="text-[24px] font-[500] leading-[36px] mt-1 text-white max-[1000px]:text-[14px] max-[1000px]:leading-[20px]">
            Empowering communities with <br />
            Sustainable Solar Solutions
          </p>
        </div>
      </div>
      {/*--form---*/}
      <div className="p-[5%] drop-shadow-2xl bg-white">
        <div className="flex items-center justify-center h-full max-[1000px]:flex-col">
          <div className="w-1/2 max-[1000px]:w-full">
            <img src={cuspbg} className="w-full h-auto" alt="cuspbg" />
          </div>
          <div className="w-1/2 max-[1000px]:w-full">
            <div className="max-w-4xl mx-auto p-5">
              <form className="space-y-7" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="fullName"
                    className="w-full text-[16px] font-[500] text-[#A45D17] ad"
                  >
                    Full Name <span className="text-[#A45D17]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="w-full text-[16px] font-[500] text-[#A45D17] ad"
                  >
                    Subject<span className="text-[#A45D17]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block w-full text-[16px] font-[500] text-[#A45D17] ad"
                    >
                      Email<span className="text-[#A45D17]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.com"
                      className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block w-full text-[16px] font-[500] text-[#A45D17]"
                    >
                      Phone<span className="text-[#A45D17]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="123-456-7890"
                      className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#A45D17]"
                  >
                    Message<span className="text-[#A45D17]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows="4"
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#A45D17]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*---form close---*/}
    </div>
  );
};

export default ContactUs;
