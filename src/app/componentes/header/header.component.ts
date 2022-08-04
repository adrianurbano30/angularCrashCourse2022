import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/servicios/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo:string='MIS TAREAS';
  mostrarTareas:boolean=false;
  subscription!:Subscription;

  constructor(private uisvc:UiService,private ruta:Router) {
    this.subscription = this.uisvc.enCambio().subscribe((valor)=>{
      this.mostrarTareas = valor;
    });
  }

  ngOnInit(): void {
  }

  agregarQuitarTarea(){
    this.uisvc.mostrarOnoAgregarTarea();
  }

  hasRoute(ruta:string){
    return this.ruta.url===ruta;
  }

}
