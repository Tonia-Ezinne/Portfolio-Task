import React, { useState } from "react";
import styles from "../styles/SectionSix.module.css"; // Import CSS Module

const SectionSix = () => {
  // State for form fields and errors
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    userMessage: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    userMessage: "",
    termsAccepted: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      userMessage: "",
      termsAccepted: "",
    });

    // Basic validation
    let hasErrors = false;
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
      hasErrors = true;
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
      hasErrors = true;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      hasErrors = true;
    }
    if (!formData.userMessage) {
      newErrors.userMessage = "Message is required";
      hasErrors = true;
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="text-center mt-14 container mx-auto px-4 md:px-0 md:w-8/12 lg:w-6/12">
      <div>
        <h6 className="text-sm font-semibold">Get In Touch</h6>
        <h1 className="font-bold text-xl mt-2">Contact Me</h1>
        <p className="text-sm mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-4 p-4 md:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="text-[#282938] w-full md:w-1/2 text-start">
            <label htmlFor="firstName" className="text-[#282938]">
              First Name
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`bg-white rounded-lg p-2 border-2 w-full mt-2 ${
                  errors.firstName ? "border-red-500" : "border-[#282938]"
                }`}
                type="text"
                placeholder=""
              />
            </label>
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="text-[#282938] w-full md:w-1/2 text-start">
            <label htmlFor="lastName" className="text-[#282938]">
              Last Name
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`bg-white rounded-lg p-2 border-2 w-full mt-2 ${
                  errors.lastName ? "border-red-500" : "border-[#282938]"
                }`}
                type="text"
                placeholder=""
              />
            </label>
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="w-full text-start">
            <label htmlFor="email" className="text-[#282938]">
              Email
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-white rounded-lg p-2 border-2 w-full mt-2 ${
                  errors.email ? "border-red-500" : "border-[#282938]"
                }`}
                type="email"
                placeholder=""
              />
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="w-full text-start mt-5 md:mt-0">
            <label htmlFor="phoneNumber" className="text-[#282938]">
              Phone Number
              <input
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`bg-white rounded-lg p-2 border-2 w-full mt-2 ${
                  errors.phoneNumber ? "border-red-500" : "border-[#282938]"
                }`}
                type="text"
                placeholder=""
              />
            </label>
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>
        </div>

        <div className="w-full mt-5 text-start">
          <label htmlFor="usermessage" className="text-[#282938]">
            Message
          </label>
          <textarea
            id="usermessage"
            name="userMessage"
            value={formData.userMessage}
            onChange={handleChange}
            className={`bg-white rounded-lg p-2 border-2 w-full mt-2 placeholder-gray ${
              errors.userMessage ? "border-red-500" : "border-[#282938]"
            }`}
            rows="7"
            placeholder="Type your message"
          ></textarea>
          {errors.userMessage && (
            <p className="text-red-500 text-sm mt-1">{errors.userMessage}</p>
          )}
        </div>
        <div className="flex items-center gap-2 mt-5">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="custom-checkbox"
          />
          <p className="text-[#282938]">I accept the terms</p>
        </div>
        {errors.termsAccepted && (
          <p className="text-red-500 text-sm text-start mt-1">{errors.termsAccepted}</p>
        )}
        <div className="w-full mt-5">
          <button
            className="bg-[#5E3BEE] text-white rounded-lg p-2 border-2 border-transparent hover:bg-[#4a2dc0] hover:border-[#4a2dc0] focus:outline-none focus:ring-2 focus:ring-[#4a2dc0] transition-all duration-300 ease-in-out w-full cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SectionSix;
