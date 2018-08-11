import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {

  URL = 'http://localhost:3000/api/quiz';
  findAllQuizzes() {
    return fetch(this.URL)
      .then(response => response.json());
  }
}
