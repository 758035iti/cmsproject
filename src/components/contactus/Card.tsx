"use effect";
import React from "react";
import { cardarr } from "@/utils/contact_us/index"; // Make sure the path is correct

const Card = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center py-10 px-4">
      {cardarr.map((item) => (
        <div
          key={item.id.toString()}
          className="bg-white h-auto sm:h-[30vh] w-full sm:w-[45%] lg:w-[30%] rounded-xl shadow-lg flex flex-col justify-center items-center p-6 text-center border-2 border-green-700"
        >
          {/* Top icon + title */}
          <div className="flex items-center gap-2 mb-2">
            <p className="text-green-800 text-2xl">{item.icon}</p>
            <p className="text-black text-lg font-semibold">{item.title}</p>
          </div>

          {/* Content */}
          <p className="text-black text-sm mb-3">{item.content}</p>

          {/* Icon 1 + msg */}
          <div className="flex items-center gap-2 mb-2 text-sm text-black">
            <span className="text-xl text-green-700">{item.icon1}</span>
            <span>{item.msg}</span>
          </div>

          {/* Icon 2 + msg1 */}
          <div className="flex items-center gap-2 text-sm text-black">
            <span className="text-xl text-green-700">{item.icon2}</span>
            <span>{item.msg1}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
