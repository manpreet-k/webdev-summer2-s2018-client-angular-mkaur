import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private aRoute: ActivatedRoute,
              private userService: UserServiceClient,
              private router: Router) {
    this.aRoute.params.subscribe(params =>
      this.loadSubmissions(params['quizId']));
  }

  quizId = '';
  submissions = [];
  quiz = {};
  filterUsername = '';

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  loadSubmissions(quizId) {
    this.quizId = quizId;
    this.userService
      .currentUser()
      .then(user => {
        if (user === null) {
          alert('Session timed out');
          this.router.navigate(['login']);
        } else {
          if (user.isadmin === '1') {
            this.service.loadSubmissions(this.quizId)
              .then(submissions => this.submissions = submissions);
          } else {
            this.service.loadSubmissionsForUser(this.quizId, user._id)
              .then(submissions => this.submissions = submissions);
          }
        }
      });
  }

  ngOnInit() {
  }

}
