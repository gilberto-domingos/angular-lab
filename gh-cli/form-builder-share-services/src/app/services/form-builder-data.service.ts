import { Injectable } from '@angular/core';

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
    zipCode : string = '';
    address : string = '';
 complement : string = ''; 
       city : string = '';
      state : string = '';
       fone : string = '';

  constructor() { }
}
