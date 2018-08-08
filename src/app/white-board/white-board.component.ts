 import { Component, OnInit } from '@angular/core';
 import {UserServiceClient} from '../services/user.service.client';
 import {Router} from '@angular/router';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  loggedInUserId = '';

  constructor(private userService: UserServiceClient,
              private router: Router) {
    userService.currentUser()
      .then(response => {
        if (response !== null) {
          this.loggedInUserId = response._id;
        }
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
