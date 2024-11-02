"use client";
import React, { useState } from "react";

const Kadın = () => {
  const categories = {
    "Giyim": ["Elbise", "Tişört", "Gömlek", "Kot Pantolon", "Kot Ceket", "Pantolon", "Mont", "Bluz", "Ceket", "Etek", "Kazak", "Tesettür", "Büyük Beden", "Trençkot", "Yağmurluk & Rüzgarlık", "Sweatshirt", "Kaban", "Hırka", "Palto"],
    "Ayakkabı": ["Topuklu Ayakkabı", "Sneaker", "Günlük Ayakkabı", "Babet", "Sandalet", "Bot", "Çizme", "Kar Botu", "Loafer"],
    "Çanta": ["Omuz Çantası", "Sırt Çantası", "Bel Çantası", "Okul Çantası", "Laptop Çantası", "Portföy", "Postacı Çantası", "El Çantası", "Kanvas Çanta", "Makyaj Çantası", "Abiye Çanta", "Çapraz Çanta", "Bez Çanta", "Anne Bebek Çantası", "Evrak Çantası", "Tote Çanta", "Beslenme Çantası", "Kartlık", "Cüzdan", "Kadın Spor Çantası"],
    "İç Giyim": ["Pijama Takımı", "Gecelik", "Sütyen", "İç Çamaşırı Takımları", "Fantezi Giyim", "Çorap", "Korse", "Külot", "Büstiyer", "Bralet", "Atlet & Body", "Kombinezon", "Jartiyer"],
    "Aksesuar & Çanta": ["Çanta", "Saat", "Takı", "Cüzdan", "Atkı", "Bere", "Eldiven", "Kemer", "Şal"],
    "Kozmetik": ["Parfüm", "Göz Makyajı", "Cilt Bakım", "Saç Bakımı", "Makyaj", "Ağız Bakımı", "Cinsel Sağlık", "Vücut Bakımı", "Hijyenik Ped", "Duş Jeli & Kremleri", "Epilasyon Ürünleri", "Ruj", "Dudak Nemlendirici", "Aydınlatıcı & Highlighter", "Eyeliner", "Ten Makyajı", "Manikür & Pedikür", "BB & CC Krem", "El Kremi", "Yüz Nemlendirici"],
    "Spor & Outdoor": ["Sweatshirt", "Tişört", "Spor Sütyeni", "Tayt", "Eşofman", "Koşu Ayakkabısı", "Spor Çantası", "Spor Ekipmanları", "Outdoor Ayakkabı", "Kar Botu", "Outdoor Ekipmanları", "Sporcu Besinleri", "Sporcu Aksesuarları", "Outdoor Çanta", "Kayak Malzemeleri", "Uyku Tulumu", "Mat", "Dağcılık", "Kadın Spor Ceket", "Spor Ayakkabı"],
    "Lüks": ["Lüks Çanta", "Lüks Giyim", "Lüks Ayakkabı"]
  };
  
  return (
    <div className="flex flex-col  bg-gray-400 bg-opacity-50 relative z-10">
        <div className="bg-orange-500 w-[100px] text-center p-2">
            Kadın
        </div>
      <div className="bg-yellow-800 w-[1340px]  flex p-5 relative z-20">
        {Object.keys(categories).map((category, index) => (
          <div key={index}>
            <h2 className="font-bold">{category}</h2>
            <ul>
              {categories[category].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kadın;
