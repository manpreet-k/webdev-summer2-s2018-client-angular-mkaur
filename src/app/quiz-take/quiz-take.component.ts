import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-take',
  templateUrl: './quiz-take.component.html',
  styleUrls: ['./quiz-take.component.css']
})
export class QuizTakeComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private userService: UserServiceClient,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute
      .params
      .subscribe(params => this.loadQuiz(params['quizId']));
  }

  quizId = ''
  quiz = {};
  submission = {}

  loadQuiz(quizId) {
    this.quizId = quizId;
    this.service
      .findQuizById(quizId)
      .then(quiz => this.quiz = quiz);
  }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  submit(submission) {
    this.userService.currentUser()
      .then(user => {
        if (user === null) {
          alert('Session timed out');
          this.router.navigate(['login']);
        } else {
          this.service
            .submitQuiz(submission, this.quizId, user.username)
            .then(quizsubmission => {
              console.log(quizsubmission);
              alert('Marks scored = ' + quizsubmission.grade);
              this.router.navigate(['quizzes']);
            });
        }
      });
  }

  ngOnInit() {
  }

}
