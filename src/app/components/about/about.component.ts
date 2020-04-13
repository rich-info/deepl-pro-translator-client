import { Component, OnInit } from '@angular/core';

import { faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  faGithub = faGithub

  constructor() { }

  ngOnInit() {
  }

}
