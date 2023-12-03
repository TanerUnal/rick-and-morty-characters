import { CharacterGender, CharacterStatus } from "./character";

export interface QueryParams {
  page?: number;
  gender?: CharacterGender;
  status?: CharacterStatus;
}
