import axios from "axios";

class LyricApi {
  async GetTrack(title: string) {
    try {
      const url = `http://localhost:3000/?track=${title}`;

      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new LyricApi();
