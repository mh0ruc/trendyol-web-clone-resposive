"use client"
import Image from "next/image";
import Filter from "./components/Filter";
import Productcard from "./components/Productcard";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import Filter_small from "./smallComponents/Filter_small";
import Sepet_urun from "./smallComponents/Sepet_urun";
import Onerilen from "./smallComponents/Onerilen";
import Products_small from "./smallComponents/Products_small";


const Page = () => {
  const [Data, setData] = useState([])
  const fetchdata= async()=>{
    const res= await fetch("https://fakestoreapi.com/products")
    const data= await res.json()
  setData(data)
    
  }
  useEffect(()=>{
    fetchdata()
  })

  return (
    <>
    <div className="lg:hidden ">
        <Filter_small/>
        <Sepet_urun/>
        <Onerilen/>
        <Products_small Data={Data}/>
    </div>
   <div className=" hidden lg:flex max-h[900px]  overflow-auto ">
    <Filter className="lg:block hidden"/>
    <Products Data={Data}/>
   </div>
   </>
  );
}

export default Page
