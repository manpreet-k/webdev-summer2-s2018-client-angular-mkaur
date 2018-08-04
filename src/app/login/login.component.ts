import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {Router} from '@angular/router';
import {isEmpty} from 'rxjs/internal/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  showError = false;

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  login = (username, password) => {
    const user = {
      username: username,
      password: password
    };
    this.userService.login(user)
      .then(u => {
        if (u !== null) {
          this.router.navigate(['profile']);
        } else {
          alert('Invalid credentials');
        }
      });
  }

  ngOnInit() {
  }

}
