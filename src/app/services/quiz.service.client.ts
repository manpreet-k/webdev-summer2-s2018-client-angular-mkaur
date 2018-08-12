import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {

  URL = 'http://localhost:3000/api/quiz';

  findAllQuizzes() {
    return fetch(this.URL)
      .then(response => response.json());
  }

  findQuizById(quizId) {
    return fetch(this.URL + '/' + quizId)
      .then(response => response.json());
  }

  submitQuiz(quiz, quizId, username) {
    const quizSubmission = {
      quizId: quizId,
      username: username,
      answers: quiz
    };
    return fetch(this.URL + '/' + quizId, {
      method: 'post',
      body: JSON.stringify(quizSubmission),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  findSubmissionById(submissionId) {
    return fetch(this.URL + '/quiz/submissions/' + submissionId)
      .then(response => response.json());
  }

  loadSubmissionsForUser(quizId, userId) {
    return fetch(this.URL + '/' + quizId + '/submissions/' + userId)
      .then(response => response.json());
  }

  loadSubmissions(quizId) {
    return fetch(this.URL + '/' + quizId + '/submissions')
      .then(response => response.json());
  }
}
