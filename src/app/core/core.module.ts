import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CharactersContainerModule } from "./characters-container/characters-container.module";
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PaginatorComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PaginatorComponent
  ],
  imports: [
    RouterModule,
    CharactersContainerModule
  ],
  providers: []
})
export class CoreModule {
}
