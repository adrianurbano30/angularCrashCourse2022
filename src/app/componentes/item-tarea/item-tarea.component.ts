import { Tarea } from './../../interfaces/tarea';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.css']
})
export class ItemTareaComponent implements OnInit {

  @Input() tarea!:Tarea;
  @Output() eliminarTarea:EventEmitter<Tarea> = new EventEmitter();
  @Output() recordar:EventEmitter<Tarea> = new EventEmitter();
  faCoffee = faTrash;

  constructor() { }

  eliminarItem(tarea:Tarea){
    this.eliminarTarea.emit(tarea);
  }
  recordatorio(tarea:Tarea){
    this.recordar.emit(tarea);
  }

  ngOnInit(): void {
  }

}
