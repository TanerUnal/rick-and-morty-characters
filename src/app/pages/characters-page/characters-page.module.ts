import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from "./characters-page.component";
import { CharactersPageRouting } from "./characters-page.routing";

@NgModule({
  declarations: [CharactersPageComponent],
  imports: [CharactersPageRouting, CoreModule, CommonModule],
})
export class CharactersPageModule {
}
