import {Injectable} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  showTimeModalEmitter = new EventEmitter<boolean>(true);
  showDirectorModalEmitter = new EventEmitter<boolean>(true);

  constructor() {
  }

  public showTimeModal() {
    this.showTimeModalEmitter.emit(true);
  }

  public showDirectorModal() {
    this.showDirectorModalEmitter.emit(true);
  }
}
