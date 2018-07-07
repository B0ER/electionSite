import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['./photo.component.scss']
})

export class PhotoComponent implements OnInit {

  name: string;
  lastName: string;
  patr: string;
  consig: string;
  address: string;
  selectedAll: any;
  itemData: Array<object>;
  showModal: boolean;

  constructor(private apiService: ApiService) {
    this.itemData = [];
    this.showModal = false;
  }

  ngOnInit() {
    this.loadImages();
  }

  closeModal() {
    this.name = '';
    this.lastName = '';
    this.patr = '';
    this.consig = '';
    this.address = '';
    this.showModal = false;
  }

  selectAll() {
    // for (let i = 0; i < this.itemData.length; i++) {
    //   this.itemData[i].checked = this.selectedAll;
    // }
    // console.log('items data', this.itemData);
  }

  deleteSelected() {
    // const data = [];
    // for (let i = 0; i < this.itemData.length; i++) {
    //   if (this.itemData[i].checked === false) {
    //     data.push(this.itemData[i]);
    //   }
    // }
    // this.selectedAll = '';
    // this.itemData = data;
  }

  saveItem(name, lastName, patr, consig, address) {
    // const dataObj = {
    //   name: name,
    //   lastName: lastName,
    //   patr: patr,
    //   consig: consig,
    //   address: address,
    //   checked: false
    // };
    // this.itemData.push(dataObj);
    // this.closeModal();
  }

  addItem() {
    this.showModal = true;
  }

  private loadImages() {
    this.apiService.getImages().subscribe((data: Array<object>) => {
      this.itemData = data;
    });
  }
}
