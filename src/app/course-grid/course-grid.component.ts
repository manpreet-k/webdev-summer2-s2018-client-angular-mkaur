import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  courses = [];
  loggedInUserId = '';

  constructor(private service: CourseServiceClient,
              private userService: UserServiceClient) {
    userService.currentUser()
      .then(response => {
        if (response !== null) {
          this.loggedInUserId = response._id;
        }
      });
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
      });
  }
}
