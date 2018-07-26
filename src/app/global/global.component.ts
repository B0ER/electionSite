import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {User} from '../_models/user';

@Component({
  selector: 'app-main',
  templateUrl: 'global.component.html',
  styleUrls: ['./global.component.scss']
})

export class GlobalComponent implements OnInit {
  userArray: Array<User> = [];
  allIsSelect: boolean;
  formUser: User;
  currentConvocation: string;
  currentSession: string;

  modalVisible: boolean;

  // public customMask = {'0' : {pattern: new RegExp('^[0-9a-f]{2}([:])(?:[0-9a-f]{2}\\1){4}[0-9a-f]{2}$')}};
  public customMask = {'0': {pattern: new RegExp('\[0-9a-f\]')}};

  messageError: string = 'SOME MESSAGE';

  constructor(private apiService: ApiService) {
    this.formUser = new User();
    this.modalVisible = false;
    this.allIsSelect = false;
  }

  ngOnInit() {
    this.loadInfo();
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

  private loadInfo() {
    this.apiService.getSessionConvacation().subscribe((response) => {
      this.currentConvocation = response['convocationName'];
      if (response['sessionName'] !== null) {
        this.currentSession = response['sessionName'];
      } else {
        this.currentSession = 'немає';
      }
    });
  }

  showToast(message) {
    this.messageError = message;

    // Get the snackbar DIV
    let x = document.getElementById('snackbar');

    // Add the "show" class to DIV
    x.className = 'show';

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace('show', '');
    }, 3000);
  }

}
