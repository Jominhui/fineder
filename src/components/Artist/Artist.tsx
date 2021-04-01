import React from "react";
import { goBack } from "react-chrome-extension-router";
import "./Artist.scss";
import AlbumCover from "../../assets/images/AlbumCover.svg";

interface ArtistProps {}

const Artist = ({}: ArtistProps) => {
  return (
    <>
      <div className="artist">
        <div
          className="artist-back"
          onClick={() => {
            goBack();
          }}
        >
          ◀
        </div>

        <div className="artist-info">
          <div className="artist-info-name">Ash Island</div>
          <div className="artist-info-rank">100위</div>
          <div className="artist-info-country">Korea</div>
        </div>
        <div className="artist-album">
          <img src={AlbumCover} alt="" />
          <div className="artist-album-info">
            <div className="artist-album-info-name">ASH</div>
            <div className="artist-album-info-song">수록곡 5</div>
            <div className="artist-album-info-date">2021.03</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;
