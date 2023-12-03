import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponseCharacters } from "../../models/api-response-characters";
import { CharacterDetails } from "../../models/character-details";
import { QueryParams } from "../../models/query-params";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {
  }

  public getCharacters(queryParams: QueryParams): Observable<ApiResponseCharacters> {
    const queryParamArray: string[] = [];
    Object.keys(queryParams).map(queryParam => {
      queryParamArray.push(`${ queryParam }=${ queryParams[(queryParam as keyof QueryParams)] }`);
    });
    const query = `?${ queryParamArray.join('&') }`;

    return this.http.get<ApiResponseCharacters>(`${ this.url }/character${ query }`);
  }

  public getCharacterDetails(id: string): Observable<CharacterDetails> {
    return this.http.get<CharacterDetails>(`${ this.url }/character/${ id }`);
  }
}
