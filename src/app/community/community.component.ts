import { QuestionsService } from "./questions.service";
import { Component, OnInit } from "@angular/core";
import { Question } from "../_Model/question";

@Component({
  selector: "app-community",
  templateUrl: "./community.component.html",
  styleUrls: ["./community.component.css"]
})
export class CommunityComponent implements OnInit {
  questions: Question[];
  isLike: boolean = false;
  constructor(private qs: QuestionsService) {}

  ngOnInit() {
    this.qs.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }
  onLike(q) {
    q.like = !q.like;
    if (q.like) {
      q.icon = "fa-heart";
    } else {
      q.icon = "fa-heart-o";
    }
  }
  aa() {
    console.log(this.questions);
  }
}
