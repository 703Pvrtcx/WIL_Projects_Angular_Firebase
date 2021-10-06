import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

isLoggedIn: boolean;
  constructor(private authSer: AuthService) {
    this.isLoggedIn = this.authSer.loggedIn;
   }

  ngOnInit() { 
    this.isLoggedIn = this.authSer.loggedIn;
   }
   swap(){
     if (this.isLoggedIn) {
      this.authSer.loggedIn = false;
     } else {
      this.authSer.loggedIn = true;
     }
     this.isLoggedIn = this.authSer.loggedIn;
   }


}
