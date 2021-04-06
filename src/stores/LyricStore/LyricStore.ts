import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import {
  ArtistResponse,
  LyricResponse,
  TrackResponse,
} from "../../util/Types/Response";
import LyricApi from "../../assets/api/LyricApi";

@autobind
class LyricStore {
  @observable searchType: string = "song";
  @observable trackTitle: string = "";
  @observable trackArtist: string = "";
  @observable trackId: number | null = null;

  @action
  handleSearchType = (searchType: string) => {
    this.searchType = searchType;
  };

  @action
  handleTrack = (
    trackId: number | null,
    trackArtist: string,
    trackTitle: string
  ) => {
    this.trackId = trackId;
    this.trackArtist = trackArtist;
    this.trackTitle = trackTitle;
  };

  @action
  getTrack = async (title: string): Promise<TrackResponse> => {
    const response: TrackResponse = await LyricApi.GetTrack(title);

    return response;
  };

  @action
  getArtist = async (name: string): Promise<ArtistResponse> => {
    const response: ArtistResponse = await LyricApi.GetArtist(name);

    return response;
  };

  @action
  GetLyric = async (trackId: number | null): Promise<LyricResponse> => {
    const response: LyricResponse = await LyricApi.GetLyric(trackId);

    return response;
  };
}

export default LyricStore;
