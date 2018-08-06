import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-section-viewer',
  templateUrl: './section-viewer.component.html',
  styleUrls: ['./section-viewer.component.css']
})
export class SectionViewerComponent implements OnInit {

  DEFAULT_MAX_CAP = 60;

  constructor(private service: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  sectionName = '';
  maxCap = 0;
  remCap;
  courseId;
  course;
  selectedSection;
  sections = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.loadSections(this.courseId);
  }

  loadSections(courseId) {
    this.courseId = courseId;
    if (this.courseId !== undefined) {
      this.service.findSectionsForCourse(courseId)
        .then(sections => this.sections = sections);
      this.courseService.findCourseById(this.courseId).then(course => this.course = course);
      this.resetFields();
    }
  }

  deleteSection(section) {
    this.service.deleteSection(section)
      .then(() => {
        this.loadSections(this.courseId);
      }).then(() => {
      this.resetFields();
    });
  }

  updateSection(newSectionName, newMaxCap) {
    if (newSectionName === '') {
      newSectionName = this.course.title + ' section ' + (this.sections.length + 1).toString();
    }
    if (newMaxCap === 0) {
      newMaxCap = this.DEFAULT_MAX_CAP;
    }
    const newRemCap = (newMaxCap - this.selectedSection.maxCap) + parseInt(this.selectedSection.rem, 10);
    const newSection = {
      courseId: this.courseId,
      id: this.selectedSection._id,
      title: newSectionName,
      maxCap: newMaxCap,
      rem: newRemCap
    };
    this.service.updateSection(newSection)
      .then(() => {
        this.loadSections(this.courseId);
      }).then(() => {
      this.resetFields();
    });
  }

  createSection() {
    if (this.sectionName === '') {
      this.sectionName = this.course.title + ' section ' + (this.sections.length + 1).toString();
    }
    if (this.maxCap === 0) {
      this.maxCap = this.DEFAULT_MAX_CAP;
    }

    const newSection = {
      courseId: this.courseId,
      title: this.sectionName,
      maxCap : this.maxCap,
      rem: this.maxCap
    };

    this.service.createSection(this.courseId, newSection)
      .then(() => {
        this.loadSections(this.courseId);
      }).then(() => {
      this.resetFields();
    });
  }

  editSection(section) {
    this.sectionName = section.title;
    this.maxCap = section.maxCap;
    this.remCap = section.rem;
    this.selectedSection = section;
  }
  resetFields() {
    this.sectionName = '';
    this.maxCap = 0;
    this.remCap = 0;
  }

  ngOnInit() {
  }

}
