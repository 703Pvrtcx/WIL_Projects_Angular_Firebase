import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/Components/layout/menu-item';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'About',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Contact',
      icon: 'call',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Portfolio',
      icon: 'person',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'Services',
      icon: 'build',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Account',
      icon: 'login',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Close',
      icon: 'close',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  clicked(name:string){
    if(name=="Home" || name =="Exit" || name =="Account"){
      this.router.navigateByUrl(name);
    }else{
      this.router.navigateByUrl("Page/"+name);
    }
  }
  onClick(){
    this.router.navigateByUrl("Home");
  }
}
