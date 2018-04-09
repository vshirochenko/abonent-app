import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AbonentFormComponent } from './abonent-form/abonent-form.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: '', component: AbonentFormComponent },
  {
    path: 'abonent',
    component: AbonentFormComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  { path: '**', redirectTo: 'abonent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
