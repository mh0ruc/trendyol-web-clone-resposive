import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";
import { AiFillShop } from "react-icons/ai";
import { TiStar } from "react-icons/ti";
import { BsLightningFill } from "react-icons/bs";


const Flashurun = () => {
  return (
    <div className='hidden lg:block'>
    <ul className=" flex  justify-around w-[900px] p-2 gap-3 font-normal text-[14px] lg:flex-nowrap  md:flex-wrap   ">
      <button className=" hover:border-red-500 border-2 border-white flex gap-1 justify-center items-center px-0 w-32 text-center py-1 rounded-full bg-opacity-50 bg-red-100">
        <span>
          <BsLightningFill size={20} className="text-red-500" />
        </span>{" "}
        flaş ürünler
      </button>
      <button className=" hover:border-yellow-500 border-2 border-white flex gap-1 justify-center items-center px-0 w-44 text-center py-1 rounded-full bg-opacity-50 bg-yellow-100">
        <span>
          <TiStar size={20} className="text-yellow-500" />
        </span>{" "}
        yüksek puanlı ürünler
      </button>

      <button className=" hover:border-blue-500 border-2 border-white flex gap-1 justify-center items-center w-44 px-0 text-center py-1 rounded-full bg-opacity-50 bg-blue-100">
        <span>
          <AiFillShop size={20} className="text-blue-500" />
        </span>{" "}
        yüksek puanlı satıcılar
      </button>
      <button className=" hover:border-gray-500 border-2 border-white flex gap-1 justify-center items-center w-32  px-0 text-center py-1 rounded-full bg-opacity-80 bg-gray-100">
        <span>
          <BsBoxFill size={20} className="text-gray-500" />
        </span>{" "}
        kargo bedava
      </button>
      <button className=" hover:border-green-500 border-2 border-white flex gap-1 justify-center items-center w-32 px-0 text-center py-1 rounded-full bg-opacity-50 bg-green-100">
        <span>
          <FaTruckFast size={20} className="text-green-500" />
        </span>{" "}
        hızlı teslimat
      </button>
    </ul>
    
  </div>
  )
}

export default Flashurun