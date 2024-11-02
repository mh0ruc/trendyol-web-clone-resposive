import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { TiStar, TiStarOutline } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

const Productcard_small = ({ Data }) => {
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
    <div className="px-1 w-1/2">
      <div
        onClick={() => router.push(`products/${Data.id}`)}
        className="rounded-lg min-h-[500px] h-4/5 bg-white border flex flex-col justify-between mt-4"
      >
        <div className="photo h-2/3 bg-white rounded-lg p-2">
          <div className="flex justify-end items-center">
            <div className="p-1 mr-2 bg-white border rounded-full flex justify-center items-center h-[40px] w-[40px]">
              <FaRegHeart
                size={25}
                className="relative hover:text-orange-500"
              />
            </div>
          </div>
          <div className="flex items-center justify-center h-4/5 w-full">
            <img
              src={Data.image}
              alt=""
              className="object-contain h-full w-full"
            />
          </div>
        </div>
        <div className="h-1/3 flex flex-col justify-between content-between">
          <div className="mx-3 flex flex-col mt-2">
            <div className="title">
              <h2 className="font-semibold text-[14px] break-words">
                {Data.title.substring(0, 20)}
              </h2>
            </div>
            <div>
              <p className="break-words text-[14px]">
                {Data.description.substring(0, 20)}...
              </p>
            </div>
          </div>
          <div className="fiyat mx-3">
            <p className="text-orange-500 font-medium">{Data.price} TL</p>
          </div>
          <div className="flex justify-center items-end">
            <button className="font-medium border-orange-500 mb-4 text-orange-500 border w-5/6 rounded-lg py-1">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard_small;
