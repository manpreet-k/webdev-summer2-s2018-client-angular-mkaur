import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
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

  constructor(private router: Router,
              private userService: UserServiceClient) {
  }

  register = (username, password, verifypassword) => {
    const user = {
      username: username,
      password: password
    };
    if (password !== verifypassword) {
      alert('Passwords do not match');
    } else {
      this.userService.findUserByUsername(username)
        .then(existingUser => {
          if (existingUser == null) {
            this.userService.register(user)
              .then(u => {
                if (u !== null) {
                  this.router.navigate(['profile']);
                } else {
                  alert('Intenal server error');
                }
              });
          } else {
            alert('Username already exists');
          }
        });
    }
  };


  ngOnInit() {
  }

}
