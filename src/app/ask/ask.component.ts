import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: 'ask.component.html',
  styleUrls: ['./ask.component.scss']
})

export class AskComponent implements OnInit {

  ask: string;
  des: string;
  notuser: string;
  showHeaderModal: boolean;
  showTimeModal: boolean;
  selectedTime: number;
  selectedAll: any;
  itemData: any[];
  showModal: boolean;
  selectedValue: string;
  headArr: any;


  constructor() {
    this.itemData = [];
    this.showModal = false;
    this.showTimeModal = false;
    this.headArr = ['head1', 'head2', 'head3', 'head4', 'head5', 'head6', 'head7', 'head8'];
  }

  ngOnInit() {
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

  pickTime(selectedTime) {
    console.log('selected time', selectedTime);
    this.closeTimeModal();
  }

  closeTimeModal() {
    this.showTimeModal = false;
  }

  showHeader() {
    this.showHeaderModal = true;
  }

  closeHeadModal() {
    this.showHeaderModal = false;
  }

  pickHead(head) {
    console.log('head', head);
    this.closeHeadModal();
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

  showTime() {
    this.showTimeModal = true;
  }

  addItem() {
    this.showModal = true;
  }

}
