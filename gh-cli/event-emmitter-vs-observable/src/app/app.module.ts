import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventSendComponent } from './component/event-send/event-send.component';
import { EventReceiveComponent } from './component/event-receive/event-receive.component';

import { EventService } from './service/event.service';

import { SiblingComponent } from './component/sibling/sibling.component';
import { MenuComponent } from './component/menu/menu.component';
import { BindingPropertyComponent } from './component/binding-property/binding-property.component';
import { OutputPropertyComponent } from './component/output-property/output-property.component';
import { PropertyService } from './service/property.service';

@NgModule({
  declarations: [
    AppComponent,
    EventSendComponent,
    EventReceiveComponent,   
    SiblingComponent,
    MenuComponent,
    BindingPropertyComponent,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EventService,PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
