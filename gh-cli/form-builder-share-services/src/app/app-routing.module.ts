import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormBuider2Component } from './form-buider2/form-buider2.component';
import { FormBuilderDataService } from './services/form-builder-data.service';


const routes: Routes = [
  {
    path:'',
    redirectTo:'form-builder',
    pathMatch:'full'
  },
  {
    path:'form-builder',
    component: FormBuilderComponent
  },
  {
    path:'form-builder2',
    component:FormBuider2Component
  }

];

@NgModule({
  imports: [MaterialModule,FormsModule, BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [FormBuilderComponent, FormBuider2Component],
  providers:[FormBuilderDataService]
})
export class AppRoutingModule { }
