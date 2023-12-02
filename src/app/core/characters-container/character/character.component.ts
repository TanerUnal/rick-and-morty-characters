import { Component, Input } from '@angular/core';
import { Character } from "../../../models/character";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  public readonly genderIcons = {
    Male: 'male',
    Female: 'female',
    Genderless: 'agender',
    unknown: ''
  };

  public readonly statusIcons = {
    Alive: 'favorite',
    Dead: 'skull',
    unknown: ''
  };

  @Input()
  public charInfo?: Character;

}
