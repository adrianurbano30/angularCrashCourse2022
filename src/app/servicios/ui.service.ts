import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private mostrarAgregarTarea:boolean=false;
  private subject= new Subject<any>();

  constructor() { }

  mostrarOnoAgregarTarea():void{
    this.mostrarAgregarTarea=!this.mostrarAgregarTarea;
    this.subject.next(this.mostrarAgregarTarea);
  }

  enCambio():Observable<any>{
    return this.subject.asObservable();
  }

}
