import {Component, OnInit} from '@angular/core';
import {ShareService} from '../../services/share.service';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit {
  visible: boolean;
  selectedTime: number;

  constructor(private shareService: ShareService) {
  }

  ngOnInit() {
    this.visible = false;
    this.shareService.showTimeModalEmitter.subscribe(isVisible => {
      this.visible = isVisible;
    });
  }

  pickTime(selectedTime) {
    this.closeTimeModal();
  }

  closeTimeModal() {
    this.visible = false;
  }
}
