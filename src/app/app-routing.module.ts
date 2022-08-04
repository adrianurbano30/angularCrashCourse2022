import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './componentes/tareas/tareas.component';

const routes: Routes = [
  {path:'',component:TareasComponent},
  {path:'acerca_de',component:AcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
