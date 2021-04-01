import React from "react";
import "./Main.scss";
import Sreach from "../Search";
import SongList from "../SongList";
import ArtistList from "../ArtistList";
import Header from "../Header";

interface MainProps {
  searchType: string;
  handleSearchType: (searchType: string) => void;
  setArtist: React.Dispatch<React.SetStateAction<string>>;
  setSong: React.Dispatch<React.SetStateAction<string>>;
}

const Main = ({
  searchType,
  handleSearchType,
  setSong,
  setArtist,
}: MainProps) => {
  return (
    <>
      <div className="main">
        <Header searchType={searchType} handleSearchType={handleSearchType} />
        <Sreach
          searchType={searchType}
          setArtist={setArtist}
          setSong={setSong}
        />
        {searchType === "song" ? <SongList /> : <ArtistList />}
      </div>
    </>
  );
};

export default Main;
