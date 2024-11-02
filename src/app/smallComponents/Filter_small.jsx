import React, { useState } from "react";
import { BsFillLightningFill } from "react-icons/bs";
import { GiLargeDress } from "react-icons/gi";
import { PiShirtFolded } from "react-icons/pi";
import { MdBabyChangingStation } from "react-icons/md";
import { MdFitnessCenter } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";



const Filter_small = ({ isMenuOpen, toggleMenu }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: "KADIN",
      subcategories: ["Giyim", "Ayakkabı", "Aksesuar", "Çanta", "Kozmetik & Kişisel Bakım", "Plaj Giyim", "İç Giyim", "Spor"],
      icon: <GiLargeDress size={30} className="text-orange-500" />
    },
    {
      name: "ERKEK",
      subcategories: ["Giyim", "Ayakkabı", "Aksesuar", "Çanta", "Kozmetik & Kişisel Bakım", "Plaj Giyim", "İç Giyim", "Spor"],
      icon: <PiShirtFolded size={30} />
    },
    {
      name: "ANNE & ÇOCUK",
      subcategories: ["Giyim", "Ayakkabı", "Aksesuar", "Çanta", "Kozmetik & Kişisel Bakım", "Plaj Giyim", "İç Giyim", "Spor"],
      icon: <MdBabyChangingStation size={30} />
    },
    {
      name: "SPOR & OUTDOOR",
      subcategories: ["Giyim", "Ayakkabı", "Aksesuar", "Çanta", "Kozmetik & Kişisel Bakım", "Plaj Giyim", "İç Giyim", "Spor"],
      icon: <MdFitnessCenter size={30} />
    },
    {
      name: "AYAKKABI & ÇANTA",
      subcategories: ["Giyim", "Ayakkabı", "Aksesuar", "Çanta", "Kozmetik & Kişisel Bakım", "Plaj Giyim", "İç Giyim", "Spor"],
      icon: <FaBagShopping size={30} />
    },
    {
      name: "SAAT & AKSESUAR",
      subcategories: ["Giyim", "Ayakkabı", "Aksesuar", "Çanta", "Kozmetik & Kişisel Bakım", "Plaj Giyim", "İç Giyim", "Spor"],
      icon: <GoClockFill size={30} />
    },
    {
      name: "KOZMETİK & KİŞİSEL",
      subcategories: ["Giyim", "Ayakkabı", "Aksesuar", "Çanta", "Kozmetik & Kişisel Bakım", "Plaj Giyim", "İç Giyim", "Spor"],
      icon: <GiLargeDress size={30} />
    },
  ];

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={` z-10 fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      ></div>
      
      {/* Off-Canvas Menu */}
      <div
        className={` z-10 fixed top-0 left-0 w-4/5 h-full bg-white shadow-lg transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 flex justify-between items-center">
          <span className="text-xl font-semibold">trendyol</span>
          <button onClick={toggleMenu} className="text-2xl">
            &times;
          </button>
        </div>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="px-3 flex items-center h-11 text-white bg-gradient-to-r from-orange-500 to-pink-500"
            >
              <BsFillLightningFill className="text-yellow-500" size={30} />
              <div className="flex flex-col ml-2">
                <p className="text-sm font-semibold">Flash Ürünler</p>
                <p className="text-xs">Hemen al, fırsatı kaçırma!</p>
              </div>
            </a>
          </li>
          {activeCategory === null ? (
            categories.map((category) => (
              <li key={category.name}>
                <div className="flex items-center hover:text-orange-500">
                 
                  <button
                    onClick={() => handleCategoryClick(category.name)}
                    className="w-full text-left gap-2 px-3 flex  items-center "
                  > <div className="text-orange-500">
                  {category.icon}
                </div>
                   {category.name}
                    
                    
                  </button>
                </div>
              </li>
            ))
          ) : (
            <>
              <li>
                <button
                  onClick={() => handleCategoryClick(null)}
                  className="w-full text-left px-3 flex items-center text-orange-500"
                >
                  &larr; Geri
                </button>
              </li>
              {categories
                .find((category) => category.name === activeCategory)
                .subcategories.map((subcategory) => (
                  <li key={subcategory}>
                    <a href="#" className="px-3 flex items-center ">
                      {subcategory}
                    </a>
                  </li>
                ))}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Filter_small;
