import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faHome, faCog, faInfo, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedIn: boolean = false;
  userEmail: string = "";

  faHome = faHome;
  faCog = faCog;
  faInfo = faInfo;
  faGlobe = faGlobe;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    //
  }


}
