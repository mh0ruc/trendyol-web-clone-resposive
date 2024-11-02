"use client";
import React, { useRef, useState, useEffect } from "react";
import Productcard from "./Productcard";
import Dropdown from "./ProductsList";
import Flashurun from "./flashurun";
import { FaArrowUpLong } from "react-icons/fa6";

const Products = ({ Data }) => {
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
      className="relative p-4 max-w-[1300px]   max-h-[900px] overflow-y-auto custom-scrolbar1 custom-scrollbar1  "
      ref={productsRef}
    >
      <div className="flex flex-col max-w-[980px] w-full  ">
        <div>
          <div className="bilgi  hidden lg:flex  flex-row items-center justify-between">
            <p className="text-sm font-semibold">
              " Sepette Ürünler " araması için 2804 sonuç listeleniyor
            </p>
            <Dropdown />
          </div>
        </div>
        <Flashurun />
        <hr className="my-2 w-full hidden lg:block " />
      </div>
      <div className="flex max-w-[980px] flex-wrap lg:justify-between md:justify-center">
        {Data.map((dt) => (
          <Productcard Data={dt} key={dt.id}  />
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

export default Products;
