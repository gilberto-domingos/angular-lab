import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventSendComponent } from './component/event-send/event-send.component';
import { EventReceiveComponent } from './component/event-receive/event-receive.component';
import { ObserveSendComponent } from './component/observe-send/observe-send.component';
import { ObserveReceiveComponent } from './component/observe-receive/observe-receive.component';
import { EventService } from './service/event.service';
import { ObservableService } from './service/observable.service';

@NgModule({
  declarations: [
    AppComponent,
    EventSendComponent,
    EventReceiveComponent,
    ObserveSendComponent,
    ObserveReceiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EventService, ObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
