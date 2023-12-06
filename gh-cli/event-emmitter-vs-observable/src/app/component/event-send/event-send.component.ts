import { Component } from '@angular/core';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-send',
  templateUrl: './event-send.component.html',
  styleUrls: ['./event-send.component.scss']
})
export class EventSendComponent {
  title: string = '';

  message:string = '';

  constructor(private eventService:EventService) {}

  ngOnInit() {
    this.eventService.currentMessage.subscribe(message => this.message = message)
  }

  newMessage(){
    this.eventService.changeMessage("NOVA MENSAGEM");
    console.log("IMPRIMINDO : ", this.message)
  }

  onSubmit() {
    
  }

}
