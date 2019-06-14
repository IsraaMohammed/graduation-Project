import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
levels:string[];
  constructor() { 
    this.levels=["C","C++","Basic SQL","OOP"];
  }

  ngOnInit() {
  }


}
