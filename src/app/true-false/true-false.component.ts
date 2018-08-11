import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {

  @Input() question;
  @Input() submission;

  constructor() { }

  selected = trueOrFalse => {
    this.submission[this.question._id] = trueOrFalse;
  }

  ngOnInit() {
  }

}
