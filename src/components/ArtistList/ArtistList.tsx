import React from "react";
import { goTo } from "react-chrome-extension-router";
import ArtistPage from "../../pages/ArtistPage";
import "./ArtistList.scss";

interface ArtistListProps {}

const ArtistList = ({}: ArtistListProps) => {
  return (
    <>
      <div className="ArtistList">
        <div
          className="ArtistList-container"
          onClick={() => {
            goTo(ArtistPage);
          }}
        >
          <div className="ArtistList-container-box">
            <div className="ArtistList-container-box-name">Ash Island</div>
            <div className="ArtistList-container-box-info">info</div>
          </div>
          <div className="ArtistList-container-go">▶</div>
        </div>

        <div className="ArtistList-container">
          <div className="ArtistList-container-box">
            <div className="ArtistList-container-box-name">Jeaha</div>
            <div className="ArtistList-container-box-info">info</div>
          </div>
          <div className="ArtistList-container-go">▶</div>
        </div>
      </div>
    </>
  );
};

export default ArtistList;
