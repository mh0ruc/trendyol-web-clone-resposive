"use client";
import React, { useRef, useState, useEffect } from "react";

import { FaArrowUpLong } from "react-icons/fa6";
import Flashurun from "../components/flashurun";
import Productcard from "../components/Productcard";
import Dropdown from "../components/ProductsList";
import Productcard_small from "./Productscard_small";

const Products_small = ({ Data }) => {
  const productsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    productsRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (productsRef.current.scrollTop > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const ref = productsRef.current;
    ref.addEventListener("scroll", toggleVisibility);
    return () => {
      ref.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className="relative  max-w-[1300px]   max-h-[900px] overflow-y-auto custom-scrolbar1 custom-scrollbar1  "
      ref={productsRef}
    >

      
       

   
      <div className="flex  flex-wrap lg:justify-between justify-between ">
        {Data.map((dt) => (
          <Productcard_small Data={dt} key={dt.id}  />
        ))}
      </div>
      {isVisible && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={scrollToTop}
            className="flex items-center text-[14px] justify-center p-2 bg-white  border hover:text-orange-500 text-black border-gray-300 rounded-full shadow hover:bg-gray-100"
          >
            Yukarı Çık<span ><FaArrowUpLong className=""/>
            </span> 
          </button>
        </div>
      )}
    </div>
  );
};

export default Products_small;
