import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminIndexPageComponent } from './admin-index-page/admin-index-page.component';
import { UserIndexPageComponent } from './user-index-page/user-index-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomepageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'admin-index-page' , component:AdminIndexPageComponent,canActivate:[authGuard]},
  {path:'user-index-page' , component:UserIndexPageComponent,canActivate:[authGuard]},
  {path:'**',component:ErrorPageComponent}
];
