import { Component, OnInit } from '@angular/core';
import { Imovie } from 'src/app/modules/movie';
import { movieArray } from '../../const/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
movieArray : Array<Imovie> = movieArray

  constructor() { }

  ngOnInit(): void {
  }

}
