import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';


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
    setTimeout(()=>{this.load.nativeElement.style.display='none'},3500)
    //3500
  }
  @ViewChild('loading')
  load:ElementRef;

  ngOnInit() {
  
  }


}
