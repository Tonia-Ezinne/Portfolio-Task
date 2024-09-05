import React from 'react'

const FirstCard = () => {
  return (
    <div className="bg-[#F5FCFF] p-5 rounded-lg ">
      <div className="w-12 h-12 flex justify-center items-center rounded-md bg-white">
        <FaMobileAlt className="text-[#282938] text-4xl" />
      </div>

      <h2 className="text-[#282938] text-xl font-bold mt-5">
        Responsive Design
      </h2>
      <p className="text-[#282938] text-lg mt-2">
        Responsive design ensures that your website looks great and functions
        well on all devices, from smartphones to large desktop monitors, by
        adapting its layout and content dynamically based on screen size.
      </p>
    </div>
  );
}

export default FirstCard