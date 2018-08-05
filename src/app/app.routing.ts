import {Routes, RouterModule} from '@angular/router';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseEditorComponent} from './course-editor/course-editor.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteBoardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'course/:courseId', component: CourseEditorComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseEditorComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseEditorComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseEditorComponent},
  {path: '**', component: WhiteBoardComponent},
];
export const routing = RouterModule.forRoot(appRoutes);
