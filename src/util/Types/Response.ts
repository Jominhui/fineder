import { Artist } from "./Artist";
import { Track } from "./Track";

export type Response = {
  status: number;
  message: string;
};

export interface TrackResponse extends Response {
  data: {
    track_list: Track[];
  };
}

export interface ArtistResponse extends Response {
  data: {
    artist_list: Artist[];
  };
}
