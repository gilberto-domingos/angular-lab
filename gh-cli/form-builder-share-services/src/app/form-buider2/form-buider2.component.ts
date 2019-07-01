import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { FormBuilderDataService } from '../services/form-builder-data.service';

@Component({
  selector: 'app-form-buider2',
  templateUrl: './form-buider2.component.html',
  styleUrls: ['./form-buider2.component.scss']
})
export class FormBuider2Component implements OnInit {
  hide = true;
  angForm: FormGroup; // angForm will link whith html form

  constructor(private fb: FormBuilder, private formBuilderDataService: FormBuilderDataService) {
       this.createForm(new FormBuilderDataService);
    }
  
  createForm(formBuilderDataService: FormBuilderDataService) {
    this.angForm = this.fb.group({   
  firstName : [formBuilderDataService.firstName],
   lastName : [formBuilderDataService.lastName], 
   birthday : [formBuilderDataService.birthday],
        cpf : [formBuilderDataService.cpf],
   passport : [formBuilderDataService.passport], 
    zipCode : [formBuilderDataService.zipCode],
    address : [formBuilderDataService.address], 
 complement : [formBuilderDataService.complement], 
       city : [formBuilderDataService.city],
       state: [formBuilderDataService.state],
       fone : [formBuilderDataService.fone],
    });
  }


  submit(){  
    console.log("Service ", this.formBuilderDataService); 
   console.log("Form Object ", this.angForm.value);
  
  }

   ngOnInit() {   }
}