import React from "react";
import { goTo } from "react-chrome-extension-router";
import "./SongList.scss";
import LyricPage from "../../pages/LyricPage";
import { Track } from "../../util/Types/Track";

interface SongListProps {
  track: Track[];
}

const SongList = ({ track }: SongListProps) => {
  return (
    <>
      <div className="songlist">
        {track.map((res, idx) => (
          <div
            key={idx}
            className="songlist-container"
            onClick={() => {
              goTo(LyricPage);
            }}
          >
            <div className="songlist-container-info">
              <div className="songlist-container-info-title">
                {res.track_name}
              </div>
              <div className="songlist-container-info-artist">
                {res.artist_name}
              </div>
            </div>
            <div className="songlist-container-play">▶</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default React.memo(SongList);
