import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod',
  template: `
  <ul class="item">
  <li (click)="onSelect(product)"  *ngFor="let product of products">
    <span>{{product.id}}</span> {{product.name}}
  </li>
</ul>

  `,
  styles: []
})
export class ProdComponent implements OnInit {

  constructor(private rounter: Router) { }
   public products = [
    {"id": 1, "name": "car"},
    {"id": 2, "name": "bike"},
    {"id": 3, "name": "cycle"},
    {"id": 4, "name": "tv"},
    {"id": 5, "name": "cooler"}
  ]


  ngOnInit() {
  }


  onSelect(product){
    // from neviate from code to rooute we need router service
    this.rounter.navigate(['/products', product.id]);
  }
}
