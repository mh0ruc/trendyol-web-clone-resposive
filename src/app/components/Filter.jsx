"use client"
import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const Filter = () => {
    const [isactive1, setisactive1] = useState(true)
    const [isactive2, setisactive2] = useState(true)

    const [isactive3, setisactive3] = useState(true)
    
    const [isactive5, setisactive5] = useState(true)

    const [isactive4, setisactive4] = useState(true)
    const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
    const ageRanges = ["0-3 Ay", "3-6 Ay", "6-12 Ay", "1-2 Yaş", "2-3 Yaş", "3-4 Yaş", "4-5 Yaş", "5-6 Yaş"];
    const pantSizes = ["32", "34", "36", "38", "40", "42", "44", "46"];

  return (
    <div className='lg:inline hidden  filter lg:ml-0 md:ml-0 2xl:ml-[160px] xl:ml-5 text-[13px] custom-scrollbar1  max-h-[650px] overflow-y-auto min-w-[200px]'>
       
<div>
    <div className='cursor-pointer border-b flex justify-between items-center h-[40px]'onClick={()=>setisactive1(!isactive1)}>
        <h3 className='font-medium'>ilgili Kategoriler</h3>
        <RiArrowDropDownLine size={25} />
    </div >
    {isactive1 && (
        <div className=' custom-scrollbar border-b scroll  w-max-[120px] max-h-40 overflow-y-auto   border-gray-300 mt-2'>
          <ul>
            <li>tshirt</li>
            <li>pantolon</li>
            <li>ayakkabı</li>
            <li>telefon</li>
            <li>tshirt</li>
            <li>pantolon</li>
            <li>ayakkabı</li>
            <li>telefon</li>
            <li>tshirt</li>
            <li>pantolon</li>
            <li>ayakkabı</li>
            <li>telefon</li>
            <li>tshirt</li>
            <li>pantolon</li>
            <li>ayakkabı</li>
            <li>telefon</li>
            <li>tshirt</li>
            <li>pantolon</li>
            <li>ayakkabı</li>
            <li>telefon</li>
            <li>tshirt</li>
            <li>pantolon</li>
            <li>ayakkabı</li>
            <li>telefon</li>
          </ul>
        </div>
      )}
   

</div>
      
        <div><div className='  cursor-pointer border-b flex justify-between items-center h-[40px]'onClick={()=>setisactive2(!isactive2)}>
        <h3 className='font-medium'>Marka</h3>
        <RiArrowDropDownLine size={25}/>
    </div>
    {
        isactive2 && (
            <div className=' custom-scrollbar border-b w-max-[120px] max-h-40 overflow-y-auto  border-gray-300 mt-2'>
            <ul>
              <li>tshirt</li>
              <li>pantolon</li>
              <li>ayakkabı</li>
              <li>telefon</li>
              <li>tshirt</li>
              <li>pantolon</li>
              <li>ayakkabı</li>
              <li>telefon</li>
              <li>tshirt</li>
              <li>pantolon</li>
              <li>ayakkabı</li>
              <li>telefon</li>
              <li>tshirt</li>
              <li>pantolon</li>
              <li>ayakkabı</li>
              <li>telefon</li>
              <li>tshirt</li>
              <li>pantolon</li>
              <li>ayakkabı</li>
              <li>telefon</li>
              <li>tshirt</li>
              <li>pantolon</li>
              <li>ayakkabı</li>
              <li>telefon</li>
            </ul>
          </div>
        )}
   </div>
   <div><div className='  cursor-pointer border-b flex justify-between items-center h-[40px]'onClick={()=>setisactive3(!isactive3)}>
        <h3 className='font-medium'>beden</h3>
        <RiArrowDropDownLine size={25}/>
    </div>
    {
        isactive3 && (
            <div className=' custom-scrollbar border-b w-max-[120px] max-h-40 overflow-y-auto   border-gray-300 mt-2'>
            <ul>
            {sizes.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
               {pantSizes.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
               {ageRanges.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
             
            </ul>
          </div>
        )}
   </div>
        <div><div className='cursor-pointer border-b flex justify-between items-center h-[40px]'onClick={()=>setisactive4(!isactive4)}>
        <h3 className='font-medium'>Fiyat</h3>
        <RiArrowDropDownLine size={25} />
    </div>
    {
        isactive4 && (
            <div className='max-w-120px '>
                <input placeholder='en az' type="number"  className='border mt-2 rounded-md w-20'/> - <input placeholder='en çok' type="text " className='border mt-2 rounded-md w-20' />
            <ul>
                <li>
                   <input type="checkbox" /> 200-600
                </li>
                <li>
                <input type="checkbox" />
                    600-2000
                </li>
                <li>
                <input type="checkbox" />
                    2000-10000
                </li>
                <li>
                <input type="checkbox" />
                    10000+
                </li>
            </ul>
        </div>
        )
    }
   </div>
   <div><div className='  cursor-pointer border-b flex justify-between items-center h-[40px]'onClick={()=>setisactive5(!isactive5)}>
        <h3 className='font-medium'>beden</h3>
        <RiArrowDropDownLine size={25}/>
    </div>
    {
        isactive5 && (
            <div className=' custom-scrollbar border-b w-max-[120px] max-h-40 overflow-y-auto   border-gray-300 mt-2'>
            <ul>
            {sizes.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
               {pantSizes.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
               {ageRanges.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
             
            </ul>
          </div>
        )}
   </div>
    </div>
  )
}

export default Filter