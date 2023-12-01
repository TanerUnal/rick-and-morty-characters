export type CharacterStatus = 'alive' | 'dead' | 'unknown';
export type CharacterGender = 'female' | 'male' | 'genderless' | 'unknown';

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  gender: CharacterGender;
}
