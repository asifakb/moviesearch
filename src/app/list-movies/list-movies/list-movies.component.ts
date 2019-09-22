import { Component, OnInit } from '@angular/core';
import { Movieinfo } from 'src/app/model/movieinfo';
import {ActivatedRoute } from "@angular/router";
import { MoviesearchService } from 'src/app/services/moviesearch.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies: Movieinfo[];
  item: any;

  constructor(private router: ActivatedRoute, private myService: MoviesearchService) { }

  ngOnInit() {

    console.log("Search STRING IS " +this.router.snapshot.paramMap.get('searchStr'));
    this.myService.Search(this.router.snapshot.paramMap.get('searchStr'))
        .subscribe( data => {
          console.log("DATA FROM OMDB ==>"+data.Search)
        this.movies = data.Search;
      });
  }

}
