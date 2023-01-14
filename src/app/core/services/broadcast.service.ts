import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  menuVisibility = new BehaviorSubject(false);
  constructor() { }
}
