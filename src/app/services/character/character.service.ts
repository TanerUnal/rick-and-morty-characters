import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponseCharacters } from "../../models/api-response-characters";
import { CharacterGender, CharacterStatus } from "../../models/character";
import { CharacterDetails } from "../../models/character-details";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {
  }

  public getCharacters(page?: number, gender?: CharacterGender,
                       status?: CharacterStatus): Observable<ApiResponseCharacters> {
    const queryParams = '?' + (page ? `page=${ page }` : '') + (gender ? `&gender=${ gender }` : '') + (status ? `&status=${ status }` : '');

    return this.http.get<ApiResponseCharacters>(`${ this.url }/character${ queryParams }`);
  }

  public getCharacterDetails(id: string): Observable<CharacterDetails> {
    return this.http.get<CharacterDetails>(`${ this.url }/character/${ id }`);
  }
}
