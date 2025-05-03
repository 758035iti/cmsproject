import Image from "next/image";
import { trustAreas } from "@/utils/activites/rd";
import { energy } from "@/assets/activities/rd";
export default function Herosection() {
  return (
    <div className="min-h-screen p-6 bg-white lg:mx-36 lg:my-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Research and Development
      </h1>

      <p className="text-gray-700 mb-8 max-w-full mx-auto ">
        The overall purpose of R&D activities of CED is to broaden the knowledge
        base on environmental sciences leading to environment management and
        sustainable development of the country – in its economic, technological,
        social, political, and ecological aspects – from a broad
        interdisciplinary perspective to gain insights and to disseminate the
        knowledge so gathered. CED is engaged in research activities in subjects
        related to each Program Areas and Sub Programs. The uniqueness of
        research activities at CED is that it always engages in
        interdisciplinary and multidisciplinary research and involves
        researchers across the different Program Areas.
      </p>

      <div className="flex flex-col md:flex-row items-center  justify-center   mx-auto max-w-full">
        {/* Left Side - List */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            Thrust Areas for Research
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            {trustAreas.map((area, index) => (
              <li key={index.toString()}>{area.title}</li>
            ))}
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center w-full md:w-[50vw] h-[50vh]">
          <Image
            src={energy}
            alt="Research Illustration"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
