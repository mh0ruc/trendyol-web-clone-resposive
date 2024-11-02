import React, { useState } from 'react';
import { TbArrowsUpDown } from "react-icons/tb";
import { FaFilter } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const Onerilen = () => {
  const [isSortingModalOpen, setIsSortingModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleSortingModal = () => {
    setIsSortingModalOpen(!isSortingModalOpen);
  };

  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  const categories = [
    {
      name: "Kategori",
      subcategories: ["Yüz Güneş Kremi", "Terlik", "T-Shirt", "Parfüm", "Yüz Kremi", "Omuz Çantası", "Elbise", "Sneaker"]
    },
    {
      name: "Fiyat",
      subcategories: ["0-50 TL", "50-100 TL", "100-200 TL", "200-500 TL", "500+ TL"]
    },
    {
      name: "Boyut",
      subcategories: ["Küçük", "Orta", "Büyük"]
    },
    // Diğer kategoriler ve alt kategoriler buraya eklenebilir
  ];

  return (
    <>
      <div className='border-b h-[50px] items-center w-full flex justify-between text-[18px]'>
        <div className='flex justify-center gap-2 items-center w-1/2 h-full'>
          <TbArrowsUpDown className='text-orange-500' />
          <button onClick={toggleSortingModal}>Önerilen</button>
        </div>
        <div className='border-l items-center flex gap-2 w-1/2 h-full justify-center'>
          <FaFilter className='text-orange-500' />
          <button onClick={toggleFilterModal}>Filtrele</button>
        </div>
      </div>

      {isSortingModalOpen && (
        <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-50 flex justify-center items-end">
          <div className="bg-white z-10 w-full  p-4 rounded-t-lg shadow-lg">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl">Sıralama</h2>
              <button onClick={toggleSortingModal} className="text-2xl">&times;</button>
            </div>
            <ul>
              <li className="py-2">Önerilen <span className="text-orange-500">&#10003;</span></li>
              <li className="py-2">En düşük fiyat</li>
              <li className="py-2">En yüksek fiyat</li>
              <li className="py-2">En yeniler</li>
              <li className="py-2">Çok satanlar</li>
              <li className="py-2">En favoriler</li>
              <li className="py-2">En çok değerlendiren</li>
            </ul>
          </div>
        </div>
      )}

      {isFilterModalOpen && (
        <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-50 flex justify-center items-end">
          <div className="bg-white w-full z-10 h-full p-4 rounded-t-lg shadow-lg overflow-auto">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl">FİLTRELE</h2>
              <button onClick={toggleFilterModal} className="text-2xl">&times;</button>
            </div>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.name} className=' '>
                  <div className="flex border-b justify-between items-center px-3 py-2 text-orange-500 cursor-pointer" onClick={() => toggleCategory(category.name)}>
                    {category.name}
                    <span>{activeCategory === category.name ? <MdKeyboardArrowDown size={30} />
 : <MdOutlineArrowForwardIos />
                    }</span>
                  </div>
                  {activeCategory === category.name && (
                    <ul className="pl-6">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory} className="  flex items-center py-1">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-500 mr-2"/>
                          {subcategory}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="flex justify-between items-center px-3 py-2">
                <span className="text-orange-500">Kuponlu Ürünler</span>
                <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-500"/>
              </li>
            </ul>
            <div className="flex justify-center mt-4">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full">Geri Dön (3)</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Onerilen;
