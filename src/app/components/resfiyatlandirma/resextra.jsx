import React, { useState } from "react";

const Resextra = () => {
  return (
    <div className="mt-4 shadow  flex items-center border ">
      <div className=" text-sm p-1  shadow h-full  bg-gray-200 bg-opacity-50 w-full">
        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-1 w-10 h-4" />
          <div className=" flex flex-col gap-4">
            <h2 className="opacity-50">Başlık</h2>
            <h2 className="opacity-50">Açıklama</h2>
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              className="w-32 outline-none text-sm p-1"
              placeholder="Extra Başlığı"
              onChange={(e) => handleChange(index, "baslik", e.target.value)}
            />

            <textarea
              name=""
              className="w-32   outline-none text-sm p-1"
              id=""
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col ml-7 gap-2">
          <h2 className="opacity-50 ">Extra tutar</h2>
          <div>
            <select
              className="border text-sm px-2 w-full"
              onChange={(e) => handleChange(index, "fiyat", e.target.value)}
            >
              <option value="">Fiyat</option>
              <option value="100 tl">100 tl</option>
              <option value="20044 tl">20044 tl</option>
            </select>
            <p className="opacity-50"> ve ek olarak</p>
            <select
              className="border text-sm px-2 mb-1 w-full"
              onChange={(e) =>
                handleChange(index, "teslimSuresi", e.target.value)
              }
            >
              <option value="">Teslim Süresi</option>
              <option value="1 gün">+1 gün</option>
              <option value="2 gün">+2 gün</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

const RrEsIlanEkstralarContainer = () => {
  const [ekstralar, setEkstralar] = useState([]);

  const ekstraEkle = () => {
    setEkstralar([
      ...ekstralar,
      { baslik: "", aciklama: "", fiyat: "", teslimSuresi: "" },
    ]);
  };

  const handleChange = (index, field, value) => {
    const newEkstralar = [...ekstralar];
    newEkstralar[index][field] = value;
    setEkstralar(newEkstralar);
  };

  return (
    <div>
      {ekstralar.map((ekstra, index) => (
        <Resextra key={index} index={index} handleChange={handleChange} />
      ))}
      <button onClick={ekstraEkle} className="p-2  text-blue-500">
        + Ekstra Ekle
      </button>
    </div>
  );
};

export default RrEsIlanEkstralarContainer;
