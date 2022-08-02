import { Tarea } from './../interfaces/tarea';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaServiciosService {

  apliTareas:string='http://localhost:3000/tareas';
  constructor(private Http:HttpClient) { }

  obtenerTareas():Observable<Tarea[]> {
    return this.Http.get<Tarea[]>(this.apliTareas);
  }

}
