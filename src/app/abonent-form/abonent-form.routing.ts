import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbonentFormComponent } from './abonent-form.component';

const routes: Routes = [
  {
    path: '',
    component: AbonentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbonentFormRoutingModule {}
