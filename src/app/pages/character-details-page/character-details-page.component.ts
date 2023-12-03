import { Component, OnInit } from '@angular/core';
import { CharacterService } from "../../services/character/character.service";
import { ActivatedRoute } from "@angular/router";
import { CharacterDetails } from "../../models/character-details";

@Component({
  selector: 'app-character-details-page',
  templateUrl: './character-details-page.component.html',
  styleUrls: ['./character-details-page.component.scss']
})
export class CharacterDetailsPageComponent implements OnInit {
  public characterDetails?: CharacterDetails;

  constructor(private characterService: CharacterService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const charId: string | null = this.route.snapshot.paramMap.get('id');

    if (charId) {
      try {
        this.characterService.getCharacterDetails(charId).subscribe(details => {
          this.characterDetails = details;
          console.log(this.characterDetails);
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  public getEpisodesString(episodeUrls: string[]): string {
    const episodes: string[] = [];

    episodeUrls.map(episode => {
      const match = episode.match('episode\\/(\\d+)');
      if (match) {
        episodes.push(match[1]);
      }
    });
    return episodes.join(', ');
  }
}
