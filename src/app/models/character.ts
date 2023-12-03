export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  gender: CharacterGender;
  image: string;
  species: string;
}

export const charStatusOptions = ['Alive', 'Dead', 'unknown'];
export const charGenderOptions = ['Female', 'Male', 'Genderless', 'unknown'];
