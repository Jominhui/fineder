import React from "react";
import { observer } from "mobx-react";
import Lyric from "../../components/Lyric";

const LyricContainer = ({}) => {
  return (
    <>
      <Lyric />
    </>
  );
};

export default observer(LyricContainer);
