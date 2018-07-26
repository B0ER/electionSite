import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ShareService} from '../../_services/share.service';
import {ApiService} from '../../_services/api.service';
import {Question} from '../../_models/question';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit {
  visible: boolean;
  selectedTime: number;
  timeObj: object;
  @ViewChild('modal') modal: ElementRef;

  constructor(private apiService: ApiService, private shareService: ShareService, private render: Renderer2) {
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
    this.render.addClass(this.modal.nativeElement, 'close_modal');

    setTimeout(function (page) {
      page.formSpeaker = new Question();
      page.visible = false;
      page.render.removeClass(page.modal.nativeElement, 'close_modal');
    }, 500, this);
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
