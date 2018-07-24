export class Question {
  public id: number;
  public name: string;
  public description: string;
  public checked: boolean;

  public id_user: number;
  public imya: string;
  public fam: string;
  public otch: string;

  constructor(question?: Question) {
    if (question !== undefined) {
      this.id = question.id;
      this.name = question.name;
      this.description = question.description;
      this.checked = question.checked;
      this.id_user = question.id_user;
      this.imya = question.imya;
      this.fam = question.fam;
      this.otch = question.otch;
    } else {
      this.id = null;
      this.name = '';
      this.description = '';
      this.checked = false;
      this.id_user = null;
      this.imya = '';
      this.fam = '';
      this.otch = '';
    }
  }
}
