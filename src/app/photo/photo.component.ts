import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Speaker} from '../models/speaker';
import {Photo} from '../models/photo';
import {FileItem, FileUploader, Headers, ParsedResponseHeaders} from 'ng2-file-upload';
import {User} from '../models/user';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['./photo.component.scss']
})

export class PhotoComponent implements OnInit {
  speakerList: Array<Speaker>;
  idSelectSpeaker: number;
  itemData: Array<Photo>;
  allIsSelect: boolean;
  showModal: boolean;
  addedPhoto: Photo;
  public uploader: FileUploader = new FileUploader({
    url: `${this.apiService.API_URL}/insertPhoto.php`,
    additionalParameter: {id_speaker: null},
    itemAlias: 'photo'
  });

  constructor(private apiService: ApiService) {
    this.showModal = false;
    this.allIsSelect = false;
    this.idSelectSpeaker = null;
    this.addedPhoto = new Photo;
  }

  ngOnInit() {
    this.loadImages();
    this.loadSpeakers();

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    this.uploader.onBuildItemForm = (fileItem: FileItem, form: any) => {
      if (this.idSelectSpeaker != null) {
        form.append('idSpeaker', this.idSelectSpeaker);
      }
    };

    this.uploader.onSuccessItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      let objResp = JSON.parse(response);
      this.addedPhoto.id = objResp[0].id;
      this.addedPhoto.image = objResp[0].url;
      this.itemData.push(this.addedPhoto);
      this.addedPhoto = new Photo();
    };
  }

  closeModal() {
    this.showModal = false;
    this.addedPhoto = new Photo();
  }

  deleteItem(id) {
    this.itemData = this.itemData.filter((obj) => {
      if (obj.id === id) {
        this.apiService.deletePhoto(obj).subscribe((response) => {
          console.log(response);
        });
        return false;
      }
      return true;
    });
  }

  saveItem() {
    if (this.idSelectSpeaker != null) {
      const speaker: Speaker = this.speakerList.filter((item) => {
        return item.id === this.idSelectSpeaker;
      })[0];
      this.addedPhoto.FIO = speaker.FIO;
      this.addedPhoto.id_speaker = this.idSelectSpeaker;
      this.uploader.uploadAll();
    }
  }

  addItem() {
    this.showModal = true;
  }

  private loadImages() {
    this.apiService.getImages().subscribe((data: Array<Photo>) => {
      this.itemData = data;
    });
  }

  private loadSpeakers() {
    this.apiService.getSpeakers().subscribe((data: Array<Speaker>) => {
      this.speakerList = data;
      console.log(this.speakerList);
    });
  }
}
