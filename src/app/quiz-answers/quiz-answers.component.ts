import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private userService: UserServiceClient,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute
      .params
      .subscribe(params => this.loadQuizAnswers(params['quizId'], params['submissionId']));
  }

  quizId = '';
  submissionId = '';
  quiz = {};
  submission = {};
  answers = {};

  loadQuizAnswers(quizId, submissionId) {
    this.quizId = quizId;
    this.submissionId = submissionId;

    this.service
      .findSubmissionById(this.quizId, this.submissionId)
      .then(sub => {
        this.submission = sub;
        this.answers = sub.answers;
        this.service
          .findQuizById(quizId)
          .then(quiz => this.quiz = quiz);
      });
  }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  ngOnInit() {
  }

}
