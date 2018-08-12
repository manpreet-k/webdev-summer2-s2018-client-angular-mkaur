import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes = [];
  loggedIn = false;
  isAdmin = '0';

  constructor(private service: QuizServiceClient,
              private userService: UserServiceClient,
              private router: Router) { }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  ngOnInit() {
    this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);

    this.userService.currentUser()
      .then(user => {
        if (user === null) {
          this.loggedIn = false;
          this.isAdmin = '0';
        } else {
          this.loggedIn = true;
          this.isAdmin = user.isadmin;
        }
      });
  }

}
