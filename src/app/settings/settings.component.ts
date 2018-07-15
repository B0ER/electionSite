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
    this.convocationItem = {};
    this.sessionItem = {};
    this.timeItem = {};
    this.mainUserItem = {};

    this.sessionItem.isOpen = -1;
    this.mainUserItem = false;

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

  showLiderModal() {
    this.shareService.showLiderModal();
  }

  showSessionModal() {
    this.shareService.showSessionModal();
  }

  showConvocationModal() {
    this.shareService.showConvocationModal();
  }
}
