import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private courseService: CourseServiceClient,
              private userService: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }
  course = '';
  courseId = '';
  sections = [];
  loadSections(courseId) {
    this.courseId = courseId;
    if (this.courseId !== '') {
      this
        .service
        .findSectionsForCourse(courseId)
        .then(sections => this.sections = sections);
    }
  }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  enroll(section) {
    this.userService.currentUser()
      .then(user => {
        if (user === null) {
          alert('Session expired');
          this.logout();
        } else {
          this.service
            .enroll(user._id, section._id)
            .then(() => {
              this
                .service
                .findSectionsForCourse(section.courseId)
                .then(sections => this.sections = sections);
            });
        }
      });
  }

  ngOnInit() {
    if (this.courseId !== '') {
      this.courseService.findCourseById(this.courseId)
        .then(course => {
          this.course = course;
        });
    }
  }
}
