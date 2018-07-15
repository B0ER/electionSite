import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Speaker} from '../models/speaker';
import {Question} from '../models/question';
import {Photo} from '../models/photo';
import {ShareService} from './share.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_URL = 'http://31.202.52.184:2026';

  constructor(private httpClient: HttpClient, private shareService: ShareService) {
  }

  getQuestions() {
    return this.httpClient.get(`${this.API_URL}/select.php?table=questions`);
  }

  getSpeakers() {
    return this.httpClient.get(`${this.API_URL}/select.php?table=speakers`);
  }

  getUsers() {
    return this.httpClient.get(`${this.API_URL}/select.php?table=deputies`);
  }

  getImages() {
    return this.httpClient.get(`${this.API_URL}/select.php?table=images`);
  }

  insertQuestion(question: Question) {
    return this.httpClient.post(`${this.API_URL}/insertQuestion.php`, question);
  }

  insertSpeaker(speaker: Speaker) {
    return this.httpClient.post(`${this.API_URL}/insertSpeaker.php`, speaker);
  }

  insertUser(user: User) {
    return this.httpClient.post(`${this.API_URL}/insertUser.php`, user);
  }

  deleteQuestion(question: Question) {
    return this.httpClient.post(`${this.API_URL}/deleteQuestion.php`, question);
  }

  deleteUser(user: User) {
    return this.httpClient.post(`${this.API_URL}/deleteUser.php`, user);
  }

  deleteSpeaker(speaker: Speaker) {
    return this.httpClient.post(`${this.API_URL}/deleteSpeaker.php`, speaker);
  }

  insertImage(body) {
    return this.httpClient.post(`${this.API_URL}/insertPhoto.php`, body);
  }

  deletePhoto(photo: Photo) {
    return this.httpClient.post(`${this.API_URL}/deletePhoto.php`, photo);
  }

  settingsSite() {
    return this.httpClient.get(`${this.API_URL}/select.php?table=settingSite`);
  }

  updateTime(selectedTime: number) {
    return this.httpClient.get(`${this.API_URL}/update.php?time=${selectedTime}`);
  }

  updateLider(userId: number) {
    return this.httpClient.get(`${this.API_URL}/update.php?lider=${userId}`);
  }
}
