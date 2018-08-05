import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../../services/course.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  courses = [];
  selectedCourseId = 0;

  constructor(private service: CourseServiceClient) {
  }

  selectCourse(courseId) {
    this.selectedCourseId = courseId;
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
      });
  }
}
