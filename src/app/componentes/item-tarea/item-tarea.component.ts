import { Tarea } from './../../interfaces/tarea';
import { Component, OnInit, Input } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.css']
})
export class ItemTareaComponent implements OnInit {

  @Input() tarea!:Tarea;
  faCoffee = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}
