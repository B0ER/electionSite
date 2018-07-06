import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit {
  showTimeModal: boolean;
  selectedTime: number;

  constructor() {
  }

  ngOnInit() {
    this.showTimeModal = false;
  }

  pickTime(selectedTime) {
    this.closeTimeModal();
  }

  closeTimeModal() {
    this.showTimeModal = false;
  }


}
