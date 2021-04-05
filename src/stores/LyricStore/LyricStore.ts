import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import { TrackResponse } from "../../util/Types/Response";
import LyricApi from "../../assets/api/LyricApi";

@autobind
class LyricStore {
  @observable searchType: string = "song";

  @action
  handleSearchType = (searchType: string) => {
    this.searchType = searchType;
  };

  @action
  getTrack = async (title: string): Promise<TrackResponse> => {
    const response: TrackResponse = await LyricApi.GetTrack(title);

    return response;
  };
}

export default LyricStore;
