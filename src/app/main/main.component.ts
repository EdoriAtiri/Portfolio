import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Projects } from '../data/projects';
import { project } from '../interfaces/project';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  fiveHundred = '500';
  faArrowDown = faArrowDown;
  projects: project[] = Projects;
  constructor() {}

  ngOnInit(): void {}
}
