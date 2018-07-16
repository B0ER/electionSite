import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {ShareService} from '../services/share.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  private static OPEN = 1;

  sessionItem: any;
  convocationItem: any;
  mainUserItem: any;
  timeItem: any;

  sessionIsOpen: number;

  constructor(private apiService: ApiService, private shareService: ShareService) {
    this.convocationItem = {};
    this.sessionItem = {};
    this.timeItem = {};
    this.mainUserItem = {};

    this.sessionIsOpen = -1;
    this.mainUserItem = false;

    this.loadSettings();

    this.shareService.updateEmitter.subscribe(() => {
      this.loadSettings();
    });
  }

  ngOnInit() {
  }

  private loadSettings() {
    this.apiService.settingsSite().subscribe((response) => {
      this.convocationItem = response['convacation'];

      this.sessionItem = response['session'];
      if (this.sessionItem === false) {
        this.sessionIsOpen = -1;
      } else {
        this.sessionIsOpen = response['session']['isOpen'];
      }

      this.mainUserItem = response['lider'];

      this.timeItem = response['time'];
    });
  }

  showTimeModal() {
    this.shareService.showTimeModal(this.timeItem);
  }

  showLiderModal() {
    this.shareService.showLiderModal(this.mainUserItem);
  }

  showSessionModal() {
    this.shareService.showSessionModal();
  }

  showConvocationModal() {
    this.shareService.showConvocationModal();
  }

  openLastSession() {
    this.apiService.sessionIsOpen(this.sessionItem['id']).subscribe(() => {
      this.loadSettings();
    });
  }
}
