import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: '*', pathMatch: 'full', redirectTo: '' },
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoComponent },
  // { path: 'todo', component: TodoComponent },
  // { path: 'add-todo', component: AddTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
