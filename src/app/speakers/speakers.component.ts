import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

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
  itemData: Array<object>;
  showModal: boolean;

  constructor(private apiService: ApiService) {
    this.itemData = [];
    this.showModal = false;
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
    // for (let i = 0; i < this.itemData.length; i++) {
    //   this.itemData[i].checked = this.selectedAll;
    // }
    // console.log('items data', this.itemData);
  }

  deleteSelected() {
    // const data = [];
    // for (let i = 0; i < this.itemData.length; i++) {
    //   if (this.itemData[i].checked === false) {
    //     data.push(this.itemData[i]);
    //   }
    // }
    // this.selectedAll = '';
    // this.itemData = data;
  }

  //FIO post short_descriptions
  saveItem(name, position, shortDes) {
    // const dataObj = {
    //   name: name,
    //   position: position,
    //   shortDes: shortDes,
    //   checked: false
    // };
    // this.itemData.push(dataObj);
    // this.closeModal();
  }

  addItem() {
    this.showModal = true;
  }

  private loadSpeakers() {
    this.apiService.getSpeakers().subscribe((data: Array<object>) => {
      this.itemData = data;
    });
  }
}
