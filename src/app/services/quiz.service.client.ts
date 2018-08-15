import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {

  // URL = 'http://localhost:3000/api/quiz';
  URL = 'https://wbdv-smr2-server-node-mkaur.herokuapp.com/api/quiz';

  findAllQuizzes() {
    return fetch(this.URL)
      .then(response => response.json());
  }

  findQuizById(quizId) {
    return fetch(this.URL + '/' + quizId)
      .then(response => response.json());
  }

  submitQuiz(submission, quiz, quizId, studentId) {
    const quizSubmission = {
      quiz: quiz,
      student: studentId,
      answers: submission
    };
    return fetch(this.URL + '/' + quizId + '/submission', {
      method: 'post',
      body: JSON.stringify(quizSubmission),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  findSubmissionById(quizId, submissionId) {
    return fetch(this.URL + '/quiz' + quizId + '/submission/' + submissionId)
      .then(response => response.json());
  }

  loadSubmissionsForUser(quizId, userId) {
    return fetch(this.URL + '/' + quizId + '/submissions/' + userId)
      .then(response => response.json());
  }

  loadSubmissions(quizId) {
    return fetch(this.URL + '/' + quizId + '/submission')
      .then(response => response.json());
  }
}
