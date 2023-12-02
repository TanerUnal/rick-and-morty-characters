import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CharactersContainerModule } from "./characters-container/characters-container.module";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CharactersContainerModule
  ],
  providers: []
})
export class CoreModule {
}
