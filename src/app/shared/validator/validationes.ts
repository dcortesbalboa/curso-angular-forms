import { FormControl } from "@angular/forms";

export const nombreApellidoPattern: string='([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


export const validrUsername = (control: FormControl) => {
    console.log('validrUsername',control.value);
    if(control.value?.trim().toLowerCase()==='kraso'){
        return {
        'validrUsername': true  
        }
    }
    return null;
    }

