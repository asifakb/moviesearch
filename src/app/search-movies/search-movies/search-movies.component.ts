import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {MoviesearchService} from "../../services/moviesearch.service";
import { Movieinfo } from 'src/app/model/movieinfo';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  searchForm : FormGroup;

  movies: Movieinfo[];

  constructor(private formBuilder: FormBuilder, private router: Router, private searchService: MoviesearchService )
  {

  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['']     
    });
  }

  SearchMovies()
  {
    console.log(this.searchForm.value);
    this.router.navigate(['list-movies',{searchStr: this.searchForm.controls.search.value}]);
  }
}
