import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { EmplistComponent } from './emplist/emplist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdNotFoundComponent } from './prod-not-found/prod-not-found.component';
import { ProdComponent } from './prod/prod.component';


const routes: Routes = [
  // { path : '', redirectTo: '/departments', pathMatch: 'full'},
  // { path : 'departments', component: DeptlistComponent},
  // { path : 'departments/:id', component: DeptDetailComponent},
  // { path : 'employees', component: EmplistComponent},
  // { path : '**', component: PageNotFoundComponent},

   { path : '', redirectTo: '/products', pathMatch: 'full'},
   { path : 'products', component: ProdComponent},
   { path : 'products/:id', component: ProdDetailComponent},
   { path : 'category', component: CategoryComponent},
   { path : '**', component: ProdNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
