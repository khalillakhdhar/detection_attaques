import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Accueil',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Utilisateur',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Fichiers',  icon:'library_books', class: '' },
 
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/login', title: 'Déconnexion',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    if(localStorage.length==0)
    {
      window.location.replace("#/login")
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
