export class CourseServiceClient {

  findAllCourses() {
    return fetch
    ('https://webdev-summer2-2018-mkaur.herokuapp.com/api/course')
      .then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch('https://webdev-summer2-2018-mkaur.herokuapp.com/api/course/' + courseId)
      .then(response => response.json());
  }
}
