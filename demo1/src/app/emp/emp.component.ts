import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
@Component({
  selector: 'app-emp',
  template: `
  <ul *ngFor = "let emp of employees">
  <li>{{emp.name}}</li>
</ul>

  `,
  styles: []
})
export class EmpComponent implements OnInit {
  public employees=[];
  public errorMessage;
  constructor(private _es: EmpserviceService) {
  }

 ngOnInit() {
  this._es.getEmployees().subscribe
  (data => this.employees = data,error => this.errorMessage = error);
 }


}
