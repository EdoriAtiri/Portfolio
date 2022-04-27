import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Projects } from '../data/projects';
import { project } from '../interfaces/project';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('toggleModal', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-in')),
    ]),
    trigger('toggleModalBd', [
      state(
        'show',
        style({
          opacity: 0.25,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', animate('300ms 150ms ease-out')),
      transition('hide => show', animate('300ms ease-in')),
    ]),
  ],
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
