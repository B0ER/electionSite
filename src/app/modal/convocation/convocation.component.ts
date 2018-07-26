import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ShareService} from '../../_services/share.service';
import {ApiService} from '../../_services/api.service';
import {Question} from '../../_models/question';

@Component({
  selector: 'app-convocation',
  templateUrl: './convocation.component.html',
  styleUrls: ['./convocation.component.scss']
})
export class ConvocationComponent implements OnInit {

  inputValue: string;
  visible: boolean;
  @ViewChild('modal') modal: ElementRef;

  constructor(private shareService: ShareService, private apiService: ApiService, private render: Renderer2) {
  }

  ngOnInit() {
    this.visible = false;
    console.log('ngOnInit convocationModal');
    this.shareService.showConvocationModalEmitter.subscribe(isVisible => {
      this.visible = isVisible;
    });
  }

  closeHeadModal() {

    this.render.addClass(this.modal.nativeElement, 'close_modal');

    setTimeout(function (page) {
      page.inputValue = '';
      page.visible = false;
      page.render.removeClass(page.modal.nativeElement, 'close_modal');
    }, 500, this);
  }

  saveConvocation() {
    this.apiService.createConvocation(this.inputValue).subscribe(() => {
      this.shareService.updateAllSettings();
    });
    this.closeHeadModal();
  }
}
