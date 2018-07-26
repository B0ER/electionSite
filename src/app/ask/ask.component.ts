import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {User} from '../_models/user';
import {Question} from '../_models/question';
import {Speaker} from '../_models/speaker';

@Component({
  selector: 'app-ask',
  templateUrl: 'ask.component.html',
  styleUrls: ['./ask.component.scss']
})

export class AskComponent implements OnInit {
  /*Modal*/
  usersList: Array<User>;
  formAsk: Question;
  /*Table*/
  questionsArr: Array<Question>;
  modalVisible: boolean;
  allIsSelect: boolean;
  currentConvocation: string;
  currentSession: string;
  emptySession: boolean;

  constructor(private apiService: ApiService) {
    this.modalVisible = false;
    this.formAsk = new Question();
    this.allIsSelect = false;
  }

  ngOnInit() {
    this.loadInfo();
    this.loadQuestion();
    this.loadUsers();
  }

  closeModal() {
    this.formAsk = new Question();
    this.modalVisible = false;
  }

  selectAll() {
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

  saveItem() {
    if (this.formAsk.id_user !== null) {
      const selectUser: User = this.usersList.filter((item) => {
        return item.id === this.formAsk.id_user;
      })[0];
      this.formAsk.imya = selectUser.imya;
      this.formAsk.fam = selectUser.fam;
      this.formAsk.otch = selectUser.otch;
    }

    let tempQuestion = new Question(this.formAsk);

    this.apiService.insertQuestion(this.formAsk).subscribe((response) => {
      let questionChanged: Question = this.questionsArr.filter((item) => {
        return item.id === response['id'];
      })[0];

      if (questionChanged === undefined) {
        tempQuestion.id = response['id'];
        this.questionsArr.push(tempQuestion);
      } else {
        questionChanged.name = tempQuestion.name;
        questionChanged.description = tempQuestion.description;
        questionChanged.id_user = tempQuestion.id_user;
        questionChanged.imya = tempQuestion.imya;
        questionChanged.fam = tempQuestion.fam;
        questionChanged.otch = tempQuestion.otch;
      }
    });

    this.closeModal();
  }

  showModal() {
    this.modalVisible = true;
  }

  changeQuestion(id) {
    let tempQuestion = this.questionsArr.filter((item) => {
      return item.id === id;
    })[0];
    this.formAsk = new Question(tempQuestion);
    this.modalVisible = true;
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

  private loadInfo() {
    this.apiService.getSessionConvacation().subscribe((response) => {
      this.currentConvocation = response['convocationName'];
      if (response['sessionName'] !== null) {
        this.currentSession = response['sessionName'];
        this.emptySession = false;
      } else {
        this.currentSession = 'немає';
        this.emptySession = true;
      }
    });
  }
}
