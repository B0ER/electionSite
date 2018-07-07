import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-ask',
  templateUrl: 'ask.component.html',
  styleUrls: ['./ask.component.scss']
})

export class AskComponent implements OnInit {

  ask: string;
  des: string;
  notuser: string;
  selectedAll: any;
  itemData: any[];
  showModal: boolean;


  constructor(private apiService: ApiService) {
    this.itemData = [];
    this.showModal = false;
  }

  ngOnInit() {
    this.loadQuestion();
  }

  closeModal() {
    this.ask = '';
    this.des = '';
    this.notuser = '';
    this.showModal = false;
  }

  selectAll() {
    for (let i = 0; i < this.itemData.length; i++) {
      this.itemData[i].checked = this.selectedAll;
    }
    console.log('items data', this.itemData);
  }

  deleteSelected() {
    const data = [];
    for (let i = 0; i < this.itemData.length; i++) {
      if (this.itemData[i].checked === false) {
        data.push(this.itemData[i]);
      }
    }
    this.selectedAll = '';
    this.itemData = data;
  }

  saveItem(ask, des, notuser) {
    const dataObj = {
      ask: ask,
      des: des,
      notuser: notuser,
      checked: false
    };
    this.itemData.push(dataObj);
    this.closeModal();
  }

  addItem() {
    this.showModal = true;
  }

  private loadQuestion() {
    this.apiService.getQuestions().subscribe((data: Array<object>) => {
      this.itemData = data;
    });
  }
}
