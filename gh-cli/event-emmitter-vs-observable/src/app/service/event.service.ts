import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  titleEvent: EventEmitter<string> = new EventEmitter();

  emitTitleEvent(title: string) {
    this.titleEvent.next(title);
    console.log("SERVICE a variavel : ", title );
  }

}