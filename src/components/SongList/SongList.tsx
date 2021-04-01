import React from "react";
import { goTo } from "react-chrome-extension-router";
import "./SongList.scss";
import LyricPage from "../../pages/LyricPage";

interface SongListProps {}

const SongList = ({}: SongListProps) => {
  return (
    <>
      <div className="songlist">
        <div className="songlist-container" onClick={() => goTo(LyricPage)}>
          <div className="songlist-container-info">
            <div className="songlist-container-info-title">Lonely</div>
            <div className="songlist-container-info-artist">ASH ISLAND</div>
          </div>
          <div className="songlist-container-play">▶</div>
        </div>

        <div className="songlist-container">
          <div className="songlist-container-info">
            <div className="songlist-container-info-title">Lonely</div>
            <div className="songlist-container-info-artist">ASH ISLAND</div>
          </div>
          <div className="songlist-container-play">▶</div>
        </div>
      </div>
    </>
  );
};

export default SongList;
