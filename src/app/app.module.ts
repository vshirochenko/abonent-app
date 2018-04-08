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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    FormsModule,
    AbonentFormModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
