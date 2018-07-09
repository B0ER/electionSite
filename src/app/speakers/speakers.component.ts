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

  name: string;
  position: string;
  shortDes: string;
  selectedAll: any;
  itemData: Array<Speaker>;
  showModal: boolean;
  allIsSelect: boolean;

  constructor(private apiService: ApiService) {
    this.itemData = [];
    this.showModal = false;
    this.allIsSelect = false;
  }

  ngOnInit() {
    this.loadSpeakers();
  }

  closeModal() {
    this.name = '';
    this.position = '';
    this.shortDes = '';
    this.showModal = false;
  }


  selectAll() {
    this.allIsSelect = !this.allIsSelect;
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

  saveItem(FIO, post, short_descriptions) {
    let dataObj = new Speaker();
    dataObj.FIO = FIO;
    dataObj.post = post;
    dataObj.short_descriptions = short_descriptions;
    this.apiService.insertSpeaker(dataObj).subscribe((response) => {
      dataObj.id = response['id'];
    });
    this.itemData.push(dataObj);
    this.closeModal();
    console.log(dataObj);
  }

  addItem() {
    this.showModal = true;
  }

  private loadSpeakers() {
    this.apiService.getSpeakers().subscribe((data: Array<Speaker>) => {
      this.itemData = data;
    });
  }
}
