///<reference path="../models/user.ts"/>
import {Component, OnInit} from '@angular/core';
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


  formUser: User;

  modalVisible: boolean;

  constructor(private apiService: ApiService) {
    this.modalVisible = false;
    this.allIsSelect = false;
  }

  ngOnInit() {
    this.loadUser();
  }

  closeModal() {
    this.formUser = new User();
    this.modalVisible = false;
  }

  selectAll() {
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

  saveItem() {
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
  }

  showModal() {
    this.modalVisible = true;
  }

  changeUser(id) {
    let tempUser = this.userArray.filter((item) => {
      return item.id === id;
    })[0];
    this.formUser = new User(tempUser);
    this.modalVisible = true;
  }

  private loadUser() {
    this.apiService.getUsers().subscribe((data: Array<User>) => {
      this.userArray = data;
    });
  }
}
