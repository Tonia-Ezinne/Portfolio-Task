import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import Image from "next/image";
import PageSlide from "../../components/PageSlide";

const Stars = ({ count, size, color }) => (
  <div className="flex gap-1 mb-3">
    {Array.from({ length: count }, (_, index) => (
      <LiaStarSolid key={index} size={size} className={color} />
    ))}
  </div>
);

const SectionFive = () => {
  return (
    <div className="bg-[#F5FCFF] mt-10 py-10">
      <div className="container mx-auto w-11/12">
        <div className="text-start mb-8">
          <h6 className="text-[#282938] text-sm font-semibold">
            Clients Feedback
          </h6>
          <h1 className="text-2xl text-[#282938] md:text-3xl lg:text-4xl font-bold mt-2">
            Customer Testimonials
          </h1>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-12">
          {[
            {
              image: "/Avatar Image (5).svg",
              name: "Bliss Lian",
              company: "Starbucks",
              feedback:
                "The new website design is both visually stunning and incredibly user-friendly, reflecting a deep understanding of our brand and our customers' needs.",
            },
            {
              image: "/Avatar Image (7).svg",
              name: "Naps Russell",
              company: "Louis Vuitton",
              feedback:
                "Thanks to the front-end developer's expertise, our site loads quickly and seamlessly across all devices, which has significantly improved user engagement and satisfaction.",
            },
            {
              image: "/Avatar Image (1).svg",
              name: "Rossy Russell",
              company: "McDonald's",
              feedback:
                "Their attention to detail and commitment to responsive design have transformed our online presence, making it easier for our users to navigate and interact with our content.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border-2 border-[#006B6A] p-4 rounded-lg shadow-md flex flex-col items-start text-start bg-white"
            >
              <Stars count={5} size={20} color="text-[#006B6A]" />
              <p className="text-gray-700 mb-4">{item.feedback}</p>
              <div className="flex gap-3 items-center">
                <Image
                  src={item.image}
                  width={60}
                  height={60}
                  alt={`Avatar Image of ${item.name}`}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <PageSlide />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
