import { Component, OnInit } from '@angular/core';
import {ShareService} from '../../services/share.service';

@Component({
  selector: 'app-convocation',
  templateUrl: './convocation.component.html',
  styleUrls: ['./convocation.component.scss']
})
export class ConvocationComponent implements OnInit {

  selectedValue: string;
  visible: boolean;
  headArr: any;

  constructor(private shareService: ShareService) {
    this.headArr = ['head1', 'head2', 'head3', 'head4', 'head5', 'head6', 'head7', 'head8'];
  }

  ngOnInit() {
    this.visible = false;
    console.log('ngOnInit convocationModal');
    this.shareService.showConvocationModalEmitter.subscribe(isVisible => {
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