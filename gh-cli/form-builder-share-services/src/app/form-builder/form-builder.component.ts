import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilderDataService } from '../services/form-builder-data.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  hide = true;  
 
  constructor(private router:Router ,private clientData: FormBuilderDataService) {
   // console.log(this.clientData)
   }
 

  submit(){
   // this.router.navigate(['/form-builder2']);
      console.log(this.clientData);
  }

   ngOnInit() { 
      
     }
}