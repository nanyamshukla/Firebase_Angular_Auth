import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
 
import {UserLoginComponent} from '../auth/user-login/user-login.component';
import {UserInfoComponent} from '../auth/user-info/user-info.component';
import { AuthGuard } from './auth.guard';
import { AuthdemoService } from './authdemo.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'user', component: UserInfoComponent,canActivate:[AuthGuard]},
  { path: 'login', component: UserLoginComponent, canActivate: [AuthGuard]},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}
