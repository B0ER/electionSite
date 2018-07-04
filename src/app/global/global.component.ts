import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: 'global.component.html',
  styleUrls: ['./global.component.scss']
})

export class GlobalComponent implements OnInit {

  name: string;
  lastName: string;
  patr: string;
  consig: string;
  address: string;
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

  @ViewChild('valid_name') valid_name;
  @ViewChild('valid_lastName') valid_lastName;
 /* @ViewChild('vpatr') vpatr;
  @ViewChild('vconsig') vconsig;
  @ViewChild('vaddress') vaddress;*/


  errorName: boolean = false;
  errorLastName: boolean = false;
  /*errorPatr: boolean = false;
  errorConsig: boolean = false;
  errorAddress: boolean = false;
  sentMess: boolean = false;*/

  regName = /^[a-zA-Z_]+$/i;


  sendMes() {

    this.errorName = false;
    this.errorLastName = false;
    /*this.errorPatr = false;
    this.errorConsig = false;
    this.errorAddress = false;
    this.sentMess = false;*/


    if (!this.regName.test(this.valid_name.value.toLowerCase())) {
      this.errorName = true;
    }


    if (!this.regName.test(this.valid_lastName.value.toLowerCase())) {
      this.errorLastName = true;
    }


    /*if (!this.regMes.test(this.subj.value.toLowerCase())) {
      this.errorSubj = true;
    }

    if (!this.regMes.test(this.mess.value.toLowerCase())) {
      this.errorMess = true;
    }*/
  }

  closeModal() {
    this.name = '';
    this.lastName = '';
    this.patr = '';
    this.consig = '';
    this.address = '';
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

  saveItem(name, lastName, patr, consig, address) {
    const dataObj = {
      name: name,
      lastName: lastName,
      patr: patr,
      consig: consig,
      address: address,
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
