import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies/list-movies.component';
import { SearchMoviesComponent } from './search-movies/search-movies/search-movies.component';


const routes: Routes = [
  { path: 'search', component: SearchMoviesComponent },
  { path: 'list-movies', component: ListMoviesComponent },
  { path : '', component : SearchMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
