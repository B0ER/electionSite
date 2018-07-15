import {Component, OnInit} from '@angular/core';
import {ShareService} from '../../services/share.service';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit {
  visible: boolean;
  selectedTime: number;
  timeObj: object;

  constructor(private apiService: ApiService, private shareService: ShareService) {
  }

  ngOnInit() {
    this.visible = false;
    this.shareService.showTimeModalEmitter.subscribe(timeObj => {
      this.visible = true;
      this.timeObj = timeObj;
      this.selectedTime = this.timeObj['time'];
    });
  }

  pickTime() {
    this.shareService.updateAllSettings();
    this.apiService.updateTime(this.selectedTime).subscribe(() => {
    });
    this.closeTimeModal();
  }

  closeTimeModal() {
    this.visible = false;
  }

  changeInput() {
    if (this.selectedTime < 5) {
      this.selectedTime = 5;
    }

    if (this.selectedTime > 3600) {
      this.selectedTime = 3600;
    }
  }
}
