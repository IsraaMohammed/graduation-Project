import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  openBackDropCustomClass(contentsignup) {
    this.modalService.open(contentsignup, {backdropClass: 'light-blue-backdrop'});
  }
    openBackDropCustomClassLogin(content){
      this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    }
  


  ngOnInit() {
  }

}
