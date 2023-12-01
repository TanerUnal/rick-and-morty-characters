import { CharacterGender, CharacterStatus } from "./character";

export interface CharacterDetails {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: { name: string, url: string };
  location: { name: string, url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
