import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-receive',
  templateUrl: './event-receive.component.html',
  styleUrls: ['./event-receive.component.scss']
})
export class EventReceiveComponent {
  @Input() title: string = 'novo titulo';

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.titleEvent.subscribe((title: string) => {
      this.title = title;
    });
  }

}