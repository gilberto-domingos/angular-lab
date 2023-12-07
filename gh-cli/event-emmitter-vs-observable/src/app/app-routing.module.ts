
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventSendComponent } from './component/event-send/event-send.component';
import { EventReceiveComponent } from './component/event-receive/event-receive.component';
import { SiblingComponent } from './component/sibling/sibling.component';
import { OutputPropertyComponent } from './component/output-property/output-property.component';
import { BindingPropertyComponent } from './component/binding-property/binding-property.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sibling' },

  { path: 'event-send', component: EventSendComponent },
  { path: 'event-receive', component: EventReceiveComponent }, 
  { path: 'sibling', component: SiblingComponent },
  { path: 'output', component: OutputPropertyComponent },
  { path: 'binding', component: BindingPropertyComponent },
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
