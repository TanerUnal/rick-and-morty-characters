import { NgModule } from '@angular/core';
import { CharacterCollectionComponent } from './character-collection.component';
import { CharacterComponent } from './character/character.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    CharacterCollectionComponent,
    CharacterComponent
  ],
  exports: [
    CharacterCollectionComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  providers: []
})
export class CharactersContainerModule {
}
