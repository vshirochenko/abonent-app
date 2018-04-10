import { NgModule } from '@angular/core';
import { AbonentFormComponent } from './abonent-form.component';
import { SharedModule } from '../shared/modules/shared.module';
import { CommonModule } from '@angular/common';
import { AbonentFormRoutingModule } from './abonent-form.routing';
import { AlertComponent } from '../shared/components/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AbonentFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AbonentFormComponent
  ]
})
export class AbonentFormModule { }
