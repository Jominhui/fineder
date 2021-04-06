import React from "react";
import { goTo } from "react-chrome-extension-router";
import ArtistPage from "../../pages/ArtistPage";
import "./ArtistList.scss";
import { Artist } from "../../util/Types/Artist";

interface ArtistListProps {
  artistList: Artist[];
  handleArtist: (
    artistId: number | null,
    trackArtist: string,
    rank: number | null,
    country: string
  ) => void;
}

const ArtistList = ({ artistList, handleArtist }: ArtistListProps) => {
  return (
    <>
      <div className="ArtistList">
        {artistList.map((res, idx) => (
          <div
            className="ArtistList-container"
            key={idx}
            onClick={() => {
              goTo(ArtistPage);
              handleArtist(
                res.artist_id,
                res.artist_name,
                res.artist_rating,
                res.artist_country
              );
            }}
          >
            <div className="ArtistList-container-box">
              <div className="ArtistList-container-box-name">
                {res.artist_name}
              </div>
              <div className="ArtistList-container-box-info">
                {res.artist_country}
              </div>
            </div>
            <div className="ArtistList-container-go">▶</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArtistList;
