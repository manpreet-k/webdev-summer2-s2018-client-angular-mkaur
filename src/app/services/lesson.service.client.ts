export class LessonServiceClient {

  findLessonsForModule(courseId, moduleId) {
    return fetch
    ('https://webdev-summer2-2018-mkaur.herokuapp.com/api/course/'
      + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

}
