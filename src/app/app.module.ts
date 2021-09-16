import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './Components/layout/toolbar/toolbar.component';
import { FooterComponent } from './Components/layout/footer/footer.component';
import { PagerComponent } from './Components/layout/pager/pager.component';
import { HomeComponent } from './Components/home/home/home.component';
import { AngularMaterialModule } from './angular-material.module';
import { RegisterUserComponent } from './Components/Dashboard/register-user/register-user.component';
import { SigninUserComponent } from './Components/Dashboard/signin-user/signin-user.component';
import { ProfileComponent } from './Components/Dashboard/profile/profile.component';

// Firebase services + enviorment module

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AuthService } from './Services/auth.service';
import { SignUpComponent } from './Components/user-dashboard/sign-up/sign-up.component';
import { SignInComponent } from './Components/user-dashboard/sign-in/sign-in.component';
import { VerifyEmailComponent } from './Components/user-dashboard/verify-email/verify-email.component';
import { DashboardComponent } from './Components/user-dashboard/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/user-dashboard/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    
    ToolbarComponent,
    FooterComponent,
    PagerComponent,
    RegisterUserComponent,
    SigninUserComponent,
    ProfileComponent,
    HomeComponent,

    SignUpComponent,
    SignInComponent,
    VerifyEmailComponent,
    DashboardComponent,
    ForgotPasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
