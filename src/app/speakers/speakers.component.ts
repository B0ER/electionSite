import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {User} from '../_models/user';
import {Question} from '../_models/question';
import {Speaker} from '../_models/speaker';

@Component({
  selector: 'app-speakers',
  templateUrl: 'speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})

export class SpeakersComponent implements OnInit {

  formSpeaker: Speaker;

  itemData: Array<Speaker>;
  modalVisible: boolean;
  allIsSelect: boolean;
  currentConvocation: string;
  currentSession: string;
  emptySession: boolean;

  messageError: string;
  isSetSpeaker: boolean = false;

  constructor(private apiService: ApiService) {
    this.formSpeaker = new Speaker();
    this.modalVisible = false;
    this.allIsSelect = false;
  }

  ngOnInit() {
    this.loadInfo();
    this.loadSpeakers();
  }

  closeModal() {
    this.formSpeaker = new Speaker();
    this.modalVisible = false;
  }


  selectAll() {
    this.itemData.forEach((item) => {
      item.checked = this.allIsSelect;
    });
  }

  deleteSelected() {
    this.itemData = this.itemData.filter((obj) => {
      if (obj.checked === true) {
        this.apiService.deleteSpeaker(obj).subscribe();
        return false;
      }
      return true;
    });
  }

  saveItem() {
    let tempSpeaker: Speaker = new Speaker(this.formSpeaker);
    this.apiService.insertSpeaker(this.formSpeaker).subscribe((response) => {
      let speakerChanged: Speaker = this.itemData.filter((item) => {
        return item.id === response['id'];
      })[0];

      if (speakerChanged === undefined) {
        tempSpeaker.id = response['id'];
        this.itemData.push(tempSpeaker);
      } else {
        speakerChanged.FIO = tempSpeaker.FIO;
        speakerChanged.post = tempSpeaker.post;
        speakerChanged.short_descriptions = tempSpeaker.short_descriptions;
      }
    });
    this.closeModal();
  }

  showModal() {
    this.modalVisible = true;
  }

  changeSpeaker(id){
    let tempSpeaker = this.itemData.filter((item) => {
      return item.id === id;
    })[0];
    this.formSpeaker = new Speaker(tempSpeaker);
    this.modalVisible = true;
  }

  private loadSpeakers() {
    this.apiService.getSpeakers().subscribe((data: Array<Speaker>) => {
      this.itemData = data;
      this.isSetSpeaker = data.length !== 0;
    });
  }

  private loadInfo() {
    this.apiService.getSessionConvacation().subscribe((response) => {
      this.currentConvocation = response['convocationName'];
      if (response['sessionName'] !== null) {
        this.currentSession = response['sessionName'];
        this.emptySession = false;
      } else {
        this.currentSession = 'немає';
        this.emptySession = true;
      }
    });
  }

  showToast(message) {
    this.messageError = message;

    // Get the snackbar DIV
    let x = document.getElementById('snackbar');

    // Add the "show" class to DIV
    x.className = 'show';

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() { x.className = x.className.replace('show', ''); }, 3000);
  }
}
