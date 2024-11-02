"use client";
import React, { useState, useEffect } from "react";

const Categories = () => {
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuHeight, setMenuHeight] = useState(0);

  const categories = [
    {
      name: "Kadın",
      subcategories: [
        "Elbise",
        "Tişört",
        "Gömlek",
        "Kot Pantolon",
        "Kot Ceket",
        "Pantolon",
        "Mont",
        "Bluz",
        "Ceket",
        "Etek",
        "Kazak",
        "Tesettür",
        "Büyük Beden",
        "Trençkot",
        "Yağmurluk & Rüzgarlık",
        "Sweatshirt",
      ],
    },
    { name: "Erkek", subcategories: ["Gömlek", "Pantolon", "Ceket"] },
    {
      name: "Anne & Çocuk",
      subcategories: ["Bebek Giysileri", "Çocuk Ayakkabıları"],
    },
    { name: "Ev & Yaşam", subcategories: ["Mobilya", "Dekorasyon"] },
    { name: "Süpermarket", subcategories: ["Gıda", "İçecek"] },
    {
      name: "Kozmetik",
      subcategories: [
        "Parfüm",
        "Göz Makyajı",
        "Cilt Bakımı",
        "Saç Bakımı",
        "Makyaj",
        "Ağız Bakımı",
        "Cinsel Sağlık",
        "Vücut Bakımı",
        "Hijyenik Ped",
        "Duş Jeli & Kremleri",
        "Epilasyon Ürünleri",
        "Ruj",
        "Dudak Nemlendirici",
        "Aydınlatıcı & Highlighter",
        "Eyeliner",
        "Ten Makyajı",
        "Manikür & Pedikür",
        "BB & CC Krem",
        "El Kremi",
        "Yüz Nemlendirici",
      ],
    },
    { name: "Ayakkabı & Çanta", subcategories: ["Ayakkabı", "Çanta"] },
    { name: "Elektronik", subcategories: ["Bilgisayar", "Telefon"] },
    {
      name: "Spor&Outdoor",
      subcategories: ["Spor Giyim", "Outdoor Ayakkabıları"],
    },
    { name: "Çok Satanlar", subcategories: ["Popüler Ürünler"] },
    { name: "Flaş Ürünler", subcategories: ["İndirimli Ürünler"] },
  ];

  useEffect(() => {
    if (showSubCategories) {
      setMenuHeight(900); // Hedef yüksekliği burada belirtiyoruz
    } else {
      setMenuHeight(0);
    }
  }, [showSubCategories]);

  return (
    <div className=" hidden lg:flex   flex-col justify-center items-center md:px-0 lg:mt-2   relative z-25">
      <div className="h-[50px] border-b-2 w-full ">
        <ul className="flex  flex-row xl:justify-center lg:justify-between  text-[14px] h-[50px] pt-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="font-semibold text-[13px] hover:text-orange-500  xl:px-2 lg:px-0 md:px-0 md:mr-2 hover:border-b-2 hover:border-b-orange-400 cursor-pointer"
              onMouseEnter={() => {
                setShowSubCategories(true);
                setActiveCategory(category);
              }}
              onMouseLeave={() => setShowSubCategories(false)}
            >
              {category.name}
              {(category.name === "Çok Satanlar" ||
                category.name === "Flaş Ürünler") && (
                <span className="ml-1 bg-red-500 text-white rounded-full px-2 text-xs">
                  Yeni
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      {activeCategory && activeCategory && (
        <div
          className={`bg-opacity-25 absolute  top-[50px] left-0 w-full bg-gray-500 flex justify-center items-start z-50 transition-height duration-500 ease-in-out overflow-hidden`}
          style={{ height: `${menuHeight}px` }}
        >
          <div
            onMouseEnter={() => setShowSubCategories(true)}
            onMouseLeave={() => setShowSubCategories(false)}
            className="bg-white p-4 shadow-lg w-[1200px] rounded-b-lg grid grid-cols-4 gap-4 transition-height duration-500 ease-in-out overflow-hidden"
            style={{ height: `${menuHeight-400}px` }}
          >
            <div className="h-full w-[1100px]">
              <h4>{activeCategory.name}</h4>
              <ul className="flex flex-col w-full flex-wrap max-h-[450px] text-[12px] break-words">
                {activeCategory.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className="py-1 w-[120px]">
                    {subcategory}
                  </li>
                ))}
                {activeCategory.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className="py-1 w-[120px]">
                    {subcategory}
                  </li>
                ))}
                   {activeCategory.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className="py-1 w-[120px]">
                    {subcategory}
                  </li>
                ))}
                     {activeCategory.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className="py-1 w-[120px]">
                    {subcategory}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
