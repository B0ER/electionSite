import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../services/api.service';
import {User} from '../models/user';

@Component({
  selector: 'app-main',
  templateUrl: 'global.component.html',
  styleUrls: ['./global.component.scss']
})

export class GlobalComponent implements OnInit {
  userArray: Array<User> = [];
  allIsSelect: boolean;

  name: string;
  lastName: string;
  patr: string;
  consig: string;
  address: string;
  selectedAll: any;
  showModal: boolean;

  constructor(private apiService: ApiService) {
    this.showModal = false;
    this.allIsSelect = false;
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
    this.allIsSelect = !this.allIsSelect;
    this.userArray.forEach((item) => {
      item.checked = this.allIsSelect;
    });
  }

  deleteSelected() {
    this.userArray = this.userArray.filter((obj) => {
      if (obj.checked === true) {
        this.apiService.deleteUser(obj).subscribe();
        return false;
      }
      return true;
    });
  }

  saveItem(name, lastName, patr, consig, mac) {
    let dataObj = new User();
    dataObj.imya = name;
    dataObj.fam = lastName;
    dataObj.otch = patr;
    dataObj.consignment = consig;
    dataObj.MAC = mac;
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
    this.apiService.getUsers().subscribe((data: Array<User>) => {
      this.userArray = data;
    });
  }
}
