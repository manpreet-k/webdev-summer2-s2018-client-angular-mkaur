import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../../services/course.service.client';
import {UserServiceClient} from '../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  courses = [];
  selectedCourseId = 0;

  constructor(private service: CourseServiceClient,
              private userService: UserServiceClient,
              private router: Router) {
  }

  selectCourse(courseId) {
    this.selectedCourseId = courseId;
  }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
      });
  }
}
