import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-black sticky top-0 z-50 text-white flex justify-between items-center p-4 border-b border-gray-900">
      <div className="flex justify-between items-center space-x-8 w-[60%] sm:w-fit ">
        <img
          alt="vertx"
          src="/public/vertx.PNG"
          className="w-10 rounded-full object-cover"
        />
        <h2 className="text-xl font-bold">Vertxlabs, Inc</h2>
      </div>

      <div>
        <div className="hidden md:flex space-x-8 text-[1rem] font-semibold">
          <button className="text-gray-400 hover:text-white">Activity</button>
          <button className="text-gray-400 hover:text-white">Log out</button>
        </div>
        <div className="md:hidden relative">
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            {isOpen ? (
              <IoMdClose size={20} />
            ) : (
              <BsThreeDotsVertical size={20} />
            )}
          </button>
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white shadow-lg">
              <button className="block w-full px-4 py-2 text-left hover:bg-gray-700">
                Activity
              </button>
              <button className="block w-full px-4 py-2 text-left hover:bg-gray-700">
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
