import {Injectable} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  showTimeModalEmitter = new EventEmitter<boolean>(true);
  showLiderModalEmitter = new EventEmitter<boolean>(true);
  showSessionModalEmitter = new EventEmitter<boolean>(true);
  showConvocationModalEmitter = new EventEmitter<boolean>(true);

  constructor() {
  }

  public showTimeModal() {
    this.showTimeModalEmitter.emit(true);
  }

  public showLiderModal() {
    this.showLiderModalEmitter.emit(true);
  }

  public showConvocationModal() {
    this.showSessionModalEmitter.emit(true);
  }

  public showSessionModal() {
    this.showSessionModalEmitter.emit(true);
  }
}
