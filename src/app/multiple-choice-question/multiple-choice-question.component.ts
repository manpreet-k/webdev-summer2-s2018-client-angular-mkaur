import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input() question;
  @Input() submission;
  @Input() makeReadOnly;
  @Input() answer;

  constructor() { }

  selected = choice => {
    this.submission[this.question._id] = choice;
  }

  ngOnInit() {
    if (this.submission !== undefined) {
      this.submission[this.question._id] = '';
    }
  }

}
