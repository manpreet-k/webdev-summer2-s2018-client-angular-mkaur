export class ModuleServiceClient {

  findModulesForCourse(courseId) {
    return fetch
    ('https://webdev-summer2-2018-mkaur.herokuapp.com/api/course/'
      + courseId + '/module')
      .then(response => response.json());
  }

}
