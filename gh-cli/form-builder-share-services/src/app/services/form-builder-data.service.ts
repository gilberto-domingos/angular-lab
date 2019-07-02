import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderDataService {
    country : string = '';
      email : string = '';
   password : string = '';
   firstName: string = '';
   lastName : string = '';    
   birthday : string = '';
        cpf : string = '';
   passport : string = '';
    address : string = '';
    zipCode : string = '';    
 complement : string = ''; 
       city : string = '';
      state : string = '';
       fone : string = '';

                    rootForm: FormGroup;

       constructor(private fb: FormBuilder) {
        this.rootForm = this.fb.group({
            childForm1 : this.fb.group({
              country: ['', Validators.required],
                email: ['', Validators.required],
             password: ['', Validators.required],
            }),
            childForm2 : this.fb.group({
              firstName: ['', Validators.required],
              lastName: ['', Validators.required],
              birthday: ['', Validators.required],
              cpf: ['', Validators.required],
              passport: ['', Validators.required],
              address: ['', Validators.required],
              zipCode: ['', Validators.required],
              complement: ['', Validators.required],
              city: ['', Validators.required],
              state: ['', Validators.required],
              fone: ['', Validators.required],                
            })
        });
    }

}

