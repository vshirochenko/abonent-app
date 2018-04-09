import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/modules/shared.module';
import { AbonentFormComponent } from './abonent-form/abonent-form.component';
import { AbonentFormModule } from './abonent-form/abonent-form.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-test-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './shared/components/alert.component';
import { MatDialog } from '@angular/material';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    BasketComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    FormsModule,
    AbonentFormModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ]
})
export class AppModule { }
