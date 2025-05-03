import Image from "next/image";
import { trustAreas1 } from "@/utils/activites/cs";
import { Consultancy } from "@/assets/activities/cs";
export default function Herosection() {
  return (
    <div className=" p-6 bg-white lg:mx-36 lg:my-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Consultancy Services
      </h1>

      <p className="text-gray-700 mb-8 w-full mx-auto ">
        CED is providing consultancy services in a wide array of areas from
        engineering to social development, Mapping and Information system,
        biodiversity, forestry and agriculture to urban and rural development
        etc. The experience and expertise developed by CED through years of R&D
        activities are utilized for offering better consultancy services.
      </p>

      <div className="flex flex-col md:flex-row items-center  justify-center   mx-auto max-w-full">
        {/* Left Side - List */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            CED provides consultancy services in the following areas:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            {trustAreas1.map((area, index) => (
              <li key={index.toString()}>{area.title}</li>
            ))}
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center w-full md:w-[70%] h-[70%]">
          <Image
            src={Consultancy}
            alt="Research Illustration"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
