import { Routes } from "@angular/router";
import { ClienteFormComponent } from "./cliente-form/cliente-form.component";
import { ClienteListComponent } from "./cliente-list/cliente-list.component";
import { ClienteComponent } from "./cliente.component";

export const ClienteRoutes: Routes = [
  {
    path: "cliente",
    component: ClienteComponent,
    children: [
      {
        path: "",
        component: ClienteListComponent
      },
      {
        path: "novo",
        component: ClienteFormComponent
      },
      {
        path: "editar/:id",
        component: ClienteFormComponent
      }
    ]
  },
];
