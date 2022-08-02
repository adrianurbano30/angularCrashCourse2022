import { TareaServiciosService } from './../../servicios/tarea-servicios.service';
import { Tarea } from './../../interfaces/tarea';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {



  constructor(private tareaServicio:TareaServiciosService) { }

  Tareas:Tarea[] =[];

  ngOnInit(): void {
    this.tareaServicio.obtenerTareas().subscribe((tareas)=>{
      this.Tareas = tareas
    });
  }

}
