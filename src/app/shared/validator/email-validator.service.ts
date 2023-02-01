import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of, switchMap } from 'rxjs';
import { Usuario } from 'src/app/auth/models';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  urlPath = 'http://localhost:3000/usuarios';
  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null > | Observable<ValidationErrors | null>{
    return this.http.get<Usuario[]>(`${this.urlPath}/?q=${control.value}`)
                .pipe(
                  delay(3000),
                  switchMap(userList => {
                    if(userList && userList.length>0){
                      return of({
                        'emailYaExiste': true
                      })
                    }
                    return of(null);
                  })
                )
  }

}
