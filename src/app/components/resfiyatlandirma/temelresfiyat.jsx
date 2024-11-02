import React, { useState } from "react";
import RrEsIlanEkstralarContainer from "./resextra"; // doğru dosya yolunu belirleyin

const Restemel = () => {
  const [temelOzellikler, setTemelOzellikler] = useState([
    { id: 1, name: "ozellik 1" },
    { id: 2, name: "ozellik 2" },
    { id: 3, name: "ozellik 3" },
  ]);
  const [temelDropdownOpen, setTemelDropdownOpen] = useState(true);

  return (
    <div>
      <div className="shadow h-full mt-5 max-h-[500px] mb-16 w-full max-w-[350px]">
        <div
          className="bg-blue-500 text-white p-2 flex justify-between items-center cursor-pointer"
          onClick={() => setTemelDropdownOpen(!temelDropdownOpen)}
        >
          <span>Temel paket fiyatlandırma</span>
          <span className="text-xl">{temelDropdownOpen ? "↓" : "→"}</span>
        </div>

        {temelDropdownOpen && (
          <div className="max-h-[500px] overflow-auto bg-gray-100 p-2 mt-4">
            <h2 className="text-xl font-semibold">Temel Paket</h2>

            <div className="bg-white p-4 mt-4 shadow overflow-hidden">
              <div className="shadow mb-4">
                <textarea
                  name=""
                  id=""
                  className="w-full h-24 p-2 border"
                ></textarea>
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
                {temelOzellikler.map((ozellik) => (
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

export default Restemel;
