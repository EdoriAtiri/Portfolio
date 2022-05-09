import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ProjectService } from '../services/project.service';
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
  projects: project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    AOS.init();
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects().subscribe({
      next: (project) => {
        this.projects = project;
      },
    });
  }

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
