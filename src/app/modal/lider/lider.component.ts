import {Component, OnInit} from '@angular/core';
import {ShareService} from '../../services/share.service';
import {User} from '../../models/user';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-director',
  templateUrl: './lider.component.html',
  styleUrls: ['./lider.component.scss']
})
export class LiderComponent implements OnInit {
  selectedValue: number;
  visible: boolean;

  liderObj: object;
  userList: Array<User>;


  constructor(private apiService: ApiService, private shareService: ShareService) {
    apiService.getUsers().subscribe((users: Array<User>) => {
      this.userList = users;
    });
  }

  ngOnInit() {
    this.visible = false;
    this.selectedValue = null;

    this.shareService.showLiderModalEmitter.subscribe(liderObj => {
      this.visible = true;
      if (liderObj !== false) {
        this.selectedValue = liderObj['id_user'];
      }
    });
  }

  closeHeadModal() {
    this.visible = false;
  }

  pickHead(userId) {
    this.shareService.updateAllSettings();
    this.apiService.updateLider(userId).subscribe(() => {});
    this.closeHeadModal();
  }
}
