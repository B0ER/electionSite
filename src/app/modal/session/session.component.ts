import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ShareService} from '../../_services/share.service';
import {ApiService} from '../../_services/api.service';
import {Question} from '../../_models/question';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  inputValue: string;
  visible: boolean;
  @ViewChild('modal') modal: ElementRef;

  constructor(private shareService: ShareService, private apiService: ApiService, private render: Renderer2) {
  }

  ngOnInit() {
    this.visible = false;
    console.log('ngOnInit sessionModal');
    this.shareService.showSessionModalEmitter.subscribe(isVisible => {
      this.visible = isVisible;
    });
  }

  closeModal() {
    this.render.addClass(this.modal.nativeElement, 'close_modal');

    setTimeout(function (page) {
      page.inputValue = '';
      page.visible = false;
      page.render.removeClass(page.modal.nativeElement, 'close_modal');
    }, 500, this);
  }

  saveSession() {
    this.apiService.createSession(this.inputValue).subscribe(() => {this.shareService.updateAllSettings(); } );
    this.closeModal();
  }

}
