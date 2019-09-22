import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesearchService} from './services/moviesearch.service';
import { ListMoviesComponent } from './list-movies/list-movies/list-movies.component';
import { SearchMoviesComponent } from './search-movies/search-movies/search-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    SearchMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MoviesearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
