import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import Artist from "../../components/Artist";
import useStore from "../../util/lib/useStore";
import { Albums } from "../../util/Types/albums";
import { AxiosError } from "axios";

const ArtistContainer = ({}) => {
  const [albums, setalbums] = useState<Albums[]>([]);
  const { store } = useStore();
  const { artistId, rank, trackArtist, country, getInfo } = store.LyricStore;
  const [notfound, setNotfound] = useState<boolean>(false);

  const getInfoCallBack = useCallback(async () => {
    setNotfound(false);
    getInfo(artistId)
      .then((res) => {
        setalbums(res.data.album_list);
        if (!res.data.album_list) {
          setNotfound(true);
        }
      })
      .catch((err: AxiosError) => {
        if (err.response && err.response.status === 404) {
          setNotfound(true);
        }
      });
  }, [artistId]);

  useEffect(() => {
    getInfoCallBack();
  }, [getInfoCallBack]);
  return (
    <>
      <Artist
        trackArtist={trackArtist}
        rank={rank}
        country={country}
        albums={albums}
      />
    </>
  );
};

export default observer(ArtistContainer);
