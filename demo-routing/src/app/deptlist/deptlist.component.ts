import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deptlist',
  template: `
  <ul class="item">
  <li (click)="onSelect(department)"  *ngFor="let department of departments">
    <span>{{department.id}}</span> {{department.name}}
  </li>
</ul>

  `,
  styles: []
})
export class DeptlistComponent implements OnInit {

  constructor(private rounter: Router) { }
  public departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]



  ngOnInit() {
  }
  onSelect(department){
    // from neviate from code to rooute we need router service
    this.rounter.navigate(['/departments', department.id]);
  }

}
