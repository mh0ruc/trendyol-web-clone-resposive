import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import Filter_small from "./Filter_small";

const Categories_Small = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="border-b-2 bg-opacity-20 flex justify-between px-1 py-1 bg-gray-300">
        <div className="flex">
          <div className="flex lg:hidden flex-col h-8 items-center justify-center">
            <button onClick={toggleMenu}>
              <RiMenu2Fill size={30} />
            </button>
            <div className="text-[10px]">menü</div>
          </div>
          <div className="logo lg:font-semibold flex h-8 text-xl font-normal">
            <div>trendyol</div>
          </div>
        </div>
        <div className="flex gap-2 h-8 w-30 justify-center items-center">
          <IoIosSearch size={30} />
          <IoHeartOutline size={30} />
          <MdOutlineShoppingCart size={30} />
        </div>
      </div>
      <Filter_small isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Categories_Small;
