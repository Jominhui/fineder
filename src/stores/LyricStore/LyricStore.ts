import { action, observable } from "mobx";
import { autobind } from "core-decorators";

@autobind
class LyricStore {
  @observable searchType: string = "song";

  @action
  handleSearchType = (searchType: string) => {
    this.searchType = searchType;
  };
}

export default LyricStore;
