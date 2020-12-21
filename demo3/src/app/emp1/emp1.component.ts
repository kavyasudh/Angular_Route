import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp1',
  template:` <h1>Assignment 2</h1>
  <ul>
  <li *ngFor="let h of hobbies">{{ h | mypipe}}</li>
  </ul>`,
  styleUrls: ['./emp1.component.css']
})
export class Emp1Component implements OnInit {
  hobbies = [
    'dancing',
    'singing',
    'internet'
    ];
  constructor() { }

  ngOnInit() {
  }

}
