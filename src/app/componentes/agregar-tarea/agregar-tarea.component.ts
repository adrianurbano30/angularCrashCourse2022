import { Tarea } from './../../interfaces/tarea';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent implements OnInit {

  @Output() agregarTarea:EventEmitter<Tarea>=new EventEmitter();

  tarea:Tarea={
    texto:'',
    fecha:'',
    recordatorio:false
  }

  constructor() { }

  agregarT(){

    if(!this.tarea.texto){
      return;
    }

    this.agregarTarea.emit(this.tarea);
    this.tarea.texto='';
    this.tarea.fecha='';
    this.tarea.recordatorio=false;

  }

  ngOnInit(): void {
  }

}
