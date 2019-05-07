import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { DepartDetailsComponent } from './depart-details/depart-details.component';
import { StudDetailsComponent } from './stud-details/stud-details.component';
import { DepartDetailComponent } from './depart-details/depart-detail/depart-detail.component';
import { StudDetailComponent } from './stud-details/stud-detail/stud-detail.component';
import { StudDetailListComponent } from './stud-details/stud-detail-list/stud-detail-list.component';
import { DepartDetailListComponent } from './depart-details/depart-detail-list/depart-detail-list.component';
import { DepartDetailService } from './shared/depart-detail.service';
import { StudDetailService } from './shared/stud-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartDetailsComponent,
    StudDetailsComponent,
    DepartDetailComponent,
    StudDetailComponent,
    StudDetailListComponent,
    DepartDetailListComponent,
    


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [DepartDetailService, StudDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
