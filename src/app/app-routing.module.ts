import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AbonentFormComponent } from './abonent-form/abonent-form.component';

const routes: Routes = [
  { path: '', component: AbonentFormComponent },
  {
    path: 'abonent',
    loadChildren: './abonent-form/abonent-form.module#AbonentFormModule'
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
