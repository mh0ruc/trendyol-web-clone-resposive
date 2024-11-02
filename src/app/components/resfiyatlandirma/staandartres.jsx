import React, { useState } from "react";
import RrEsIlanEkstralarContainer from "./resextra"; // doğru dosya yolunu belirleyin

const ResStandart = () => {
  const [standartOzellikler, setStandartOzellikler] = useState([
    { id: 1, name: "ozellik 1" },
    { id: 2, name: "ozellik 2" },
    { id: 3, name: "ozellik 3" },
  ]);
  const [standartDropdownOpen, setStandartDropdownOpen] = useState(false);

  return (
    <div>
      <div className="shadow h-full mt-5 max-h-[500px] mb-16 w-full max-w-[350px]">
        <div
          className="bg-blue-500 text-white p-2 flex justify-between items-center cursor-pointer"
          onClick={() => setStandartDropdownOpen(!standartDropdownOpen)}
        >
          <span>Standart paket fiyatlandırma</span>
          <span className="text-xl">{standartDropdownOpen ? "↓" : "→"}</span>
        </div>

        {standartDropdownOpen && (
          <div className="max-h-[500px] overflow-auto bg-gray-100 p-2 mt-4">
            <h2 className="text-xl font-semibold">Standart Paket</h2>

            <div className="bg-white w-full p-4 mt-4 shadow overflow-hidden">
              <div className="shadow mb-4">
                <textarea name="" id="" className="h-24 p-2 border w-full"></textarea>
              </div>

              <div className="mt-4">
                <label className="block mb-2">Teslim süresi</label>
                <select className="w-full p-2 border">
                  <option>1 gün içinde Teslim</option>
                  <option>2 gün içinde Teslim</option>
                  <option>5 gün içinde Teslim</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block mb-2">Revizyon adedi</label>
                <select className="w-full p-2 border">
                  <option>1 revizyon</option>
                  <option>2 revizyon</option>
                  <option>5 revizyon</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="block mb-2">Özellikler</label>
                {standartOzellikler.map((ozellik) => (
                  <div key={ozellik.id} className="flex items-center mb-2">
                    <span className="flex-1">{ozellik.name}</span>
                    <input type="checkbox" className="ml-2" />
                  </div>
                ))}
              </div>
              <hr />
              Extralar

              <RrEsIlanEkstralarContainer />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResStandart;
