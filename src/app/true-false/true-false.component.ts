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

  constructor() { }

  selected = trueOrFalse => {
    if (trueOrFalse) {
      this.submission[this.question._id] = 'true';
    } else {
      this.submission[this.question._id] = 'false';
    }
  }

  ngOnInit() {
    if (this.submission !== undefined) {
      this.submission[this.question._id] = '';
    }
  }

}
