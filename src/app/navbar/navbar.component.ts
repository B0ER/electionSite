import {Component, OnInit} from '@angular/core';
import {ShareService} from '../share.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private shareService: ShareService, private router: Router) {
  }


  ngOnInit() {
    switch (this.router.url) {
      case '/global':
        break;
      case '/ask':
        break;
      case '/speakers':
        break;
      case '/photo':
        break;
    }
  }

  showTimeModal() {
    this.shareService.showTimeModal();
  }

  showDirectorModal() {
    this.shareService.showDirectorModal();
  }
}
