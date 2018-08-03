export class TopicServiceClient {

  findTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch
    ('https://webdev-summer2-2018-mkaur.herokuapp.com/api/course/'
      + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }

}
