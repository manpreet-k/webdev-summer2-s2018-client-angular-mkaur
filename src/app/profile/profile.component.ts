import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router) {
  }

  user = {};
  username;
  password;
  phone;
  firstName;
  lastName;
  email;
  sections = [];
  courses = [];
  student_sections = [];

  update() {
    const user = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
    };
    this.service.update(user).then(() => {
      alert(user);
    });
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  unenroll(section) {
    this.sectionService
      .unenroll(section._id)
      .then(() => {
        this.sectionService
          .findSectionsForStudent()
          .then(sections => {
            this.student_sections = sections;
            this.getCoursesForStudent();
          });
      });
  }

  getCoursesForStudent() {
    if (this.student_sections !== undefined) {
      this.sections = [];
      this.courses = [];
      let i;
      const size = this.student_sections.length;
      for (i = 0; i < size; i++) {
        const currentSection = this.student_sections[i].section;

        const currentCourseId = currentSection.courseId;
        this.courseService.findCourseById(currentCourseId)
          .then(course => {
            currentSection['courseTitle'] = course.title;
            this.sections.push(currentSection);
            this.courses.push(course);
          });
      }
    }
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        this.username = user.username;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.phone = user.phone;
      });

    this.sectionService
      .findSectionsForStudent()
      .then(sections => {
        this.student_sections = sections;
        this.getCoursesForStudent();
      });
  }
}
