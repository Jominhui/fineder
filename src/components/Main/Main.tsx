import React from "react";
import "./Main.scss";
import Sreach from "../Search";
import SongList from "../SongList";
import ArtistList from "../ArtistList";
import Header from "../Header";
import { Track } from "../../util/Types/Track";

interface MainProps {
  searchType: string;
  handleSearchType: (searchType: string) => void;
  setArtist: React.Dispatch<React.SetStateAction<string>>;
  setSong: React.Dispatch<React.SetStateAction<string>>;
  track: Track[];
  isSearchSong: boolean;
}

const Main = ({
  searchType,
  handleSearchType,
  setSong,
  setArtist,
  track,
  isSearchSong,
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
        {isSearchSong ? <SongList track={track} /> : <ArtistList />}
      </div>
    </>
  );
};

export default Main;
