import {Component, OnInit} from '@angular/core';
import {ShareService} from '../../services/share.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {
  selectedValue: string;
  visible: boolean;
  headArr: any;

  constructor(private shareService: ShareService) {
    this.headArr = ['head1', 'head2', 'head3', 'head4', 'head5', 'head6', 'head7', 'head8'];
  }

  ngOnInit() {
    this.visible = false;
    console.log('ngOnInit directorModal');
    this.shareService.showDirectorModalEmitter.subscribe(isVisible => {
      this.visible = isVisible;
    });
  }

  closeHeadModal() {
    this.visible = false;
  }

  pickHead(head) {
    console.log('head', head);
    this.closeHeadModal();
  }
}
