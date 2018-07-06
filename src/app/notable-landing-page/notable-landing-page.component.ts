import { Component, OnInit } from '@angular/core';
import { faGithub, faGit } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'notable-landing-page',
  templateUrl: './notable-landing-page.component.html',
  styleUrls: ['./notable-landing-page.component.css']
})
export class NotableLandingPageComponent implements OnInit {
  faGithub = faGithub;

  href = 'https://github.com/ryaninvents/ng-notable';

  constructor() { }

  ngOnInit() {
  }

}
