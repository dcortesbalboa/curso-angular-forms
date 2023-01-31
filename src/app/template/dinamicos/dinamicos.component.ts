import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

interface Persona{
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {
  persona: Persona ={
    nombre: 'David',
    favoritos: [
      {id: 1, nombre: 'Heman'},
      {id: 1, nombre: 'Skeletor'}

    ]
  }

  nuevoJuego: string='';

  @ViewChild('miFormulario') miFormulario! : NgForm
  guardar(){
    console.log(this.miFormulario.value);
  }

  formDisabled(){
    return this.miFormulario?.invalid;
  }

  nombreValido(){
    return this.miFormulario?.controls['nombre']?.invalid
      && this.miFormulario?.controls['nombre']?.touched
  }

  borrar(index: number){
    this.persona?.favoritos.splice(index,1);
  }

  agregar(){
    this.persona?.favoritos?.push({id: this.persona?.favoritos?.length,
          nombre: this.nuevoJuego});
    this.nuevoJuego='';
  }
}
