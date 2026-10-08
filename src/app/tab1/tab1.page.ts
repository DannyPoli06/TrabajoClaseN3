import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatosService } from '../services/datos';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: './tab1.page.html',
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonInput, IonButton
  ]
})
export class Tab1Page {
  nombre = '';
  edad = 0;
  facultad = '';
  contador = 0;
  mensaje = '';

  private datos = inject(DatosService);
  private router = inject(Router);

  aumentar(): void {
    this.contador++;
  }

  disminuir(): void {
    if (this.contador > 0) {
      this.contador--;
    }
  }

  reiniciar(): void {
    this.contador = 0;
  }

  aumentarEdad(): void {
    this.edad++;
  }

  disminuirEdad(): void {
    if (this.edad > 0) {
      this.edad--;
    }
  }

  enviar(): void {
    const nombreLimpio = this.nombre.trim();
    const facultadLimpia = this.facultad.trim();

    if (!nombreLimpio || !facultadLimpia || this.edad <= 0) {
      this.mensaje = 'Por favor completa todos los campos obligatorios (Nombre, Edad y Facultad).';
      return;
    }

    this.mensaje = '';
    this.datos.guardar(nombreLimpio, this.edad, facultadLimpia, this.contador);
    this.router.navigateByUrl('/tabs/tab2');
  }
}