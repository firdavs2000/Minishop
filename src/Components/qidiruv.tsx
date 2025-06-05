import React from "react";
import qidiruvIcon from "../assets/images/qidiruv.svg";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const Qidiruv: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <div className="qidiruv_wrapper">
      <input
        type="text"
        className="qidiruv"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <img src={qidiruvIcon} alt="Qidiruv" className="qidiruv_icon" />
    </div>
  );
};

export default Qidiruv;




  



