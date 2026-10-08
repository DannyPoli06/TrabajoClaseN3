import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
    nombre = signal('');
    edad = signal(0);
    facultad = signal('');
    contador = signal(0);
    enviado = signal(false);

    guardar(nombre: string, edad: number, facultad: string, contador: number): void {
        this.nombre.set(nombre);
        this.edad.set(edad);
        this.facultad.set(facultad);
        this.contador.set(contador);
        this.enviado.set(true);
    }
}