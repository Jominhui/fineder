import React from "react";
import { observer } from "mobx-react";
import Artist from "../../components/Artist";

const ArtistContainer = ({}) => {
  return (
    <>
      <Artist />
    </>
  );
};

export default observer(ArtistContainer);
