import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
@Component({
  selector: 'app-empdetails',
  template:  `
  <ul *ngFor = "let emp of employees">
  <li>{{emp.id}},{{emp.name}},{{emp.age}}</li>
</ul>

  `,
  styles: []
})
export class EmpdetailsComponent implements OnInit {
  public employees=[];
  public errorMessage;
  constructor(private _es: EmpserviceService) {
  }

 ngOnInit() {
  this._es.getEmployees().subscribe
  (data => this.employees = data,error => this.errorMessage = error);
 }


}
