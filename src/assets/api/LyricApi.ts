import axios from "axios";

class LyricApi {
  async GetTrack(title: string) {
    try {
      const url = `http://localhost:3000/track?track=${title}`;

      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetArtist(name: string) {
    try {
      const url = `http://localhost:3000/artist?artist=${name}`;

      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetLyric(trackId: number | null) {
    try {
      const url = `http://localhost:3000/Lyric?track=${trackId}`;

      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new LyricApi();
