import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: 'global.component.html',
  styleUrls: ['./global.component.scss']
})

export class GlobalComponent implements OnInit {
  userArray: Array<object> = [];

  name: string;
  lastName: string;
  patr: string;
  consig: string;
  address: string;
  showHeaderModal: boolean;
  showTimeModal: boolean;
  selectedTime: number;
  selectedAll: any;
  showModal: boolean;
  selectedValue: string;
  headArr: any;

  constructor(private apiService: ApiService) {
    this.showModal = false;
    this.showTimeModal = false;
    this.headArr = ['head1', 'head2', 'head3', 'head4', 'head5', 'head6', 'head7', 'head8'];
  }

  ngOnInit() {
    this.loadUser();
  }

  @ViewChild('valid_name') valid_name;
  @ViewChild('valid_lastName') valid_lastName;
  @ViewChild('vpatr') vpatr;
  @ViewChild('vconsig') vconsig;
  @ViewChild('vaddress') vaddress;


  closeModal() {
    this.name = '';
    this.lastName = '';
    this.patr = '';
    this.consig = '';
    this.address = '';
    this.showModal = false;
  }

  selectAll() {
    // for (let i = 0; i < this.userArray.length; i++) {
    //   this.userArray[i].checked = this.selectedAll;
    // }
    // console.log('items data', this.userArray);
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
    // const data = [];
    // for (let i = 0; i < this.userArray.length; i++) {
    //   if (this.userArray[i].checked === false) {
    //     data.push(this.userArray[i]);
    //   }
    // }
    // this.selectedAll = '';
    // this.userArray = data;
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
    this.userArray.push(dataObj);
    this.closeModal();
  }

  showTime() {
    this.showTimeModal = true;
  }

  addItem() {
    this.showModal = true;
  }

  private loadUser() {
    this.apiService.getUsers().subscribe((data: Array<object>) => {
      this.userArray = data;
      console.log('Data is set');
    });
  }
}
