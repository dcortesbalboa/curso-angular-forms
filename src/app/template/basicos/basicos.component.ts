import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  // guardar(miFormulario: NgForm){
  //   console.log('submit', miFormulario);
  //   console.log('submit', miFormulario.value['producto']);
  // }

  initForm={
    producto:' kikos',
    precio: 50,
    existencias: 25
  }

  guardar(){
    console.log('submit', this.miFormulario);
    console.log('submit', this.miFormulario.value['producto']);
    this.miFormulario.resetForm({ precio: 0, existencias: 0 });
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls['producto']?.invalid && 
            this.miFormulario?.controls['producto']?.touched
  }

  precioValido(): boolean{
    return this.miFormulario?.controls['precio']?.value<0   && 
            this.miFormulario?.controls['precio']?.touched
  }
}
