import React from "react";
import { goTo } from "react-chrome-extension-router";
import ArtistPage from "../../pages/ArtistPage";
import "./ArtistList.scss";
import { Artist } from "../../util/Types/Artist";

interface ArtistListProps {
  artistList: Artist[];
}

const ArtistList = ({ artistList }: ArtistListProps) => {
  return (
    <>
      <div className="ArtistList">
        {artistList.map((res, idx) => (
          <div
            className="ArtistList-container"
            key={idx}
            onClick={() => {
              goTo(ArtistPage);
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
