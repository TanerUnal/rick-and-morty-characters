import { QueryInfo } from "./query-info";
import { Character } from "./character";

export interface ApiResponseCharacters {
  info: QueryInfo;
  results: Character[];
}
