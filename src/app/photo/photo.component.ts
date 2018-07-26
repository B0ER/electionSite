import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {Speaker} from '../_models/speaker';
import {Photo} from '../_models/photo';
import {FileItem, FileUploader, Headers, ParsedResponseHeaders} from 'ng2-file-upload';

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
  fileName: string;

  currentConvocation: string;
  currentSession: string;
  emptySession: boolean;
  idSpeakerSelected: boolean = false;
  fileSelected: boolean = null;

  public uploader: FileUploader = new FileUploader({
    url: `${this.apiService.API_URL}/insertPhoto.php`,
    additionalParameter: {id_speaker: null},
    itemAlias: 'photo'
  });

  messageError: string;
  isSetPhoto: boolean = false;

  constructor(private apiService: ApiService) {
    this.showModal = false;
    this.allIsSelect = false;
    this.idSelectSpeaker = null;
    this.addedPhoto = new Photo;
    this.fileName = 'Обрати файл';
  }

  ngOnInit() {
    this.loadImages();
    this.loadSpeakers();
    this.loadInfo();

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      this.fileName = file._file.name;
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
      this.idSelectSpeaker = null;
    };
  }

  closeModal() {
    this.showModal = false;
    this.fileName = 'Обрати файл';
  }

  deleteItem(id) {
    this.itemData = this.itemData.filter((obj) => {
      if (obj.id === id) {
        this.apiService.deletePhoto(obj).subscribe();
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
      this.closeModal();
    }
  }

  addItem() {
    this.showModal = true;
  }

  private loadImages() {
    this.apiService.getImages().subscribe((data: Array<Photo>) => {
      this.itemData = data;
      this.isSetPhoto = data.length !== 0;
    });
  }

  private loadSpeakers() {
    this.apiService.getSpeakers().subscribe((data: Array<Speaker>) => {
      this.speakerList = data;
    });
  }

  private loadInfo() {
    this.apiService.getSessionConvacation().subscribe((response) => {
      this.currentConvocation = response['convocationName'];
      if (response['sessionName'] !== null) {
        this.currentSession = response['sessionName'];
        this.emptySession = false;
      } else {
        this.emptySession = true;
        this.currentSession = 'немає';
      }
    });
  }

  showToast(message) {
    this.messageError = message;

    // Get the snackbar DIV
    let x = document.getElementById('snackbar');

    // Add the "show" class to DIV
    x.className = 'show';

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace('show', '');
    }, 3000);
  }

  changeIdSpeaker() {
    if (this.idSelectSpeaker == null) {
      this.idSpeakerSelected = false;
    }

    if (this.idSelectSpeaker != null) {
      this.idSpeakerSelected = true;
    }
  }

  fileSelect() {
    if (!this.uploader.getNotUploadedItems().length) {
      this.fileSelected = true;
    } else {
      this.fileSelected = false;
    }
  }
}
