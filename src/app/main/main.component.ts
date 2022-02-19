import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  faArrowDown = faArrowDown;
  constructor() {}

  ngOnInit(): void {}
}
