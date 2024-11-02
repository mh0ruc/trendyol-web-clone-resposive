import React from "react";
import Restemel from "./temelresfiyat";
import ResStandart from "./staandartres";
import ResPro from "./proresfiyat";

const Resfiyatdrop = () => {
  return (
    <div className="shadow p-2 w-full">
      <Restemel />
      <ResStandart />
      <ResPro />
    </div>
  );
};

export default Resfiyatdrop;
