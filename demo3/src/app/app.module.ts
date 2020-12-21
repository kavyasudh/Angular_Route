import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { Emp1Component } from './emp1/emp1.component';
import { MypipePipe } from './mypipe.pipe';

import { DataService } from './data.service';
import { ServComponent } from './serv/serv.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    Emp1Component,
    MypipePipe,
    ServComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
