import { AxiosError } from "axios";
import { inject, observer } from "mobx-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Main from "../../components/Main";
import useStore from "../../util/lib/useStore";
import { Track } from "../../util/Types/Track";

const MainContainer = () => {
  const [artist, setArtist] = useState<string>("");
  const [song, setSong] = useState<string>("");
  const [track, setTrack] = useState<Track[]>([]);
  const [notfound, setNotfound] = useState<boolean>(false);
  const { store } = useStore();
  const { searchType, handleSearchType, getTrack } = store.LyricStore;

  const isSearchSong = useMemo(() => searchType === "song", [searchType]);

  const getTrackCallBack = useCallback(async () => {
    if (song) {
      setNotfound(false);
      getTrack(song)
        .then((res) => {
          setTrack(res.data.track_list);
          if (!res.data.track_list) {
            setNotfound(true);
          }
        })
        .catch((err: AxiosError) => {
          if (err.response && err.response.status === 404) {
            setNotfound(true);
          }
        });
    }
  }, [song]);

  useEffect(() => {
    getTrackCallBack();
  }, [getTrackCallBack]);

  return (
    <>
      <Main
        setSong={setSong}
        setArtist={setArtist}
        searchType={searchType}
        handleSearchType={handleSearchType}
        track={track}
        isSearchSong={isSearchSong}
      />
    </>
  );
};

export default inject("store")(observer(MainContainer));
