import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo:string='MIS TAREAS';

  constructor() { }

  ngOnInit(): void {
  }

  agregarQuitarTarea(){
    console.log('agregar o quitar tarea');
  }

}
