import { Component, OnInit, Input } from '@angular/core';
import { Imovie } from 'src/app/modules/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() getmovie !: Array<Imovie>

  constructor() { }

  ngOnInit(): void {
  }

}
