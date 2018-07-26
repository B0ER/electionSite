import {Component, OnInit} from '@angular/core';
import {ShareService} from '../../_services/share.service';
import {ApiService} from '../../_services/api.service';

@Component({
  selector: 'app-convocation',
  templateUrl: './convocation.component.html',
  styleUrls: ['./convocation.component.scss']
})
export class ConvocationComponent implements OnInit {

  inputValue: string;
  visible: boolean;
  headArr: any;

  constructor(private shareService: ShareService, private apiService: ApiService) {
  }

  ngOnInit() {
    this.visible = false;
    console.log('ngOnInit convocationModal');
    this.shareService.showConvocationModalEmitter.subscribe(isVisible => {
      this.visible = isVisible;
    });
  }

  closeHeadModal() {
    this.inputValue = '';
    this.visible = false;
  }

  saveConvocation() {
    this.apiService.createConvocation(this.inputValue).subscribe(() => {
      this.shareService.updateAllSettings();
    });
    this.closeHeadModal();
  }
}
