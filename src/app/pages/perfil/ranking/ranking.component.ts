import { Component, Input, OnInit } from '@angular/core';
import { Ranking } from 'src/app/models/perfil.models';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {

  @Input() dataRanking: Ranking;

  constructor() { }

  ngOnInit() {}

}
