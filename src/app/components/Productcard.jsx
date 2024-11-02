import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Image from "next/image";
import { TiStar, TiStarOutline } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
const Productcard = ({ Data }) => {
  const [rate, setRate] = useState();
  const [randomSayi, setRandomSayi] = useState();
  const [showFirst, setShowFirst] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setRate(Data.rating.rate);
    setRandomSayi(getRandomNumber(1000, 10000));
  }, [Data.rating.rate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 2000); // 2 saniyede bir değişir
    return () => clearInterval(interval);
  }, []);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div
      onClick={() => router.push(`products/${Data.id}`)}
      className="rounded-lg  w-[230px] h-[600px] bg-white border flex flex-col justify-between md:mx-1  mx-0 mt-4"
    >
      <div className="photo max-h-[400px] min-h-[400px] bg-white rounded-lg p-2  ">
        <div className=" flex justify-end">
          <div className="p-1  mr-2 bg-white border rounded-full flex justify-center items-center h-[40px] w-[40px] ">
            <FaRegHeart size={25} className="relative hover:text-orange-500" />
          </div>
        </div>
        <div className="flex items-center max-h-[350px] min-h-[320px]">
        <Image
          width={290}
          height={68}
          src={Data.image}
          alt="Product "
          className="max-h-[240px] object-contain "
        /></div>
      </div>
      <div className="mx-3 flex flex-col gap- mt-2">
        <div className="title">
          <h2 className=" font-semibold text-[14px] break-words">
            {Data.title.substring(0, 20)}
          </h2>
        </div>
        <div>
          <p className="break-words text-[14px]">
            {Data.description.substring(0, 20)}...
          </p>
        </div>
      </div>
      <div className="mx-3 text-[14px] flex items-center gap-1">
        {showFirst ? (
          <div className="flex items-center animate-slideUp">
            <FaHeart size={15} className="text-orange-600" />
            {randomSayi} kişi favoriledi
          </div>
        ) : (
          <div className="flex items-center animate-slideUp">
            <FaShoppingCart size={15} className="text-orange-600" />
            {randomSayi} kişi satın aldı
          </div>
        )}
      </div>
      <div className="puan mx-3">
        <ul className="flex text-yellow-500 items-center">
          {rate >= 1 ? (
            <li>
              <TiStar />
            </li>
          ) : (
            <li>
              <TiStarOutline />
            </li>
          )}
          {rate >= 2 ? (
            <li>
              <TiStar />
            </li>
          ) : (
            <li>
              <TiStarOutline />
            </li>
          )}
          {rate >= 3 ? (
            <li>
              <TiStar />
            </li>
          ) : (
            <li>
              <TiStarOutline />
            </li>
          )}
          {rate >= 4 ? (
            <li>
              <TiStar />
            </li>
          ) : (
            <li>
              <TiStarOutline />
            </li>
          )}
          {rate >= 5 ? (
            <li>
              <TiStar />
            </li>
          ) : (
            <li>
              <TiStarOutline />
            </li>
          )}
          <li className="text-[14px] text-black opacity-50">
            ({Data.rating.count})
          </li>
        </ul>
      </div>
      <div className="fiyat mx-3 my-3 mb-8">
        <p className="text-orange-500 font-medium ">{Data.price} TL</p>
      </div>
    </div>
  );
};

export default Productcard;
