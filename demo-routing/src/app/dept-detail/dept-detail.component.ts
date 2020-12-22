import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `
  <h3>you selected dept with id {{deptId}}</h3>
  `,
  styles: []
})
export class DeptDetailComponent implements OnInit {
  public deptId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.deptId = id;
  }

}
