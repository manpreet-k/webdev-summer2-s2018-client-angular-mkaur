import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private service: WidgetServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  topicId;
  widgetId;
  widgets = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];
    this.widgetId = params['widgetId'];
    this.findWidgetsForTopic(this.topicId);
  }

  findWidgetsForTopic(topicId) {
    this.topicId = topicId;
    this.service.findWidgetsForTopic(topicId)
      .then(widgets => this.widgets = widgets);
  }

  ngOnInit() {
  }

}
