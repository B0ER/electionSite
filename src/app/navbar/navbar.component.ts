import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ShareService} from '../_services/share.service';
import {Router} from '@angular/router';
import {ApiService} from '../_services/api.service';

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
  @ViewChild('settingsLink') settingsLink: ElementRef;

  currentSession: string;
  currentConvocation: string;

  constructor(private shareService: ShareService, private router: Router, private render: Renderer2, private apiService: ApiService) {
  }


  ngOnInit() {
    this.apiService.getSessionConvacation().subscribe((response) => {
      this.currentSession = response['sessionName'];
      this.currentConvocation = response['convocationName'];
    })

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
      case '/settings':
        this.render.addClass(this.settingsLink.nativeElement, 'active_link');
        break;
    }
  }

  loadSessionConvacation(){
    this.apiService.getSessionConvacation().subscribe();
  }
}
