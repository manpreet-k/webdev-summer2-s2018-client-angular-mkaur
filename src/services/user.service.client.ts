import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch('http://localhost:3000/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())

  currentUser = () =>
    fetch('http://localhost:3000/currentUser', {
      credentials: 'include'
    }).then(response => response.json())

  register = (user) =>
    fetch('http://localhost:3000/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())

  findUserByUsername = (username) =>
    fetch('http://localhost:3000/user/' + username + '/username', {
      method: 'get',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


}
