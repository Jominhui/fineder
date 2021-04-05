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
