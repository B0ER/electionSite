import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {User} from '../models/user';
import {Question} from '../models/question';

@Component({
  selector: 'app-ask',
  templateUrl: 'ask.component.html',
  styleUrls: ['./ask.component.scss']
})

export class AskComponent implements OnInit {
  /*Modal*/
  usersList: Array<User>;
  ask: string;
  des: string;
  addingQuestion: Question;
  idSelectUser: number;
  /*Table*/
  questionsArr: Array<Question>;
  showModal: boolean;

  allIsSelect: boolean;


  constructor(private apiService: ApiService) {
    this.questionsArr = [];
    this.showModal = false;
    this.addingQuestion = new Question();
    this.idSelectUser = null;
    this.allIsSelect = false;
  }

  ngOnInit() {
    this.loadQuestion();
    this.loadUsers();
  }

  closeModal() {
    this.ask = '';
    this.des = '';
    this.addingQuestion = new Question();
    this.idSelectUser = null;
    this.showModal = false;
  }

  selectAll() {
    this.allIsSelect = !this.allIsSelect;
    this.questionsArr.forEach((item) => {
      item.checked = this.allIsSelect;
    });
  }

  deleteSelected() {
    this.questionsArr = this.questionsArr.filter((obj) => {
      if (obj.checked === true) {
        this.apiService.deleteQuestion(obj).subscribe();
        return false;
      }
      return true;
    });
  }

  saveItem(ask, des) {
    let dataObj = new Question();
    dataObj.name = ask;
    dataObj.description = des;
    dataObj.id_user = this.idSelectUser;
    if (this.idSelectUser != null) {
      const selectUser: User = this.usersList.filter((item) => {
        return item.id === this.idSelectUser;
      })[0];
      console.log(selectUser);
      dataObj.imya = selectUser.imya;
      dataObj.fam = selectUser.fam;
      dataObj.otch = selectUser.otch;
    }
    this.apiService.insertQuestion(dataObj).subscribe((response) => {
      dataObj.id = response['id'];
    });
    this.questionsArr.push(dataObj);
    this.closeModal();
    console.log(dataObj);
  }

  addItem() {
    this.showModal = true;
  }

  private loadQuestion() {
    this.apiService.getQuestions().subscribe((data: Array<Question>) => {
      this.questionsArr = data;
    });
  }

  private loadUsers() {
    this.apiService.getUsers().subscribe((data: Array<User>) => {
      this.usersList = data;
    });
  }
}
