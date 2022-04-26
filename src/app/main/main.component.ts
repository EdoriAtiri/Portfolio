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
  faArrowDown = faArrowDown;
  projects: project[] = Projects;
  constructor() {}

  ngOnInit(): void {}

  onClickView(item: number) {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i] !== this.projects[item]) {
        this.projects[i].toggle = false;
      } else {
        this.projects[item].toggle = !this.projects[item].toggle;
      }
    }
  }

  closeDialog(dialog: number) {
    this.projects[dialog].toggle = false;
  }
}
