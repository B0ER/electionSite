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
  selectedAll: any;
  showModal: boolean;

  // @ViewChild('valid_name') valid_name;
  // @ViewChild('valid_lastName') valid_lastName;
  // @ViewChild('vpatr') vpatr;
  // @ViewChild('vconsig') vconsig;
  // @ViewChild('vaddress') vaddress;

  constructor(private apiService: ApiService) {
    this.showModal = false;
  }

  ngOnInit() {
    this.loadUser();
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
    // for (let i = 0; i < this.userArray.length; i++) {
    //   this.userArray[i].checked = this.selectedAll;
    // }
    // console.log('items data', this.userArray);
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
