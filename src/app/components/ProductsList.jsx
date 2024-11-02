import React, { useState } from "react";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" hidden lg:inline-block relative  text-left   w-[230px] z-10 ">
      <div className="flex items-center space-x-1 ">
        <button
          onClick={toggleDropdown}
          className="inline-flex hover:border-orange-500  justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-[14px] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          <span>Önerilen </span>
          <span ><TbArrowsDownUp size={20} className="text-orange-500 "/>
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[250px]  rounded-md shadow-lg bg-white ring-1  ring-black ring-opacity-5">
          <div className="py-1 " role="menu" aria-orientation="vertical " aria-labelledby="options-menu">
            <a href="#" className="  px-4 py-1 text-[14px] hover:text-orange-500 text-gray-700 hover:bg-gray-100 flex items-center " role="menuitem"> Önerilen <FiInfo className="text-bold"/></a>
            <a href="#" className="block px-4 py-1 text-[14px] text-gray-700 hover:text-orange-500 hover:bg-gray-100" role="menuitem">En düşük fiyat</a>
            <a href="#" className="block px-4 py-1 text-[14px] text-gray-700 hover:text-orange-500 hover:bg-gray-100" role="menuitem">En yüksek fiyat</a>
            <a href="#" className="block px-4 py-1 text-[14px] text-gray-700 hover:bg-gray-100 hover:text-orange-500" role="menuitem">En çok satan</a>
            <a href="#" className="block px-4 py-1 text-[14px] text-gray-700 hover:bg-gray-100 hover:text-orange-500" role="menuitem">En favoriler</a>
            <a href="#" className="block px-4 py-1 text-[14px] text-gray-700 hover:bg-gray-100 hover:text-orange-500" role="menuitem">En yeniler</a>
            <a href="#" className="block px-4 py-1 text-[14px] text-gray-700 hover:bg-gray-100 hover:text-orange-500 " role="menuitem">En çok değerlendiren</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
