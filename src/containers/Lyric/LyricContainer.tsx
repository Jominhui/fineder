import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import Lyric from "../../components/Lyric";
import useStore from "../../util/lib/useStore";
import { AxiosError } from "axios";

const LyricContainer = ({}) => {
  const [lyric, setLyric] = useState<string>("");
  const { store } = useStore();
  const { trackId, trackArtist, trackTitle, GetLyric } = store.LyricStore;
  const [notfound, setNotfound] = useState<boolean>(false);

  const getLyricCallback = useCallback(async () => {
    GetLyric(trackId)
      .then((res) => {
        setLyric(res.data.lyrics.lyrics_body);
        if (!res.data.lyrics.lyrics_body) {
          setNotfound(true);
        }
      })
      .catch((err: AxiosError) => {
        if (err.response && err.response.status === 404) {
          setNotfound(true);
        }
      });
  }, [trackId]);

  useEffect(() => {
    getLyricCallback();
  }, [getLyricCallback]);

  return (
    <>
      <Lyric lyric={lyric} trackArtist={trackArtist} trackTitle={trackTitle} />
    </>
  );
};

export default observer(LyricContainer);
