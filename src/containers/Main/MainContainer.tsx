import { AxiosError } from "axios";
import { inject, observer } from "mobx-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Main from "../../components/Main";
import useStore from "../../util/lib/useStore";
import { Track } from "../../util/Types/Track";
import { Artist } from "../../util/Types/Artist";

const MainContainer = () => {
  const [artist, setArtist] = useState<string>("");
  const [song, setSong] = useState<string>("");
  const [track, setTrack] = useState<Track[]>([]);
  const [artistList, setArtistList] = useState<Artist[]>([]);
  const [notfound, setNotfound] = useState<boolean>(false);
  const { store } = useStore();
  const {
    searchType,
    handleSearchType,
    getTrack,
    getArtist,
    handleTrack,
  } = store.LyricStore;

  const isSearchSong = useMemo(() => searchType === "song", [searchType]);

  const getTrackCallBack = useCallback(async () => {
    if (song) {
      setNotfound(false);
      getTrack(song)
        .then((res) => {
          setTrack(res.data.track_list);
          console.log(res.data.track_list);
          if (!res.data.track_list) {
            setNotfound(true);
            console.log(notfound);
          }
        })
        .catch((err: AxiosError) => {
          if (err.response && err.response.status === 404) {
            setNotfound(true);
            console.log(notfound);
          }
        });
    }
  }, [song]);

  useEffect(() => {
    getTrackCallBack();
  }, [getTrackCallBack]);

  const getArtistCallBack = useCallback(async () => {
    if (artist) {
      setNotfound(false);
      getArtist(artist)
        .then((res) => {
          setArtistList(res.data.artist_list);
          if (!res.data.artist_list) {
            setNotfound(true);
          }
        })
        .catch((err: AxiosError) => {
          if (err.response && err.response.status === 404) {
            setNotfound(true);
          }
        });
    }
  }, [artist]);

  useEffect(() => {
    getArtistCallBack();
  }, [getArtistCallBack]);

  return (
    <>
      <Main
        setSong={setSong}
        setArtist={setArtist}
        searchType={searchType}
        handleSearchType={handleSearchType}
        track={track}
        artistList={artistList}
        isSearchSong={isSearchSong}
        handleTrack={handleTrack}
      />
    </>
  );
};

export default inject("store")(observer(MainContainer));
