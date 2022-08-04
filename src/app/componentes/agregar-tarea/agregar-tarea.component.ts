import { Tarea } from './../../interfaces/tarea';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/app/servicios/ui.service';
import { Subscription } from 'rxjs';

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
  mostrarOnoAgregarTarea!:boolean;
  subscripcion = Subscription;

  constructor(private uisvc:UiService) {
    this.uisvc.enCambio().subscribe((valor)=>{
      this.mostrarOnoAgregarTarea = valor;
    });
  }

  agregarT(){

    if(!this.tarea.texto){
      return;
    }

    this.agregarTarea.emit(this.tarea);
    this.uisvc.mostrarOnoAgregarTarea();

    this.tarea.texto='';
    this.tarea.fecha='';
    this.tarea.recordatorio=false;

  }

  ngOnInit(): void {
  }

}
