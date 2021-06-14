import React from "react";
import { goBack } from "react-chrome-extension-router";
import "./Lyric.scss";

interface LyricProps {
  lyric: string;
  trackArtist: string;
  trackTitle: string;
}

const Lyric = ({ lyric, trackTitle, trackArtist }: LyricProps) => {
  return (
    <>
      <div className="lyric">
        <div
          className="lyric-back"
          onClick={() => {
            goBack();
          }}
        >
          ◀
        </div>

        <div className="lyric-info">
          <div className="lyric-info-title">{trackTitle}</div>
          <div className="lyric-info-artist">{trackArtist}</div>
        </div>
        <div className="lyric-viewlyric">{lyric}</div>
        <div
          className="lyric-goto"
          onClick={() =>
            window.open(
              `https://www.youtube.com/results?search_query=${trackArtist}-${trackTitle}`,
              "_blank"
            )
          }
        >
          <div className="lyric-goto-info">
            <div className="lyric-goto-info-title">{trackTitle}</div>
            <div className="lyric-goto-info-name">{trackArtist}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lyric;
