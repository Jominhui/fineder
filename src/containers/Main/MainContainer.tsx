import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import Main from "../../components/Main";
import useStore from "../../util/lib/useStore";

const MainContainer = () => {
  const [artist, setArtist] = useState<string>("");
  const [song, setSong] = useState<string>("");
  const { store } = useStore();
  const { searchType, handleSearchType } = store.LyricStore;

  return (
    <>
      <Main
        setSong={setSong}
        setArtist={setArtist}
        searchType={searchType}
        handleSearchType={handleSearchType}
      />
    </>
  );
};

export default inject("store")(observer(MainContainer));
