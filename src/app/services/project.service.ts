import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Projects } from '../data/projects';
import { project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: project[] = Projects;
  constructor() {}

  getProjects(): Observable<project[]> {
    const allProjects = of(this.projects);
    return allProjects;
  }
}
