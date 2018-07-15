import {Injectable} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  showTimeModalEmitter = new EventEmitter<object>(true);
  showLiderModalEmitter = new EventEmitter<boolean>(true);
  showSessionModalEmitter = new EventEmitter<boolean>(true);
  showConvocationModalEmitter = new EventEmitter<boolean>(true);
  updateEmitter = new EventEmitter(true);

  constructor() {
  }

  public showTimeModal(timeObj) {
    this.showTimeModalEmitter.emit(timeObj);
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

  public updateAllSettings() {
    this.updateEmitter.emit();
  }
}
