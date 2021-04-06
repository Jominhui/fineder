import React from "react";
import { goBack } from "react-chrome-extension-router";
import "./Artist.scss";
import AlbumCover from "../../assets/images/AlbumCover.svg";
import { Albums } from "../../util/Types/albums";

interface ArtistProps {
  trackArtist: string;
  rank: number | null;
  country: string;
  albums: Albums[];
}

const Artist = ({ trackArtist, rank, country, albums }: ArtistProps) => {
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
          <div className="artist-info-name">{trackArtist}</div>
          <div className="artist-info-rank">{rank}위</div>
          <div className="artist-info-country">{country}</div>
        </div>
        {albums.map((res) => (
          <div className="artist-album">
            <img src={AlbumCover} alt="" />
            <div className="artist-album-info">
              <div className="artist-album-info-name">{res.album_name}</div>
              <div className="artist-album-info-song">{res.album_rating}위</div>
              <div className="artist-album-info-date">
                {res.album_release_date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Artist;
