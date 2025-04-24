"use client";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import RemoveIcon from "@mui/icons-material/Remove";
import Link from "next/link";
import { imagearr } from "@/utils/footer/index"; // Make sure this array is valid

const Footer = () => {
  return (
    <div>
      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_2fr_2fr_2fr]
 gap-x-8 p-10 md:p-16 bg-[#343434] text-white "
      >
        {/* Contact Us */}
        <div>
          <p className="text-2xl font-bold">Contact Us</p>
          <span className="flex flex-col gap-4 py-8 text-white">
            <span className="flex gap-3 items-start">
              <HomeIcon className="text-green-700 hover:text-white mt-1" />
              <p className="text-lg">
                Eastern Regional Centre, Odisha Centre for Environment and
                Development K8/42, Ghatika, Kalinga Nagar, Bhubaneswar – 751003,
                Odisha, Tel. 0674-3549092 <br />
                Email: cederc@cedindia.org
              </p>
            </span>
            <span className="flex gap-3">
              <LocalPhoneIcon className="text-green-700 hover:text-white mt-1" />
              <p className="text-lg">0471-23369720/21/22 Fax: 0471-2369720</p>
            </span>
            <span className="flex gap-3">
              <EmailIcon className="text-green-700 hover:text-white mt-1" />
              <p className="text-lg">cederc@cedindia.org</p>
            </span>
          </span>
        </div>

        {/* Locate Us */}
        <div>
          <p className="text-2xl font-bold">Locate Us</p>
          <iframe
            src="https://www.google.com/maps?q=Thozhuvancode,+Vattiyoorkavu,+Kerala&output=embed"
            width="100%"
            height="250"
            className="rounded py-6"
            loading="lazy"
          ></iframe>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-2xl font-bold">Quick Links</p>
          <span className="flex flex-col gap-3 py-8">
            {[
              "Partners",
              "Publication",
              "Gallery",
              "Opportunities",
              "Special Initiatives",
              "Announcements",
            ].map((text, i) => (
              <span key={i} className="flex items-center gap-2">
                <Link href="#">
                  <RemoveIcon className="text-green-600 text-xl" />
                </Link>
                <p className="text-white">{text}</p>
              </span>
            ))}
          </span>
        </div>

        {/* Recent Posts */}
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold ">Recent Posts</p>
          <div className="grid grid-cols-3 gap-1 lg:gap-2 ">
            {imagearr.map((item) => (
              <div
                key={item.id}
                className="relative rounded-sm overflow-hidden group"
              >
                <img src={item.img.src} alt="" className="" />
                <div className="absolute inset-0 bg-black/45 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
