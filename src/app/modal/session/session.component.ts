import {Component, OnInit} from '@angular/core';
import {ShareService} from '../../_services/share.service';
import {ApiService} from '../../_services/api.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  inputValue: string;
  visible: boolean;

  constructor(private shareService: ShareService, private apiService: ApiService) {
  }

  ngOnInit() {
    this.visible = false;
    console.log('ngOnInit sessionModal');
    this.shareService.showSessionModalEmitter.subscribe(isVisible => {
      this.visible = isVisible;
    });
  }

  closeModal() {
    this.inputValue = '';
    this.visible = false;
  }

  saveSession() {
    this.apiService.createSession(this.inputValue).subscribe(() => {this.shareService.updateAllSettings(); } );
    this.closeModal();
  }

}
