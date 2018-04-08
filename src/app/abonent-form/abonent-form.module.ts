import { NgModule } from '@angular/core';
import { AbonentFormComponent } from './abonent-form.component';
import { SharedModule } from '../shared/modules/shared.module';
import { CommonModule } from '@angular/common';
import { AbonentFormRoutingModule } from './abonent-form.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AbonentFormRoutingModule
  ],
  declarations: [
    AbonentFormComponent
  ]
})
export class AbonentFormModule { }
