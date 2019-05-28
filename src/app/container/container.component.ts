import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
flag: boolean;
@Input() home: boolean;

  constructor() { 
    this.flag=true;
    this.home=false;
  }

  ngOnInit() {
  
  }


}
