import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../services/api.service';

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

  saveItem(name, lastName, patr, consig, mac) {
    let dataObj = {
      id: null,
      imya: name,
      fam: lastName,
      otch: patr,
      consignment: consig,
      MAC: mac,
      checked: false
    };
    this.apiService.insertUser(dataObj).subscribe((response) => {
      dataObj.id = response['id'];
    });
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
