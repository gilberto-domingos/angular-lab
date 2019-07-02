import { Component, OnInit } from '@angular/core';
import { FormBuilderDataService } from '../services/form-builder-data.service';

@Component({
  selector: 'app-form-buider2',
  templateUrl: './form-buider2.component.html',
  styleUrls: ['./form-buider2.component.scss']
})
export class FormBuider2Component implements OnInit {
  hide = true;
  

  constructor(private clientData: FormBuilderDataService) {
      
    }
  
  

  submit(){  
    console.log(this.clientData);  
  }

   ngOnInit() {   }
}