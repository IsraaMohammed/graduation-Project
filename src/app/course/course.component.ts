import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() chk:any;
 // @Output() clickTakeExam=new EventEmitter<any>();

   nexte(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;        
}
clicked(){
  //this.chk=document.activeElement.getElementsByTagName('input');
  this.chk=document.getElementsByClassName('custom-control-input');
  this.chk.checked=true;
 // this.clickTakeExam.next(); 
}
  myClickFunction() { 
    var x = document.activeElement;
    var nextelem=this.nexte(x);
    if (nextelem.style.display === "none") {
      nextelem.style.display = "block";
     // nextelem.style.transitionDuration="5s";
    } else {
      nextelem.style.display = "none";
     // nextelem.style.transitionDuration="5s";

    }
 }


  


//   getCheckedCheckboxesFor(checkboxName) {
//   var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]');
//     for (let i = 0; i < checkboxes.length; i++) {
      
      
//     }
// }
  
  constructor() { }

  ngOnInit() {
  }

}

