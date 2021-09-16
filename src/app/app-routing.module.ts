import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/home/about/about.component';
import { BlogComponent } from './Components/home/blog/blog.component';
import { ContactComponent } from './Components/home/contact/contact.component';
import { HomeComponent } from './Components/home/home/home.component';
import { PortfolioComponent } from './Components/home/portfolio/portfolio.component';
import { ServicesComponent } from './Components/home/services/services.component';
import { PagerComponent } from './Components/layout/pager/pager.component';
import { ToolbarComponent } from './Components/layout/toolbar/toolbar.component';
import { RegisterUserComponent } from './Components/Dashboard/register-user/register-user.component';
import { SigninUserComponent } from './Components/Dashboard/signin-user/signin-user.component';
import { ProfileComponent } from './Components/Dashboard/profile/profile.component';
import { DashboardComponent } from './Components/user-dashboard/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/user-dashboard/forgot-password/forgot-password.component';
import { SignInComponent } from './Components/user-dashboard/sign-in/sign-in.component';
import { SignUpComponent } from './Components/user-dashboard/sign-up/sign-up.component';
import { VerifyEmailComponent } from './Components/user-dashboard/verify-email/verify-email.component';

const routes: Routes = [
  { path:'',component: HomeComponent},
  { path:'Home',component: HomeComponent},
  {
    path: 'Page',
    component: PagerComponent,
    children: [
      { path: '',redirectTo: 'Home', pathMatch: 'full'},
      { path:'Home',component: HomeComponent},
      { path:'About',component: AboutComponent },
      { path:'Blog',component: BlogComponent },
      { path:'Contact',component:ContactComponent },
      { path:'Portfolio',component:PortfolioComponent },
      { path:'Services',component: ServicesComponent },
    ]
  },
  // { path:'Account',component: ProfileComponent},   
  { path:'Sign Up',component: RegisterUserComponent},
  { path:'Login',component: SigninUserComponent},
    
  { path: 'Account', redirectTo: '/register-user', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
