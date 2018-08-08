import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../models/course.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.css']
})
export class CourseEditorComponent implements OnInit {
  widgets = [];
  constructor(private service: CourseServiceClient,
              private userService: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.findCourseById(params['courseId']));
  }

  course: Course = new Course();
  findCourseById(courseId) {
    this.service.findCourseById(courseId)
      .then(course => this.course = course);
  }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  ngOnInit() {
  }
}
