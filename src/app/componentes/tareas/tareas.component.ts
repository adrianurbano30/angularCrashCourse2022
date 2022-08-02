import { Tarea } from './../../interfaces/tarea';
import { Component, OnInit } from '@angular/core';
import {Tareas} from '../../simulaciones-tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {



  constructor() { }

  Tareas:Tarea[] =Tareas;

  ngOnInit(): void {
  }

}
