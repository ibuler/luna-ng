import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersUserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'users', component: UsersUserListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
