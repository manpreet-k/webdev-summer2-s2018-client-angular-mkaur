import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {

  @Input() question;
  @Input() submission;
  @Input() makeReadOnly;
  @Input() answer;

  hide = false;

  constructor() { }

  selected = trueOrFalse => {
    this.submission[this.question._id] = trueOrFalse;
  }

  markAnswer(optionType) {
    if (optionType) {
      if (this.answer) {
        return true;
      } else {
        return false;
      }
    } else {
      if (this.answer) {
        return false;
      } else {
        return true;
      }
    }
  }

  ngOnInit() {
    if (this.makeReadOnly) {
      this.hide = false;
    } else {
      this.hide = true;
    }
  }

}
