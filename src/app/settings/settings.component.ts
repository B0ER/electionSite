import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {ShareService} from '../services/share.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  sessionItem: any;
  convocationItem: any;
  mainUserItem: any;
  timeItem: any;

  constructor(private apiService: ApiService, private shareService: ShareService) {
    this.sessionItem = new Object();
    this.sessionItem.isOpen = 0;

    this.mainUserItem = new Object();
    this.mainUserItem = false;

    this.convocationItem = new Object();

    this.timeItem = new Object();

    this.loadSettings();
  }

  ngOnInit() {
  }

  private loadSettings() {
    this.apiService.settingsSite().subscribe((response) => {
      this.convocationItem = response['convacation'];

      this.sessionItem = response['session'];

      this.mainUserItem = response['lider'];

      this.timeItem = response['time'];
    });
  }

  showTimeModal() {
    this.shareService.showTimeModal();
  }

  showDirectorModal() {
    this.shareService.showDirectorModal();
  }


  private actionSession() {
    console.log('click');
  }

  private actionConvacation() {
    console.log('click2');
  }
}
