import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {

  // URL = 'http://localhost:3000/';
  URL = 'https://wbdv-smr2-server-node-mkaur.herokuapp.com/';
  
  enroll = (studentId, sectionId) =>
    fetch(this.URL + 'api/student/' + studentId + '/section/' + sectionId, {
      method: 'post',
      credentials: 'include'
    })

  unenroll = (studentId, sectionId) =>
    fetch(this.URL + 'api/student/' + studentId + '/section/' + sectionId, {
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

  findSectionsForStudent = studentId => {
    return fetch(this.URL + 'api/student/' + studentId + '/section', {
      credentials: 'include'
    })
      .then(response => response.json());
  }

}
