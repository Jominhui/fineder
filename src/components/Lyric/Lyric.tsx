import React from "react";
import { goBack } from "react-chrome-extension-router";
import "./Lyric.scss";

interface LyricProps {}

const Lyric = ({}: LyricProps) => {
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
          <div className="lyric-info-title">Lonely</div>
          <div className="lyric-info-artist">Ash Island</div>
        </div>
        <div className="lyric-viewlyric">가사 없음</div>
        <div className="lyric-goto">
          <div className="lyric-goto-info">
            <div className="lyric-goto-info-title">Lonely</div>
            <div className="lyric-goto-info-name">ashisland</div>
          </div>
          <div className="lyric-goto-photo">썸네일 없음</div>
        </div>
      </div>
    </>
  );
};

export default Lyric;
