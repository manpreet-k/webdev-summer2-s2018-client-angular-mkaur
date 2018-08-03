import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../../services/module.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private service: ModuleServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  modules = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.findModulesForCourse(this.courseId);
  }

  findModulesForCourse(courseId) {
    this.courseId = courseId;
    this.service.findModulesForCourse(courseId)
      .then(modules => this.modules = modules);
  }

  ngOnInit() {
  }

}
