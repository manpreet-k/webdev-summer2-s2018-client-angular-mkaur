import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {

  URL = 'http://localhost:3000/';

  enroll = sectionId =>
    fetch(this.URL + 'api/section/' + sectionId + '/enroll', {
      method: 'put',
      credentials: 'include'
    })

  unenroll = sectionId =>
    fetch(this.URL + 'api/section/' + sectionId + '/unenroll', {
      method: 'delete',
      credentials: 'include'
    })

  findAllSections = () =>
    fetch(this.URL + 'api/section')
      .then(response => response.json());

  findSectionsForCourse = courseId =>
    fetch(this.URL + 'api/course/' + courseId + '/section')
      .then(response => response.json());

  createSection = (couseId, section) =>
    fetch(this.URL + 'api/course/' + couseId + '/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json())


  updateSection = (section) => {
    return fetch(this.URL + 'api/section' + '/' + section.id, {
      method: 'put',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection = (section) =>  {
    return fetch(this.URL + 'api/section' + '/' + section._id, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
    });
  }

  findSectionsForStudent() {
    return fetch(this.URL + 'api/student/section', {
      credentials: 'include'
    })
      .then(response => response.json());
  }

}
