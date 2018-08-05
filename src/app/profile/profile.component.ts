import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router) {
  }

  user = {};
  username;
  password;
  phone;
  firstName;
  lastName;
  email;

  update() {
    const user = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
    };
    this.service.update(user).then(() => {
      alert(user);
    });
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        this.username = user.username;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.phone = user.phone;
      });
  }

}
