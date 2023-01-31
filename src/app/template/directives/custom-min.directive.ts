
import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true    
    }]
})
export class CustomMinDirective implements Validator{
    @Input() minimo!: number;

    constructor(){
        
    }

        validate(control: FormControl){
            let input=control.value;
            console.log('cusomMin', input);
            console.log('minimo', this.minimo);
            return ( input < this.minimo ) 
                ? {'customMin': true}
                : null
        }

}