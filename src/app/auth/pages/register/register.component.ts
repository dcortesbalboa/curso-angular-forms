import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { emailPattern, nombreApellidoPattern, validrUsername } from 'src/app/shared/validator/validationes';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  get emailError(): string{
    const errors=this.miFormulario.get('email')?.errors;

    if(errors?.['required']){
      return 'El email es obligatorio';
    }

    if(errors?.['pattern']){
      return 'Formato incorrecto';
    }

    if(errors?.['emailYaExiste']){
      return 'El email ya existe';
    }

    return '';
  }

  miFormulario: FormGroup=this.fb.group({
       nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
       email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
       username: ['', [Validators.required,this.validatorService.validrUsername ]],
       pwd: ['', [Validators.required, Validators.minLength(6) ]],
       pwd2: ['', [Validators.required]],

  }, {
    validators: [
      this.validatorService.compararCampos('pwd', 'pwd2')
    ]
  })

  constructor(private fb: FormBuilder,  
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.miFormulario.reset({
      nombre: 'David Cortes',
      email: 'ddd@htmail.com',
      username: 'dcb',
      pwd: '123456',
      pwd2: '123456'
    })
    this.miFormulario.markAllAsTouched();

  }
  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid &&
    this.miFormulario.get(campo)?.touched
  }

  emailRequired() {
    return this.miFormulario.get('email')?.errors?.['required']
    &&
    this.miFormulario.get('email')?.touched
  }


  submit(){
    this.miFormulario.markAllAsTouched();
  }


}
