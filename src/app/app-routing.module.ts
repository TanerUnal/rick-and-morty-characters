import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/characters-page/characters-page.module').then(m => m.CharactersPageModule),
    title: 'Rick and Morty Characters API'
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./pages/characters-page/characters-page.module').then(m => m.CharactersPageModule),
    title: route => 'Rick and Morty Characters API' + (route.queryParams['status'] || route.queryParams['gender'] ? ' | Query Results' : '')
  },
  {
    path: 'characters/:id',
    loadChildren: () =>
      import('./pages/character-details-page/character-details-page.module').then(m => m.CharacterDetailsPageModule),
    title: route => 'Rick and Morty Characters API - Details for Character with ID: ' + route.params['id']
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
