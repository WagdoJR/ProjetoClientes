import { NgModule } from '@angular/core';
import { ClienteRoutes } from './cliente/cliente.routing';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  ...ClienteRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
