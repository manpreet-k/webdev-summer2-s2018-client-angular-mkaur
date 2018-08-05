import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router,
              private route: ActivatedRoute){
    this.route.params.subscribe(params => this.loadSections(params['courseId']))
  }

  sectionName = '';
  seats = '';
  course;
  courseId = '';
  sections = [];
  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  enroll(section) {
    this.service
      .enroll(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }

  ngOnInit() {
    this.courseService.findCourseById(this.courseId)
      .then(course => {
        this.course = course;
      });
  }

}
