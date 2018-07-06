import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {
  selectedValue: string;
  showHeaderModal: boolean;
  headArr: any;

  constructor() {
    this.headArr = ['head1', 'head2', 'head3', 'head4', 'head5', 'head6', 'head7', 'head8'];
  }

  ngOnInit() {
  }

  closeHeadModal() {
    this.showHeaderModal = false;
  }

  pickHead(head) {
    console.log('head', head);
    this.closeHeadModal();
  }
}
