import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from '../services/course.service.client';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {ModuleServiceClient} from '../services/module.service.client';
import {LessonServiceClient} from '../services/lesson.service.client';
import {TopicServiceClient} from '../services/topic.service.client';
import {WidgetServiceClient} from '../services/widget.service.client';
import {LoginComponent} from './login/login.component';
import {UserServiceClient} from '../services/user.service.client';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseEditorComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing

  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient,
    UserServiceClient
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
