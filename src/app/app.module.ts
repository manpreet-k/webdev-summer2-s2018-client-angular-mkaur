import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from './services/course.service.client';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {ModuleServiceClient} from './services/module.service.client';
import {LessonServiceClient} from './services/lesson.service.client';
import {TopicServiceClient} from './services/topic.service.client';
import {WidgetServiceClient} from './services/widget.service.client';
import {LoginComponent} from './login/login.component';
import {UserServiceClient} from './services/user.service.client';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { SectionViewerComponent } from './section-viewer/section-viewer.component';
import {SectionServiceClient} from './services/section.service.client';
import { SectionListComponent } from './section-list/section-list.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {QuizServiceClient} from './services/quiz.service.client';
import { QuizTakeComponent } from './quiz-take/quiz-take.component';
import { FillBlanksQuestionComponent } from './fill-blanks-question/fill-blanks-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { TrueFalseComponent } from './true-false/true-false.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';


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
    RegisterComponent,
    ProfileComponent,
    AdminComponent,
    SectionViewerComponent,
    SectionListComponent,
    QuizListComponent,
    QuizTakeComponent,
    FillBlanksQuestionComponent,
    MultipleChoiceQuestionComponent,
    TrueFalseComponent,
    EssayQuestionComponent,
    QuizSubmissionsComponent
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
    UserServiceClient,
    SectionServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
