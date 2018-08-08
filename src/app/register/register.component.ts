import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  password: String;
  verifypassword: String;
  valid = false;
  showError = false;
  errorText = '';

  constructor(private router: Router,
              private userService: UserServiceClient) {
  }

  register = (username, password, verifypassword) => {
    const user = {
      username: username,
      password: password
    };
    if (password !== verifypassword) {
      this.errorText = 'Passwords do not match';
      this.showError = true;
    } else {
      this.userService.findUserByUsername(username)
        .then(existingUser => {
          this.validateUsername(user, existingUser);
        });
    }
  }

  validateUsername = (user, existingUser) => {
    if (existingUser == null) {
      this.userService.register(user)
        .then(u => {
          if (u !== null) {
            this.errorText = '';
            this.showError = false;
            this.router.navigate(['profile']);
          } else {
            this.errorText = 'Internal server error';
            this.showError = true;
          }
        });
    } else {
      this.errorText = 'Username already exists';
      this.showError = true;
    }
  }


  ngOnInit() {
  }

}
