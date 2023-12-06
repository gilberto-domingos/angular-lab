import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-receive',
  templateUrl: './event-receive.component.html',
  styleUrls: ['./event-receive.component.scss']
})
export class EventReceiveComponent {
  

  message:string = '';

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.currentMessage.subscribe(message => this.message = message)
    console.log("Recebendo a varivel : ", this.message)
  }
}
