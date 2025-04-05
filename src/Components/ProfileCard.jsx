import { IoMdPerson } from "react-icons/io";

import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";

export const ProfileCard = () => {
  return (
    <div className=" bg-black text-white p-4 my-4 rounded-xl border border-gray-700 flex flex-col sm:flex-row items-center gap-6">
      <div className="w-48 h-48 rounded-full flex items-center justify-center">
        <IoMdPerson className="text-9xl" />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Mr A</h2>
          <FaCheckCircle className="text-sky-500" />
        </div>
        <p className="text-sm text-gray-300">
          Co-Founder & CEO @Vertx
          <span className="inline-block align-middle ml-1">▼</span>
        </p>
        <div className="flex gap-2 items-center md:items-start md:flex-col">
          <p className="mt-2 w-fit bg-white text-black text-xs font-semibold px-2 py-1 rounded">
            Entrepreneur
          </p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" className="text-4xl text-blue-600 hover:opacity-80">
              <FaLinkedin />
            </a>
            <a href="#" className="text-4xl text-white hover:opacity-80">
              <FaXTwitter />
            </a>
            <a href="#" className="text-4xl text-red-500 hover:opacity-80">
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
