import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-serv',
  template:`<h1>Assignment 3</h1>
  <li *ngFor="let h of itemsarray">
  <b> {{h}} </b>
  </li>
  `,
  styles: []
})
export class ServComponent implements OnInit {
  itemsarray=[];
  constructor(private _es: DataService) { }

  ngOnInit() {
    this.itemsarray=this._es.hobbies;
  }

}
