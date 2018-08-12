import {Routes, RouterModule} from '@angular/router';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseEditorComponent} from './course-editor/course-editor.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminComponent} from './admin/admin.component';
import {SectionViewerComponent} from './section-viewer/section-viewer.component';
import {SectionListComponent} from './section-list/section-list.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizTakeComponent} from './quiz-take/quiz-take.component';
import {QuizSubmissionsComponent} from './quiz-submissions/quiz-submissions.component';
import {QuizAnswersComponent} from './quiz-answers/quiz-answers.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteBoardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'quizzes', component: QuizListComponent},
  {path: 'quiz/:quizId', component: QuizTakeComponent},
  {path: 'quiz/:quizId/submissions', component: QuizSubmissionsComponent},
  {path: 'quiz/:quizId/submissions/:userId', component: QuizSubmissionsComponent},
  {path: 'quiz/:quizId/submissions/:submissionId', component: QuizAnswersComponent},
  {path: 'course/:courseId/section', component: AdminComponent},
  {path: 'course/:courseId/enroll', component: SectionListComponent},
  {path: 'course/:courseId', component: CourseEditorComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseEditorComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseEditorComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseEditorComponent},
  {path: '**', component: WhiteBoardComponent},
];
export const routing = RouterModule.forRoot(appRoutes);
