import { QuestionsService } from "./../questions.service";
import { Question } from "./../../_Model/question";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-question",
  templateUrl: "./add-question.component.html",
  styleUrls: ["./add-question.component.css"]
})
export class AddQuestionComponent implements OnInit {
  q: Question = {
    Id: null,
    Body: "",
    Type: null,
    ModelAnswer: null,
    Course: null,
    AnswerList: null,
    Answers: null,
    like: null
  };

  constructor(private qs: QuestionsService) {}

  ngOnInit() {}
  onAdd(f) {
    this.qs.postQuestion(this.q).subscribe(x => console.log(x));
  }
}
