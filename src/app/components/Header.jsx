"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import Categories_Small from "../smallComponents/Categories_Small";

const Header = () => {
  const [showKadın, setShowKadın] = useState(false);

  const handleMouseEnter = () => {
    setShowKadın(true);
  };

  const handleMouseLeave = () => {
    setShowKadın(false);
  };

  return (
    <>
    <div className="lg:hidden ">
      <Categories_Small/>

    </div>
    <div className="navbar hidden lg:flex lg:h-[72px] h-[70px]  flex-col justify-evenly    lg:mb-0  md:px-0 2xl:px-32 xl:px-5 lg:px-0 w-full">
      <div className="nav flex  flex-row lg:justify-between lg:items-center items-center h-full p-3 lg:mt-4 ">
     
        <div className="logo font-semibold flex items-start h-10  md:text-3xl  ">
              <div>trendyol</div>
            </div>
        <div className="hidden lg:flex opacity-75 font-thin search  justify-center p-1 bg-gray-200 rounded-md mx-3 ">
          <input
            type="text"
            placeholder="Arama yap ..."
            className="h-[10px] bg-gray-200 md:w-[600px] p-3 outline-none"
          />
          <IoIosSearch size={"25"} className="text-orange-500 " />
        </div>
        <div className=" lg:flex hidden fav_sepet text-[14px]  mx-5  md:flex-row justify-between items-center w-full  mt-4 md:mt-0">
          <button className="gap-1 giriş yap flex items-center font-semibold hover:text-orange-500 transition-all">
            <RiAccountCircleFill size={20} /> Giriş Yap
          </button>
          <button className="gap-1 sepet font-semibold flex items-center hover:text-orange-500 transition-all">
            <FaRegHeart size={20} /> Favorilerim
          </button>
          <button className="gap-1 fav flex items-center font-semibold hover:text-orange-500 transition-all">
            <MdOutlineShoppingCart size={20} /> Sepetim
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
