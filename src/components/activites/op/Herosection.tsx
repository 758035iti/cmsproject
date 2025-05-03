import React from "react";
import { programs } from "@/utils/activites/op"; // Adjust the path as necessary
import { Climate } from "@/assets/activities/op";
import Image from "next/image";
const Herosection = () => {
  return (
    <div>
      <div className=" lg:my-10 w-full md:px-16 lg:px-24 md:my-6 ">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Outreach Programs
        </h1>
        <p className="">
          CED organizes many outreach programs to disseminate the knowledge
          among the community. It also focuses on networking with individual
          researchers and scientific organizations. The Centre is regularly
          organizing Kerala Environment Congress and Odisha Environment Congress
          every year based on specific themes. It acts as a platform for
          information and knowledge sharing between scientific community and
          policy-decision makers to discuss about the major environmental and
          developmental issues the state is facing from time to time.
        </p>
        <p>
          CED is coordinating the National Environmental Awareness Campaign of
          the Ministry of Environment and Forests, Government of India in Kerala
          and Lakshadweep islands.
        </p>
        <p>
          CED is also conducting workshops and seminars on specific topics of
          relevance from time to time for different groups such as students,
          scientists and engineers, policy-decision makers and other officials
          and elected representatives of local governments.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="">
            {/* Left Side - List */}
            <h2 className="font-bold my-3 text-xl">Major Program</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              {programs.map((item) => (
                <li key={item.id.toString()}>{item.title}</li>
              ))}
            </ul>
          </div>
          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center  w-40 h-40">
            <Image
              src={Climate}
              alt="Research Illustration"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
