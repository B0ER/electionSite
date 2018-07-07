import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ShareService} from '../share.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('userLink') userLink: ElementRef;
  @ViewChild('speakerLink') speakerLink: ElementRef;
  @ViewChild('questionLink') questionLink: ElementRef;
  @ViewChild('photoLink') photoLink: ElementRef;

  constructor(private shareService: ShareService, private router: Router, private render: Renderer2) {
  }


  ngOnInit() {
    switch (this.router.url) {
      case '/global':
        this.render.addClass(this.userLink.nativeElement, 'active_link');
        break;
      case '/ask':
        this.render.addClass(this.questionLink.nativeElement, 'active_link');
        break;
      case '/speakers':
        this.render.addClass(this.speakerLink.nativeElement, 'active_link');
        break;
      case '/photo':
        this.render.addClass(this.photoLink.nativeElement, 'active_link');
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
