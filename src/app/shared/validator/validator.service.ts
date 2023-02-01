import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})


export class ValidatorService {

  public nombreApellidoPattern: string='([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  validrUsername = (control: FormControl): ValidationErrors | null => {
    console.log('validrUsername',control.value);
    if(control.value?.trim().toLowerCase()==='kraso'){
        return {
        'validrUsername': true  
        }
    }
    return null;
    }

  compararPwd(frmG: FormGroup ){
    if(frmG.controls['pwd']?.value?.trim().toLowerCase() !== 
      frmG.controls['pwd2']?.value?.trim().toLowerCase()){
      return {
        'pwd': true,
        'pwd2': true
      }
    }

    return null;
  }

  compararCampos(campo1: string, campo2: string){

      return (frormGroup: AbstractControl): ValidationErrors | null=>{
        if(frormGroup.get(campo1)?.value?.trim().toLowerCase() !== 
            frormGroup.get(campo2)?.value?.trim().toLowerCase()){
            
            frormGroup.get(campo2)?.setErrors({'pwdNoIguales': true});
          return {
            'pwdNoIguales': true
          }
        }
    
        return null;
      }
    
  }

}
