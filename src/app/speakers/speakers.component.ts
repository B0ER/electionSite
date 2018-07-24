import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {User} from '../models/user';
import {Question} from '../models/question';
import {Speaker} from '../models/speaker';

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

  constructor(private apiService: ApiService) {
    this.formSpeaker = new Speaker();
    this.modalVisible = false;
    this.allIsSelect = false;
  }

  ngOnInit() {
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

  /*
  let tempFormUser = new User(this.formUser);

    this.apiService.insertUser(this.formUser).subscribe((response) => {
      let userChanged: User = this.userArray.filter((item) => {
        return item.id === response['id'];
      })[0];

      if (userChanged === undefined) {
        tempFormUser.id = response['id'];
        this.userArray.push(tempFormUser);
      } else {
        userChanged.imya = tempFormUser.imya;
        userChanged.fam = tempFormUser.fam;
        userChanged.otch = tempFormUser.otch;
        userChanged.MAC = tempFormUser.MAC;
        userChanged.consignment = tempFormUser.consignment;
      }

    });
    this.closeModal();
   */

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
    });
  }
}
