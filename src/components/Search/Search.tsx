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
              ? "π λΈλ μ λͺ©μ κ²μν΄μ£ΌμΈμ."
              : "π μν°μ€νΈ μ΄λ¦μ κ²μν΄μ£ΌμΈμ."
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

export default React.memo(Search);
