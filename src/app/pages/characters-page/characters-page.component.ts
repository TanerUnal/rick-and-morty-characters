import { Component, OnInit } from '@angular/core';
import { CharacterService } from "../../services/character/character.service";
import { Character, CharacterGender, CharacterStatus } from "../../models/character";
import { switchMap } from "rxjs";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  public characters: Character[] = [];

  public page?: number;
  public queryStatus?: CharacterStatus;
  public queryGender?: CharacterGender;

  constructor(private characterService: CharacterService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      switchMap(params => {
        this.page = params['p'];
        this.queryGender = params['gender'];
        this.queryStatus = params['status'];

        return this.characterService.getCharacters(this.page);
      })
    ).subscribe(collection => {
      this.characters = collection.results;
      // read/use entry count and page count here if needed
      // collection.info ...
    });
  }
}
