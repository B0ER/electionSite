import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ShareService} from '../../_services/share.service';
import {User} from '../../_models/user';
import {ApiService} from '../../_services/api.service';
import {Question} from '../../_models/question';

@Component({
  selector: 'app-director',
  templateUrl: './lider.component.html',
  styleUrls: ['./lider.component.scss']
})
export class LiderComponent implements OnInit {
  selectedValue: number;
  visible: boolean;
  userList: Array<User>;
  @ViewChild('modal') modal: ElementRef;


  constructor(private apiService: ApiService, private shareService: ShareService, private render: Renderer2) {
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
    this.render.addClass(this.modal.nativeElement, 'close_modal');

    setTimeout(function (page) {
      page.visible = false;
      page.render.removeClass(page.modal.nativeElement, 'close_modal');
    }, 500, this);
  }

  pickHead(userId) {
    this.shareService.updateAllSettings();
    this.apiService.updateLider(userId).subscribe(() => {});
    this.closeHeadModal();
  }
}
