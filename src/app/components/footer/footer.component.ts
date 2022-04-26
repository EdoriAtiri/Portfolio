import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHandPeace } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faHandPeace = faHandPeace;
  date = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
