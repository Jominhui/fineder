import React from "react";
import "./Header.scss";

interface HeaderProps {
  searchType: string;
  handleSearchType: (searchType: string) => void;
}

const Header = ({ searchType, handleSearchType }: HeaderProps) => {
  return (
    <>
      <div className="header">
        <div
          className="header-controll"
          onClick={() => handleSearchType("song")}
          style={{ color: searchType === "song" ? "black" : "gray" }}
        >
          가사검색
        </div>
        <div
          className="header-controll"
          onClick={() => handleSearchType("artist")}
          style={{ color: searchType === "artist" ? "black" : "gray" }}
        >
          아티스트검색
        </div>
      </div>
    </>
  );
};

export default React.memo(Header);
