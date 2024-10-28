import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabManagement {
  eventEmitter = new EventEmitter<string>();

  emitEvent(message: string) {
    this.eventEmitter.emit(message);
  }
}