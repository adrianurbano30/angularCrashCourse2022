import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ButtonComponent } from './componentes/button/button.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { ItemTareaComponent } from './componentes/item-tarea/item-tarea.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgregarTareaComponent } from './componentes/agregar-tarea/agregar-tarea.component';
import { FormsModule } from '@angular/forms';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TareasComponent,
    ItemTareaComponent,
    AgregarTareaComponent,
    AcercaDeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
