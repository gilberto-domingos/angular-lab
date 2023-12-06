import { Component } from '@angular/core';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-send',
  templateUrl: './event-send.component.html',
  styleUrls: ['./event-send.component.scss']
})
export class EventSendComponent {
  title: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit() {
  }

  onSubmit() {
    this.eventService.emitTitleEvent(this.title);
    console.log("Enviando : ", this.title )
  }

}