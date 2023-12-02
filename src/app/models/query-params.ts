import { CharacterGender, CharacterStatus } from "./character";

export interface QueryParams {
  p?: number;
  gender?: CharacterGender;
  status?: CharacterStatus;
}
