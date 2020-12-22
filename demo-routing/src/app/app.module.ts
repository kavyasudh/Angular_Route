import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';
import { CategoryComponent } from './category/category.component';
import { ProdComponent } from './prod/prod.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdNotFoundComponent } from './prod-not-found/prod-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    DeptlistComponent,
    PageNotFoundComponent,
    DeptDetailComponent,
    CategoryComponent,
    ProdComponent,
    ProdDetailComponent,
    ProdNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
