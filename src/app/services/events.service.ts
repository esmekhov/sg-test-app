import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public readonly bus = new EventEmitter();

  constructor() { }

}
