import React from "react";
import "./Search.scss";

interface SearchProps {
  searchType: string;
  setArtist: React.Dispatch<React.SetStateAction<string>>;
  setSong: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ searchType, setSong, setArtist }: SearchProps) => {
  return (
    <>
      <div className="Search">
        <input
          type="text"
          placeholder={
            searchType === "song"
              ? "🔍 노래 제목을 검색해주세요."
              : "🔍 아티스트 이름을 검색해주세요."
          }
          onChange={
            searchType === "song"
              ? (e) => setSong(e.target.value)
              : (e) => setArtist(e.target.value)
          }
        />
      </div>
    </>
  );
};

export default Search;
