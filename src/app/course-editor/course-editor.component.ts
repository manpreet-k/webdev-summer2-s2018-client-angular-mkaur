import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../../services/course.service.client';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../models/course.model.client';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.css']
})
export class CourseEditorComponent implements OnInit {
  widgets = [];
  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.findCourseById(params['courseId']));
  }

  course: Course = new Course();
  findCourseById(courseId) {
    this.service.findCourseById(courseId)
      .then(course => this.course = course);
  }

  ngOnInit() {
  }
}
