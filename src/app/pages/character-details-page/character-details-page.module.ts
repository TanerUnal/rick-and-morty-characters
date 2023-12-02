import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { CharacterDetailsPageComponent } from "./character-details-page.component";
import { CharacterDetailsPageRouting } from "./character-details-page.routing";

@NgModule({
  declarations: [CharacterDetailsPageComponent],
  imports: [CharacterDetailsPageRouting, CoreModule, CommonModule],
})
export class CharacterDetailsPageModule {
}
