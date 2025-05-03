import React from "react";
import Image from "next/image";
import img5 from "@/assets/contact_us/img5.gif";
import Link from "next/link";
// Adjust the path as necessary
const Breadcrumb = () => {
  return (
    <>
      <div className="relative h-[50vh] w-full">
        <Image
          src={img5}
          alt="img5"
          fill
          className=" object-cover"
          priority // For LCP optimization
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center  ">
          <span className="text-white text-xl font-semibold flex ">
            <Link href="">CED india /</Link>
            <Link href="">Contact Us</Link>
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
