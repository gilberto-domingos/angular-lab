import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilderDataService } from '../services/form-builder-data.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  hide = true;
  angForm: FormGroup; // angForm will link whith html form

 
  constructor(private router:Router ,private fb: FormBuilder, private formBuilderDataService: FormBuilderDataService ) {
    this.createForm(new FormBuilderDataService);
    }
  
  createForm(formBuilderDataService: FormBuilderDataService) {
    this.angForm = this.fb.group({
    country : [formBuilderDataService.country],
      email : [formBuilderDataService.email], 
   password : [formBuilderDataService.password]      
    });
  }

  /* onClickSubmit(email, password) {
   console.log('EMAIL : ', email)
   
    console.log("Form Object ", this.angForm.value);
  } */

  submit(){
    this.router.navigate(['/form-builder2']);
  //console.log("Form Object ", this.angForm.value);
  }

   ngOnInit() { 
      
     }
}