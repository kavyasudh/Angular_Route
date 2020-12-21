import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmpserviceService } from './empservice.service';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { PostService } from './post.service';
@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    EmpdetailsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule , HttpClientModule,FormsModule
  ],
  providers: [EmpserviceService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
