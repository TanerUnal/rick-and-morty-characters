import { Component, Input } from '@angular/core';
import { Character } from "../../models/character";

@Component({
  selector: 'app-character-collection',
  templateUrl: './character-collection.component.html',
  styleUrls: ['./character-collection.component.scss']
})
export class CharacterCollectionComponent {
  @Input()
  public characters: Character[] = [];

}
