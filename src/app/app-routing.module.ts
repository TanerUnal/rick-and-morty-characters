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
    title: route => 'Rick and Morty Characters API' + (route.queryParams['q'] ? ' | Query Results for: ' + route.queryParams['q'] : '')
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
