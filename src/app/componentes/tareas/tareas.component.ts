import { TareaServiciosService } from './../../servicios/tarea-servicios.service';
import { Tarea } from './../../interfaces/tarea';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {



  constructor(private tareaServicio:TareaServiciosService) {

  }

  Tareas:Tarea[] =[];

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas(){
    this.tareaServicio.obtenerTareas().subscribe((tareas)=>{
      this.Tareas = tareas
    });
  }

  eliminarTarea(tarea:Tarea){
    this.tareaServicio.eliminarTarea(tarea)
      .subscribe(
      ()=>(this.Tareas = this.Tareas.filter((t) => t.id !== tarea.id))
      );
  }
  recordar(tarea:Tarea){
    tarea.recordatorio =!tarea.recordatorio;
    this.tareaServicio.recordatorio(tarea).subscribe(()=>{
      this.getTareas();
    });
  }

  agregarTarea(tarea:Tarea){
    this.tareaServicio.agregarTarea(tarea).subscribe((tarea)=>{
      this.Tareas.push(tarea);
    });
  }

}
