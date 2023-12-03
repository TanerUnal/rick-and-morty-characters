import { Component, OnInit } from '@angular/core';
import { CharacterService } from "../../services/character/character.service";
import { Character, CharacterGender, CharacterStatus } from "../../models/character";
import { switchMap } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { QueryParams } from "../../models/query-params";

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  public characters: Character[] = [];

  public page: number = 1;

  public lastPage: number = 1;
  public queryParams: QueryParams = {};

  constructor(private characterService: CharacterService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      switchMap(params => {
        if (params['page']) {
          this.page = Number(params['page']);
        }
        this.queryParams.page = this.page;

        if (params['gender']) {
          this.queryParams.gender = params['gender'];
        }
        if (params['status']) {
          this.queryParams.status = params['status'];
        }

        return this.characterService.getCharacters(...Object.values(this.queryParams));
      })
    ).subscribe(collection => {
      this.characters = collection.results;
      this.lastPage = Number(collection.info.pages);
    });
  }
}
