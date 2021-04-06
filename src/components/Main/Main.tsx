import React from "react";
import "./Main.scss";
import Sreach from "../Search";
import SongList from "../SongList";
import ArtistList from "../ArtistList";
import Header from "../Header";
import { Track } from "../../util/Types/Track";
import { Artist } from "../../util/Types/Artist";

interface MainProps {
  searchType: string;
  handleSearchType: (searchType: string) => void;
  setArtist: React.Dispatch<React.SetStateAction<string>>;
  setSong: React.Dispatch<React.SetStateAction<string>>;
  track: Track[];
  artistList: Artist[];
  isSearchSong: boolean;
  handleTrack: (
    trackId: number | null,
    trackArtist: string,
    trackTitle: string
  ) => void;
}

const Main = ({
  searchType,
  handleSearchType,
  setSong,
  setArtist,
  track,
  artistList,
  isSearchSong,
  handleTrack,
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
        {isSearchSong ? (
          <SongList track={track} handleTrack={handleTrack} />
        ) : (
          <ArtistList artistList={artistList} />
        )}
      </div>
    </>
  );
};

export default Main;
