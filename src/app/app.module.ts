import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './Components/home/about/about.component';


import { ToolbarComponent } from './Components/layout/toolbar/toolbar.component';
import { FooterComponent } from './Components/layout/footer/footer.component';
import { PagerComponent } from './Components/layout/pager/pager.component';
import { HomeComponent } from './Components/home/home/home.component';
import { AngularMaterialModule } from './angular-material.module';
// import { LandingPageComponent } from './components/layout/landing-page/landing-page.component';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './Components/layout/landing-page/landing-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,

    ToolbarComponent,
    FooterComponent,
    PagerComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    SignInComponent,
    VerifyEmailComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      // registrationStrategy: 'registerWhenStable:30000'
    }),


  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
