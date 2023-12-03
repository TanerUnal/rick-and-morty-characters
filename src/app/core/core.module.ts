import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CharactersContainerModule } from "./characters-container/characters-container.module";
import { PaginatorComponent } from './paginator/paginator.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PaginatorComponent,
    FilterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PaginatorComponent,
    FilterComponent
  ],
  imports: [
    RouterModule,
    CharactersContainerModule
  ],
  providers: []
})
export class CoreModule {
}
